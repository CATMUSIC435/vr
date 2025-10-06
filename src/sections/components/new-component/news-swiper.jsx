"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { NewsModal } from "./news-modal";
import { NewsCard } from "../../../components/organims/new-card";
import { usePosts } from "../../../hooks/use-posts";
import { linkApi } from "../../../constants";
import { useIsMobile } from "../../../hooks/use-is-mobile";

export function NewsSwiper() {
    const { posts } = usePosts(linkApi);

    const isMobile = useIsMobile(768);
    const [selectedLink, setSelectedLink] = useState(null);

    return (
        <div className="h-full w-full flex items-center">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Grid, Pagination]}
                    pagination={{ clickable: true }}
                    grid={{ rows: 1, fill: "row" }}
                    spaceBetween={10}
                    slidesPerView={isMobile ? 1 : 3}
                    speed={600}
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedLink(post.link)}
                            >
                                <div className="pointer-events-none">
                                    <NewsCard {...post} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <NewsModal link={selectedLink} onClose={() => setSelectedLink(null)} />
        </div>
    );
}
