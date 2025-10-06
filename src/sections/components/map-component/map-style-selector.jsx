import { Map } from "lucide-react";
import { mapStyles } from "../../../constants/map";

export function MapStyleSelector({ mapStyle, setMapStyle }) {
    return (
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
    );
}
