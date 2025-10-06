import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { RefreshCw, Map } from "lucide-react";
import { createRoot } from "react-dom/client";
import { pots, typeArray } from "../constants/pot";
import { IconButtonVtl } from "../components/molecules/icon-button-vtl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";

const mapStyles = {
  Streets: "mapbox://styles/mapbox/streets-v12",
  Satellite: "mapbox://styles/mapbox/satellite-streets-v12",
  Light: "mapbox://styles/mapbox/light-v11",
  Dark: "mapbox://styles/mapbox/dark-v11",
  "Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
  "Navigation Night": "mapbox://styles/mapbox/navigation-night-v1",
  "3D Terrain": "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y",
};

export default function MapBoxBasic() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapStyle, setMapStyle] = useState(mapStyles.Streets);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [106.70014, 10.87065],
      zoom: 10,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });

    new mapboxgl.Marker({ color: "#d4ae6f" })
      .setLngLat([106.70014, 10.87065])
      .addTo(map.current);

    map.current.on("load", () => {
      map.current?.resize();
      enable3DTerrain(map.current);
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.setStyle(mapStyle);
    map.current.once("style.load", () => {
      // enable3DTerrain(map.current); 
    });
  }, [mapStyle]);


  const handleReset = () => {
    if (!map.current) return;
    map.current.flyTo({
      center: [106.70014, 10.87065],
      zoom: 12,
      pitch: 45,
      bearing: -17.6,
      essential: true,
    });
  };

  const changePlace = (index, Icon) => {

    if (!map.current) return;
    handleReset()
    document.querySelectorAll(".mapboxgl-marker").forEach((el) => el.remove());

    new mapboxgl.Marker({ color: "#d4ae6f" })
      .setLngLat([106.70014, 10.87065])
      .addTo(map.current);


    const indexPots = pots.filter((item) => item.type === index)
    indexPots.forEach((p) => {
      const el = document.createElement("div");
      el.className = "w-6 h-6 flex items-center justify-center text-blue-600";
      const root = createRoot(el);
      root.render(
        <div className="relative">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <div className="relative z-10 rounded-full p-1 shadow">
            <Icon size={20} className="text-blue-600" />
          </div>
        </div>
      );
      new mapboxgl.Marker({ element: el }).setLngLat(p.latlong).addTo(map.current);
    });
  }

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
        <button
          onClick={handleReset}
          className="bg-white/20 flex flex-col items-center gap-1 px-4 py-4 rounded-lg text-[#d4ae6f] backdrop-blur-md shadow-lg"
        >
          <RefreshCw className="w-6 h-6" />
        </button>
      </div>

      <div ref={mapContainer} className="w-screen h-screen" />

      <div className="absolute top-2 right-12 z-10 bg-white/40 backdrop-blur-md rounded-lg shadow-lg p-2 flex items-center gap-1">
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

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 z-10">
        <div className="flex gap-2 text-xs md:text-sm font-light">
          {typeArray.map((item, i) => (
            <IconButtonVtl
              key={item.idx}
              icon={item.icon}
              name={item.name}
              onClick={() => changePlace(item.idx, item.icon)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function enable3DTerrain(map) {
  if (!map || !map.getStyle()) return;

  map.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 14,
  });
  
  map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

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
