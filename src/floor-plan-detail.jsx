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
            <div className="md:max-h-[80%] h-full">
                <UnitDetail area={areaInit} changeArea={changeArea}/>
            </div>
            <div className="md:col-span-3 h-full w-full max-h-[80%] hover:text-[#d4ae6f] flex justify-center items-center">
                <img src={areaInit.imgRoom} alt="area detail" className="w-auto h-full object-cover" />
            </div>
        </div>
    );
}
