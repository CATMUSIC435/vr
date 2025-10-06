import { Map } from "lucide-react";
import { mapStyles } from "../../../constants/map";

export function MapStyleSelector({ mapStyle, setMapStyle }) {
  return (
    <div className="absolute top-3 right-12 z-20">
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2.5 rounded-2xl border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:bg-white/20 transition-all duration-300">
        <Map className="w-5 h-5 text-[#d4ae6f]" />
        <div className="relative">
          <select
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value)}
            className="appearance-none bg-transparent text-sm text-[#f1e7c6] font-semibold tracking-wide border-none outline-none cursor-pointer pr-8 pl-1 hover:text-[#ffe9b3] transition-colors duration-200"
          >
            {Object.entries(mapStyles).map(([label, value]) => (
              <option
                key={label}
                value={value}
                className="text-black bg-white font-medium"
              >
                {label}
              </option>
            ))}
          </select>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute right-1 top-1/2 -translate-y-1/2 text-[#d4ae6f] pointer-events-none opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
