import { useState } from "react";
import { roomsx, roomsxArray } from "../../constants/constant";
import { ApartmentCard } from "./apartment-card";
import { ImageGridCarouselVertical } from "./image-grid-carousel-vertical";
import { areas } from "../../constants/constant";

const initArea = areas.filter((item) => item.type === roomsx.p1.idx);

export function ListApartment() {
    const [listArea, setListArea] = useState(initArea)

    const changeListArea = (index) => {
        const newAreas = areas.filter((item) => item.type === index)
        setListArea(newAreas ?? [])
    }

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-2 md:grid-cols-4 h-full">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full flex flex-col gap-2">
                            {
                                roomsxArray.map((apt, i) => (
                                    <ApartmentCard onClick={() => changeListArea(apt.idx)} key={apt.idx} img={apt.img} name={apt.name} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {listArea.length > 0 && <ImageGridCarouselVertical areas={listArea} />}
                    </div>
                </div>
            </div>
        </div>
    )
}