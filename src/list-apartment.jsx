import { ApartmentCard } from "./apartment-card";
import { ImageGridCarouselVertical } from "./image-grid-carousel-vertical";

export function ListApartment() {
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-4 h-full">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full grid grid-cols-1 gap-2">

                            <ApartmentCard />
                            <ApartmentCard />

                            <ApartmentCard />
                            <ApartmentCard />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <ImageGridCarouselVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}