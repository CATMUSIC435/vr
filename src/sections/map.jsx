"use client";
import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createRoot } from "react-dom/client";
import { MapTypeButtons } from "./components/map-component/map-type-buttons";
import { MapStyleSelector } from "./components/map-component/map-style-selector";
import { MapContainer } from "./components/map-component/map-container";
import { pots, typeArray } from "../constants/pot";
import { enable3DTerrain } from "./components/map-component/enable-3d-terrain";
import { mapStyles } from "../constants/map";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";

export default function MapBoxBasic() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapStyle, setMapStyle] = useState(mapStyles.Streets);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
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
  }, [mapStyle]);


  const handleReset = () => {
    map.current?.flyTo({
      center: [106.70014, 10.87065],
      zoom: 12,
      pitch: 45,
      bearing: -17.6,
      essential: true,
    });
  };

  const changePlace = (index, Icon) => {
    if (!map.current) return;
    handleReset();

    document.querySelectorAll(".mapboxgl-marker").forEach((el) => el.remove());

    new mapboxgl.Marker({ color: "#d4ae6f" })
      .setLngLat([106.70014, 10.87065])
      .addTo(map.current);

    const indexPots = pots.filter((item) => item.type === index);
    indexPots.forEach((p) => {
      const el = document.createElement("div");
      el.className = "w-6 h-6 flex items-center justify-center text-blue-600";
      const root = createRoot(el);
      root.render(
        <div className="relative">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
            <div className="relative z-10 rounded-full p-1 shadow">
              <Icon size={20} className="text-blue-600" />
            </div>
          </div>
          <div className="absolute w-24 line-clamp-2">
            <p className="text-xs">{p.name}</p>
          </div>
        </div>
      );
      new mapboxgl.Marker({ element: el }).setLngLat(p.latlong).addTo(map.current);
    });
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <MapContainer mapContainer={mapContainer} />
      <MapStyleSelector mapStyle={mapStyle} setMapStyle={setMapStyle} />
      <MapTypeButtons typeArray={typeArray} changePlace={changePlace} onReset={handleReset} />
    </div>
  );
}
