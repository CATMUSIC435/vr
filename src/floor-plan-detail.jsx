import { useState } from "react";
import { areas } from "./constant";
import { UnitDetail } from "./unit-detail";

export function FloorPlanDetail({ area }) {
    const [areaInit, setAreaInit] = useState(area);

    const changeArea = (id, type) => {
        const index = areas.findIndex(area => area.id === id);

        if (type) {
            const step = index + 1 > areas.length - 1 ? 0 : index + 1;
            setAreaInit(areas[step]);
        } else {
            const step = index - 1 < 0 ? areas.length - 1 : index - 1;
            setAreaInit(areas[step]);
        }
    }
    return (
        <div className="flex flex-col-reverse gap-1 md:grid md:grid-cols-3 lg:grid-cols-4 h-full w-full overflow-y-scroll md:overflow-y-hidden">
            <div className="md:bg-[#f4ecdc] h-full overflow-y-scroll backdrop-blur-lg">
                <UnitDetail area={areaInit} changeArea={changeArea} />
            </div>
            <div className="md:col-span-3 h-full w-full hover:text-[#d4ae6f] flex justify-center items-center relative">
                <div className="md:absolute md:right-0 md:top-1/8">
                    <div className="h-36 px-4 py-2 bg-white/80 rounded-xl backdrop-blur-xl" >
                        <img
                            src={areaInit.imgPlan}
                            useMap="#image-map"
                            alt="floor plan"
                            className="w-auto h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full flex justify-center">
                        <img src={areaInit.imgRoom} alt="area detail" className="w-auto h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
