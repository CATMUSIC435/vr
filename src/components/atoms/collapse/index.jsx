import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Collapse({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full max-w-md mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
            >
                <span>{title}</span>
                <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${open ? "rotate-180 text-blue-500" : "text-gray-400"
                        }`}
                />
            </button>

            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-4 text-gray-600">{children}</div>
            </div>
        </div>
    );
}
