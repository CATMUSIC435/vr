import { useState } from "react";
import { Component, Map, Newspaper, Video } from "lucide-react";
import EmbeddedSite from "../components/atoms/embedded-site";
import { Swiper3D } from "./components/swiper-3d";
import { GalleryWithPreview } from "./components/gallery-with-preview";
import { Playlist } from "./components/playlist";
import { SvgImageEffect } from "./components/svg-image-effect";
import { IconButtonVtl } from "../components/molecules/icon-button-vtl";
import { NewsSwiper } from "./components/new-component/news-swiper";

const images = [
    '/utility/bar.jpg',
    '/utility/gym.jpg',
    '/utility/bida.jpg',
    '/utility/chill.jpg',
    '/utility/coffee.jpg',
]

const navButtons = [
    {
        idx: 5,
        name: "Thông tin",
        icon: Component,
    },
    {
        idx: 4,
        name: "CT",
        icon: Map,
    },
    {
        idx: 1,
        name: "Bản đồ",
        icon: Map,
    },
    {
        idx: 0,
        name: "Thư viện",
        icon: Component,
    },
    {
        idx: 2,
        name: "Video",
        icon: Video,
    },
    {
        idx: 3,
        name: "Tin tức",
        icon: Newspaper,
    },
];


export function Library() {
    const [list, setList] = useState(images)
    const [index, setIndex] = useState(5)

    const componentMap = {
        0: (
            <div className="custom w-full h-full relative">
                <GalleryWithPreview list={list} setList={setList} imagesAnother={[]} />
            </div>
        ),
        1: (
            <div className="w-full h-full">
                <SvgImageEffect />
            </div>
        ),
        2: (
            <div className="w-full h-full">
                <Playlist />
            </div>
        ),
        3: (
            <NewsSwiper />
        ),
        4: (
            <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
                    <Swiper3D />
                </div>
            </div>
        ),
        5: (
            <div className="custom w-full h-full relative">
                <EmbeddedSite url="https://atsaigonriverside.vn/" />
            </div>
        ),
    }

    return (
        <div className="w-full h-full relative">
            {componentMap[index] || null}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex gap-3 text-xs md:text-sm font-light">
                    {navButtons.map((item) => (
                        <IconButtonVtl
                            key={item.idx}
                            icon={item.icon}
                            name={item.name}
                            onClick={() => setIndex(item.idx)}
                            active={index === item.idx}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}