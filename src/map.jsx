import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";



const places = [
    { id: 1, name: "Bệnh viện", lng: 106.668, lat: 10.762 },
    { id: 2, name: "Trường học", lng: 106.670, lat: 10.764 },
    { id: 3, name: "Siêu thị", lng: 106.665, lat: 10.760 },
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
            center: [106.660172, 10.762622], // HCM
            zoom: 12,
        });

        new mapboxgl.Marker({ color: "red" })
            .setLngLat([106.660172, 10.762622])
            .addTo(map.current);
    }, []);

    useEffect(() => {
        if (!map.current) return;

        if (showUtilities) {
            places.forEach((p) => {
                const el = document.createElement("div");
                el.className =
                    "bg-blue-600 text-white text-xs px-2 py-1 shadow";
                el.innerText = p.name;

                new mapboxgl.Marker({ element: el })
                    .setLngLat([p.lng, p.lat])
                    .addTo(map.current);
            });
        } else {
            // clear tất cả marker khi tắt
            document
                .querySelectorAll(".mapboxgl-marker")
                .forEach((el) => el.remove());

            new mapboxgl.Marker({ color: "red" })
                .setLngLat([106.660172, 10.762622])
                .addTo(map.current);
        }
    }, [showUtilities]);

    return (
        <div className="w-full h-[80vh] overflow-hidden relative">
            <div ref={mapContainer} className="w-screen h-screen" />
            <div className="absolute left-0 bottom-0">
                <button
                onClick={() => setShowUtilities(!showUtilities)}
                className="px-4 py-2 bg-blue-600 text-white shadow hover:bg-blue-700"
            >
                {showUtilities ? "Ẩn tiện ích" : "Hiển thị tiện ích"}
            </button>
            </div>
        </div>
    );
}
