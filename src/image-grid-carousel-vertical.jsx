"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloorPlanDetail } from "./floor-plan-detail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { areas } from "./constant";

export function ImageGridCarouselVertical() {
    const [modalArea, setModalArea] = useState(false);
    const [area, setArea] = useState(null);

    const handleClick = (area) => {
        setArea(area);
        setModalArea(true);
    };

    return (
        <div className="h-full w-full">
            <div className="w-full h-full mx-auto relative">
                <Swiper
                    modules={[Grid, Navigation, Pagination]}
                    spaceBetween={10}
                    // direction="vertical"

                    grid={{ rows: 3, fill: "row" }}
                    slidesPerView={3}
                    mousewheel={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="h-full"
                >
                    {areas.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="relative group cursor-pointer h-full"
                                onClick={() => handleClick(item)}
                            >
                                <img
                                    src={item.imgRoom}
                                    alt={`Image ${i}`}
                                    className="w-auto h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl p-2">
                                    <span className="text-white text-sm font-medium tracking-wide">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

         <AnimatePresence>
                {modalArea && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 rounded-2xl  md:overflow-hidden"
                        onClick={() => {
                            setModalArea(false);
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="relative bg-white/40 w-full h-full shadow-2xl overflow-y-auto md:overflow-hidden "
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: { type: "spring", stiffness: 120, damping: 15 },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 30,
                                transition: { duration: 0.25, ease: "easeInOut" },
                            }}
                        >
                            <button
                                onClick={() => {
                                    setModalArea(false);
                                }}
                                className="cursor-pointer absolute top-2 right-2 z-10 text-wwhite transform hover:rotate-180 transition-all duration-300 duration-initial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="36" height="36" viewBox="0 0 24 24"
                                    fill="none" stroke="#fff"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>

                            </button>
                            <FloorPlanDetail area={area} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
