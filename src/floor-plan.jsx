import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { areas as areass, areaBs } from "./constant";
import { FloorPlanDetail } from "./floor-plan-detail";

export function FloorPlan({ plan, isBLevel }) {
    
    const areas = isBLevel ? areaBs : areass;
    const [modalArea, setModalArea] = useState(null);
    const [area, setArea] = useState(null);

    const handleClick = (area) => {
        const coords = area.coords.split(",").map(Number);
        let points = "";
        for (let i = 0; i < coords.length; i += 2) {
            points += `${coords[i]},${coords[i + 1]} `;
        }

        setModalArea(true);
    };

    return (
        <div className="text-white relative w-full mx-auto my-auto h-full flex justify-center items-center">

            {area ? <div className="absolute top-4 left-4 z-10 max-w-sm backdrop-blur-md px-4 py-2 rounded shadow-md">
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-sm font-medium">Chi tiết căn hộ</h3>
                    <p className="text-md font-bold">
                        {area.title}
                    </p>
                    <p className="text-xs">
                        {area.content}
                    </p>
                </div>
            </div> : null}

            <div className="mx-auto w-[fit-content] h-auto md:h-full relative">
                <div className='w-full h-full'>
                    <img
                        src={plan}
                        useMap="#image-map"
                        alt="floor plan"
                        className="w-auto h-full"
                    />
                </div>

                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 9932 7016"
                >
                    {areas.map((area) => (
                        <polygon
                            key={area.id}
                            points={area.coords}
                            fill={
                                "rgba(79,57,246,0.2)"
                            }
                            stroke="#d4ae6f"
                            strokeWidth="2"
                            className="pointer-events-auto cursor-pointer hover:stroke-amber-100 hover:fill-blue-600/40 transition-all"
                            onMouseEnter={() => setArea(area)}
                            onClick={() => setModalArea(true)}
                        />
                    ))}
                </svg>

                <map name="image-map">
                    {areas.map((area) => (
                        <area
                            key={area.id}
                            shape="poly"
                            coords={area.coords}
                            alt={area.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(area);
                            }}
                        />
                    ))}
                </map>
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
