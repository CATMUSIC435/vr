import { useState } from "react";
import VideoPlayer from "../../components/molecules/video-player";

export function Playlist() {
    const [open, setOpen] = useState(false);
    const [link, setLink] = useState('https://atsaigonriverside.vn/wp-content/themes/dxmd/assets/videos/atr.mp4');

    const onClick = () => {
        setLink('/video.mp4')
    }
    return (

        <div className="h-full w-full relative">
            <VideoPlayer src={link} className="h-full w-full" />

            <div className="absolute top-0 left-0 h-[90%] flex items-center">

                <div
                    className={`shadow-lg flex flex-col gap-1 h-full overflow-hidden transition-all duration-500 rounded-r-md ${open ? "w-32 p-1 opacity-100" : "w-0 p-0 opacity-0"
                        }`}
                >
                    {open && (
                        <div className="flex flex-col gap-1">
                            {Array(3)
                                .fill(0)
                                .map((_, i) => (
                                    <img
                                        onClick={onClick}
                                        key={i}
                                        src="https://i.ibb.co/qn3WVWd/plan.jpg"
                                        alt={`Mặt bằng ${i + 1}`}
                                        className="w-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                                    />
                                ))}
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-gray-800 text-white p-2 rounded-r-md hover:bg-gray-700 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                            }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}