import { useState } from "react";
import VideoPlayer from "../../components/molecules/video-player";

const videos = [
    {
        idx: 1,
        name: 'ATR',
        desc: "",
        img: '/atsaigonriverside-lologo.png',
        link: 'https://atsaigonriverside.vn/wp-content/themes/dxmd/assets/videos/atr.mp4'
    },
    {
        idx: 1,
        name: 'ATR',
        desc: "",
        img: '/2.jpg',
        link: '/video.mp4'
    }
]

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
                            {videos.map((item, i) => (
                                <div className="relative group">
                                    <img
                                        onClick={() => setLink(item.link)}
                                        key={i}
                                        src={item.img}
                                        alt={item.desc}
                                        className="w-full object-cover rounded-sm cursor-pointer group-hover:scale-105 transition-transform  duration-200 ease-linear"
                                    />
                                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
                                        <p className="text-sm font-medium">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-[#1A341B] text-white p-2 rounded-r-md transition"
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