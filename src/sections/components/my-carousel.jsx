import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // CSS cơ bản
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useIsMobile } from "../../hooks/use-is-mobile";

export default function MyCarousel({ list, setActiveImage }) {
    const isMobile = useIsMobile(768);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={isMobile ? 1 : 3}
            direction={isMobile ? "horizontal" : "vertical"}
            mousewheel={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            onSlideChange={(swiper) => {
                const currentImg = list[swiper.realIndex];
                setActiveImage(currentImg);
            }}
            className="h-full md:h-auto w-full max-w-3xl rounded-xl overflow-hidden"
        >
            {
                list.map((item) => (<SwiperSlide>
                    <img src={item} alt="Slide 1" className="w-full object-cover" />
                </SwiperSlide>
                ))
            }
        </Swiper >
    );
}
