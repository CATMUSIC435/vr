import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Airplay, Building, Building2, Home, MapPin, RefreshCw } from "lucide-react";
import { createRoot } from "react-dom/client";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";



const places = [
    { id: 1, name: "Trường Mẫu Giáo ABC", lng: 106.70123, lat: 10.87234 },
    { id: 2, name: "Trường Tiểu Học DEF", lng: 106.69780, lat: 10.86812 },
    { id: 3, name: "Trường Trung Học GHI", lng: 106.70411, lat: 10.87400 },
    { id: 4, name: "Tên Đại Học J", lng: 106.70333, lat: 10.86950 },
];
export default function MapBoxBasic() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [showUtilities, setShowUtilities] = useState(false);

    useEffect(() => {
        if (map.current) return; // tránh init nhiều lần

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [106.70014, 10.87065], // HCM
            zoom: 14,
        });

        new mapboxgl.Marker({ color: "red" })
            .setLngLat([106.70014, 10.87065])
            .addTo(map.current);

        map.current.on("load", () => {
            map.current?.resize();
        });
    }, []);

    useEffect(() => {
        if (!map.current) return;

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

                new mapboxgl.Marker({ element: el })
                    .setLngLat([p.lng, p.lat])
                    .addTo(map.current);
            });
        } else {
            document.querySelectorAll(".mapboxgl-marker").forEach((el) => el.remove());

            const el = document.createElement("div");
            const root = createRoot(el);
            root.render(<Building2 size={30} color="#d4ae6f" />);

            new mapboxgl.Marker({ element: el })
                .setLngLat([106.70014, 10.87065])
                .addTo(map.current);
        }
    }, [showUtilities]);

    const handleReset = () => {
        if (!map.current) return;
        map.current.flyTo({
            center: [106.70014, 10.87065], // HCM
            zoom: 14,
            essential: true,
        });
    };



    return (
        <div className="w-full h-full overflow-hidden relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-1">
                <button onClick={handleReset}
                    className="bg-white/20 cursor-pointer flex flex-col items-center gap-1 px-4 py-4 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs">
                    <RefreshCw className="w-6 h-6" />
                </button>
            </div>
            <div ref={mapContainer} className="w-screen h-screen" />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                <div className="flex gap-2 text-xs md:text-sm font-light">
                    <button
                        onClick={() => setShowUtilities(!showUtilities)}
                        className="bg-white/20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs"
                    >
                        <Airplay className="w-6 h-6" />
                        Trường học
                    </button>
                    <button
                        onClick={() => setShowUtilities(!showUtilities)}
                        className="bg-white/20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs"
                    >
                        <Airplay className="w-6 h-6" />
                        Bệnh Viện
                    </button>
                    <button
                        onClick={() => setShowUtilities(!showUtilities)}
                        className="bg-white/20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs"
                    >
                        <Airplay className="w-6 h-6" />
                        Siêu Thị
                    </button>
                    <button
                        onClick={() => setShowUtilities(!showUtilities)}
                        className="bg-white/20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs"
                    >
                        <Airplay className="w-6 h-6" />
                        Trường học
                    </button>
                </div>
            </div>
        </div>
    );
}
