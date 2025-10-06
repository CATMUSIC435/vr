import { RefreshCw } from "lucide-react";

export function MapControls({ onReset }) {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
            <button
                onClick={onReset}
                className="bg-white/20 flex flex-col items-center gap-1 px-4 py-4 rounded-lg text-[#d4ae6f] backdrop-blur-md shadow-lg"
            >
                <RefreshCw className="w-6 h-6" />
            </button>
        </div>
    );
}
