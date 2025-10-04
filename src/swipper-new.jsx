"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloorPlanDetail } from "./floor-plan-detail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { areas } from "./constant";
import { NewsCard } from "./new-card";

export function SwipperNew() {

    const [modalArea, setModalArea] = useState(null);
    const [area, setArea] = useState(null);

    const handleClick = (area) => {
        setArea(area)

        setModalArea(true);
    };


    return (
        <div className="h-full w-full flex items-center">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Grid, Pagination]}
                    pagination={{ clickable: true }}
                    grid={{ rows: 1, fill: "row" }}
                    spaceBetween={10}
                    slidesPerView={3}
                    speed={600}
                >
                    {areas.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative group cursor-pointer" onClick={() => handleClick(item)}>
                                <NewsCard />
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
                            <div className="w-full h-full">
                                <iframe
                                    src="https://atsaigonriverside.vn/at-saigon-riverside-khang-dinh-suc-hut-ben-song-sai-gon-voi-hon-35-doi-tac-phan-phoi-chien-luoc/"
                                    className="w-full h-full border-none"
                                    title="A&T Saigon Riverside"
                                />
                                
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
