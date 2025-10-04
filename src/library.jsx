import { useState } from "react";
import GalleryWithPreview from "./gallery-with-preview";
import { Building, Component, Map, Newspaper, Video } from "lucide-react";
import VideoPlayer from "./video-player";
import { NewsCard } from "./new-card";
import { SvgImageEffect } from "./svg-image-effect";
import { SwipperNew } from "./swipper-new";
import EmbeddedSite from "./embedded-site";

const images = [
    '/utility/bar.jpg',
    '/utility/gym.jpg',
    '/utility/bida.jpg',
    '/utility/chill.jpg',
    '/utility/coffee.jpg',
]

const images_another = [
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
]

export function Library() {
    const [list, setList] = useState(images)
    const [index, setIndex] = useState(0)

    return (
        <div className="w-full h-full relative">
             {index === 5 && <div className="custom w-full h-full relative">
                <EmbeddedSite /></div>}
            {index === 0 && <div className="custom w-full h-full relative"><GalleryWithPreview
                list={list}
                setList={setList}
                imagesAnother={[]}
            /></div>}
            {index === 1 && <div className="w-full h-full">
                <SvgImageEffect />
            </div>}
            {index === 2 && <div className="w-full h-full">
                <VideoPlayer src="https://atsaigonriverside.vn/wp-content/themes/dxmd/assets/videos/atr.mp4" className="h-full w-full" />
            </div>}

            {
                index === 3 && (
                    <SwipperNew />
                )
            }



            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex gap-3 text-xs md:text-sm font-light">
                    <button
                        onClick={() => setIndex(5)}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs
        ${index === 5 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Component className="w-6 h-6" />
                        Thông tin
                    </button>
                    <button
                        onClick={() => {
                            setIndex(1)
                        }}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 1 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Map className="w-6 h-6" />
                        Bản đồ
                    </button>
                    <button
                        onClick={() => setIndex(0)}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs
        ${index === 0 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Component className="w-6 h-6" />
                        Thư viện
                    </button>

                    <button
                        onClick={() => {
                            setIndex(2)
                        }}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 2 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Video className="w-6 h-6" />
                        Video
                    </button>
                    <button
                        onClick={() => {
                            setIndex(3)
                        }}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 3 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Newspaper className="w-6 h-6" />
                        Tin tức
                    </button>
                </div>
            </div>
        </div>
    )
}