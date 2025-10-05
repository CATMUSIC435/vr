import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"

// Import style
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export function Swiper3D() {
    return (
        <div className="w-full mx-auto py-10">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 250, // độ sâu (tăng giá trị này để thấy rõ hiệu ứng 3D)
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {[
                    // "/at-t1.jpg",
                    // "/at-t2.jpg",
                    "/at-t3.jpg",
                    "/at-t3.jpg",
                    "/at-t3.jpg",
                    "/at-t3.jpg",
                    "/at-t3.jpg",
                ].map((img, index) => (
                    <SwiperSlide
                        key={index}
                        className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* CSS inline để đảm bảo Swiper có perspective */}
            <style>{`
        .swiper {
          perspective: 1000px; /* tạo chiều sâu 3D */
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          transition: transform 0.4s ease;
        }
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: linear-gradient(to left, rgba(0,0,0,0.4), transparent);
        }
      `}</style>
        </div>
    )
}
