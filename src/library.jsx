import { useState } from "react";
import GalleryWithPreview from "./gallery-with-preview";
import { Building, Component, Map, Newspaper, Video } from "lucide-react";
import VideoPlayer from "./video-player";
import { NewsCard } from "./new-card";

const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
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
            {index === 0 && <GalleryWithPreview
                list={list}
                setList={setList}
                imagesAnother={images_another}
            />}
            {index === 1 && <div className="w-full h-full">
                <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: `url(/map.png)` }}>
                </div>
            </div>}
            {index === 2 && <div className="w-full h-full">
                <VideoPlayer src="/video.mp4" className="h-full w-full" />
            </div>}

            {
                index === 3 && (
                    <div className="w-full h-full flex items-center overflow-scroll">
                        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="h-1/2">
                                <div className="mb-2 overflow-hidden relative">
                                    <a href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/">
                                        <div className="">
                                            <img
                                                src="https://atsaigonriverside.vn/wp-content/uploads/2025/09/at-9536-9400.jpg"
                                                alt="Đơn vị phát triển dự án DXMD Vietnam chính thức ký kết hợp tác với hơn 35 đối tác phân phối chiến lược dưới sự chứng kiến của Chủ đầu tư A&amp;T Group, đơn vị phát triển dự án DXMD Vietnam cùng với các lãnh đạo cấp cao đến từ các đơn vị."
                                                className="w-full h-auto object-cover rounded-2xl"
                                                loading="lazy"
                                            />
                                        </div>
                                    </a>

                                    <div className="absolute bottom-2 left-0 flex flex-col gap-1 md:gap-2 px-4">                                        

                                        <h3 className="text-md md:text-2xl line-clamp-2 font-medium text-white">
                                            <a
                                                href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/"
                                                className="text-white!"
                                            >
                                                A&amp;T Saigon Riverside khẳng định sức hút bên sông Sài Gòn với hơn
                                                35 đối tác phân phối chiến lược
                                            </a>
                                        </h3>

                                        <div className="flex justify-between">
                                            <div className="">
                                                <span className="text-xs md:text-sm font-medium underline underline-offset-1">
                                                    09 / 18 / 2025
                                                </span>
                                            </div>


                                            <div className="">
                                                <a
                                                    href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/"
                                                    className="text-xs underline text-white!"
                                                >
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-full flex flex-col md:flex-row gap-2">
                                    {[1, 2].map((index) => (
                                        <div>
                                            <div className="mb-2 overflow-hidden relative">
                                                <a href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/">
                                                    <div className="">
                                                        <img
                                                            src="https://atsaigonriverside.vn/wp-content/uploads/2025/09/at-9536-9400.jpg"
                                                            alt="Đơn vị phát triển dự án DXMD Vietnam chính thức ký kết hợp tác với hơn 35 đối tác phân phối chiến lược dưới sự chứng kiến của Chủ đầu tư A&amp;T Group, đơn vị phát triển dự án DXMD Vietnam cùng với các lãnh đạo cấp cao đến từ các đơn vị."
                                                            className="w-full h-auto object-cover rounded-2xl"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </a>
                                                <div className="absolute bottom-8 left-0 flex flex-col gap-1 md:gap-2 px-2">

                                                    <div className="flex justify-between">
                                                        <div className="">
                                                            <span className="text-xs md:text-sm font-medium underline underline-offset-1">
                                                                09 / 18 / 2025
                                                            </span>
                                                        </div>


                                                        <div className="">
                                                            <a
                                                                href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/"
                                                                className="text-xs underline text-white!"
                                                            >
                                                                Xem thêm
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-sm md:text-sm line-clamp-2 font-medium text-white">
                                                        <a
                                                            href="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/"
                                                            className="text-white!"
                                                        >
                                                            A&amp;T Saigon Riverside khẳng định sức hút bên sông Sài Gòn với hơn
                                                            35 đối tác phân phối chiến lược
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                            </div>
                            <div className="h-full">
                                <div className="h-full flex flex-col justify-between">
                                    {[1, 2, 3, 4].map((index) => (
                                        <NewsCard />

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }



            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex gap-3 text-xs md:text-sm font-light">
                    <button
                        onClick={() => setIndex(0)}
                        className={`w-20 cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs
        ${index === 0 ? "bg-[#1A341B]" : "hover:bg-blue-100/20 focus:border-none"}`}
                    >
                        <Component className="w-6 h-6" />
                        Toàn cảnh
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