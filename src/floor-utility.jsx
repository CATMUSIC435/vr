import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UnitDetail } from "./unit-detail";
import { areaUtilitys } from "./constant";

export function FloorUtility({ plan, level = 0 }) {
    const [modalImg, setModalImg] = useState(null);
    const [location, setLocation] = useState(null);


    const componentMemo = React.useMemo(() => {

        return <>
            {areaUtilitys[level] && areaUtilitys[level].map((area) => (
                <div key={area.id} className="absolute w-5 h-5 rounded-full border-[1px] border-white text-white bg-[#1A341B] flex justify-center items-center p-1 text-xs"
                    style={{
                        top: `${area.top}%`,
                        left: `${area.left}%`,
                        borderStyle: area.stt === location ? "dashed" : "solid",
                        background: area.stt === location ? "#000" : "#1A341B",
                    }}>
                    {area.stt}
                </div>
            ))}
        </>;
    }, [location]);

    return (
        <div className="relative w-full h-full">

            <div className="grid grid-cols-1 md:grid-cols-6 h-full w-full">
                <div>
                    <div className="flex flex-col gap-1 px-4 py-2">
                        {areaUtilitys[level].map((area, index) => !area.color ? (
                            <div key={index} className="flex gap-1 items-center text-sm border-b-1"
                                onMouseEnter={() => setLocation(area.stt)}
                                onMouseLeave={() => setLocation(0)}>
                                <div key={area.id} style={area.color ? { background: area.color } : {}} className="w-5 h-5 rounded-full border-[1px] border-white text-white font-medium bg-[#1A341B] flex justify-center items-center text-xs">
                                    {area.stt}
                                </div>
                                <p>{area.name}</p>
                            </div>
                        ) : null)}
                    </div>
                </div>
                <div className='col-span-5 w-full h-full relative'>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-end">
                        <div className="md:w-[fit-content] relative h-full">
                            <img
                                src={plan}
                                useMap="#image-map"
                                alt="floor plan"
                                class="w-full h-auto md:w-auto md:h-full object-contain block rounded-xl"
                            />
                            {componentMemo}

                        </div>  
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {modalImg && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        onClick={() => {
                            setModalImg(null);
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="relative bg-white w-[90%] h-[90%] shadow-2xl"
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
                                    setModalImg(null);
                                }}
                                className="cursor-pointer absolute top-2 right-2 z-10 text-black transform hover:rotate-180 transition-all duration-300 duration-initial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="36" height="36" viewBox="0 0 24 24"
                                    fill="none" stroke="#fff"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>

                            </button>
                            <div className="flex flex-col-reverse gap-1 md:grid md:grid-cols-3 lg:grid-cols-4 h-full w-full">
                                <div className=" max-h-[90%] h-full overflow-y-scroll">
                                    <UnitDetail />
                                </div>
                                <div className="md:col-span-3 h-full">
                                    <img src={modalImg} alt="zone detail" className="w-auto h-full" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
