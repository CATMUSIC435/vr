"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { areas } from "../../constants/constant";
import { FloorPlanDetail } from "./ploor-component/floor-plan-detail";
import { useIsMobile } from "../../hooks/use-is-mobile";

export default function ImageGridCarousel() {

    const [modalArea, setModalArea] = useState(null);
    const isMobile = useIsMobile(768);
    const [area, setArea] = useState(null);

    const handleClick = (area) => {
        setArea(area)

        setModalArea(true);
    };


    return (
        <div className="h-full w-full flex items-center">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Grid, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    grid={{ rows: isMobile ? 2 : 3, fill: "row" }}
                    spaceBetween={10}
                    slidesPerView={isMobile ? 2 : 4}
                    speed={600}
                    mousewheel={true}
                    navigation
                >
                    {areas.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative group cursor-pointer" onClick={() => handleClick(item)}>
                                <img
                                    src={item.imgRoom}
                                    alt={`Image ${i}`}
                                    className="w-full h-40 object-cover rounded-xl shadow"
                                />
                                <div className="text-lg text-gray-200 group-hover:text-white absolute bottom-0 left-0 z-1 py-1 border-b-[1px] transition-colors duration-200 ease-linear">
                                    {item.name}
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
