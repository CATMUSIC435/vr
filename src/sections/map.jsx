import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Airplay, Building2, MapPin, RefreshCw, Map } from "lucide-react";
import { createRoot } from "react-dom/client";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";

// 🗺️ Danh sách style bản đồ
const mapStyles = {
  Streets: "mapbox://styles/mapbox/streets-v12",
  Satellite: "mapbox://styles/mapbox/satellite-streets-v12",
  Light: "mapbox://styles/mapbox/light-v11",
  Dark: "mapbox://styles/mapbox/dark-v11",
  "Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
  "Navigation Night": "mapbox://styles/mapbox/navigation-night-v1",
  "3D Terrain": "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y", // 👈 bản đồ 3D
};

const places = [
  { id: 1, name: "Trường Mẫu Giáo ABC", lng: 106.70123, lat: 10.87234 },
  { id: 2, name: "Trường Tiểu Học DEF", lng: 106.6978, lat: 10.86812 },
  { id: 3, name: "Trường Trung Học GHI", lng: 106.70411, lat: 10.874 },
  { id: 4, name: "Tên Đại Học J", lng: 106.70333, lat: 10.8695 },
];

export default function MapBoxBasic() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [showUtilities, setShowUtilities] = useState(false);
  const [mapStyle, setMapStyle] = useState(mapStyles.Streets);

  // --- Khởi tạo bản đồ ---
  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [106.70014, 10.87065],
      zoom: 15,
      pitch: 45, // 👈 nghiêng để thấy hiệu ứng 3D
      bearing: -17.6,
      antialias: true,
    });

    new mapboxgl.Marker({ color: "#d4ae6f" })
      .setLngLat([106.70014, 10.87065])
      .addTo(map.current);

    map.current.on("load", () => {
      map.current?.resize();
      enable3DTerrain(map.current); // 👈 thêm terrain và building 3D
    });
  }, []);

  // --- Khi đổi style ---
  useEffect(() => {
    if (!map.current) return;
    map.current.setStyle(mapStyle);
    map.current.once("style.load", () => {
      enable3DTerrain(map.current); // 👈 thêm lại 3D sau khi đổi style
    });
  }, [mapStyle]);

  // --- Hiển thị tiện ích ---
  useEffect(() => {
    if (!map.current) return;

    // Xóa marker cũ
    document.querySelectorAll(".mapboxgl-marker").forEach((el) => el.remove());

    if (showUtilities) {
      places.forEach((p) => {
        const el = document.createElement("div");
        el.className = "w-6 h-6 flex items-center justify-center text-blue-600";
        const root = createRoot(el);
        root.render(
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
            <div className="relative z-10 rounded-full p-1 shadow">
              <MapPin size={20} className="text-blue-600" />
            </div>
          </div>
        );
        new mapboxgl.Marker({ element: el }).setLngLat([p.lng, p.lat]).addTo(map.current);
      });
    } else {
      const el = document.createElement("div");
      const root = createRoot(el);
      root.render(<Building2 size={30} color="#d4ae6f" />);
      new mapboxgl.Marker({ element: el })
        .setLngLat([106.70014, 10.87065])
        .addTo(map.current);
    }
  }, [showUtilities]);

  // --- Reset vị trí ---
  const handleReset = () => {
    if (!map.current) return;
    map.current.flyTo({
      center: [106.70014, 10.87065],
      zoom: 15,
      pitch: 45,
      bearing: -17.6,
      essential: true,
    });
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* Reset button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
        <button
          onClick={handleReset}
          className="bg-white/20 flex flex-col items-center gap-1 px-4 py-4 rounded-lg text-[#d4ae6f] backdrop-blur-md shadow-lg"
        >
          <RefreshCw className="w-6 h-6" />
        </button>
      </div>

      {/* Map container */}
      <div ref={mapContainer} className="w-screen h-screen" />

      {/* Select kiểu bản đồ */}
      <div className="absolute top-4 right-4 z-10 bg-white/40 backdrop-blur-md rounded-lg shadow-lg p-2 flex items-center gap-2">
        <Map className="w-5 h-5 text-[#d4ae6f]" />
        <select
          className="bg-transparent text-[#d4ae6f] font-medium border-none outline-none cursor-pointer"
          value={mapStyle}
          onChange={(e) => setMapStyle(e.target.value)}
        >
          {Object.entries(mapStyles).map(([label, value]) => (
            <option key={label} value={value} className="text-black">
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Thanh chọn tiện ích */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 z-10">
        <div className="flex gap-2 text-xs md:text-sm font-light">
          {["Trường học", "Bệnh viện", "Siêu thị"].map((label, i) => (
            <button
              key={i}
              onClick={() => setShowUtilities(!showUtilities)}
              className="bg-white/20 flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-[#d4ae6f] backdrop-blur-md shadow-md hover:bg-white/30"
            >
              <Airplay className="w-6 h-6" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 🏔️ Hàm bật terrain và layer 3D building */
function enable3DTerrain(map) {
  if (!map || !map.getStyle()) return;

  // Thêm nguồn dữ liệu terrain
  map.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 14,
  });

  // Gán terrain cho map
  map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

  // Thêm layer nhà 3D
  map.addLayer({
    id: "3d-buildings",
    source: "composite",
    "source-layer": "building",
    filter: ["==", "extrude", "true"],
    type: "fill-extrusion",
    minzoom: 15,
    paint: {
      "fill-extrusion-color": "#aaa",
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": ["get", "min_height"],
      "fill-extrusion-opacity": 0.6,
    },
  });
}
