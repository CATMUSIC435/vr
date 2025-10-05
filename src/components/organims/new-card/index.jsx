export function NewsCard() {
    return (
        <div className="pb-16 text-white grid grid-cols-1">
            <div className="mb-2 overflow-hidden relative">
                <div className="">
                    <img
                        src="https://atsaigonriverside.vn/wp-content/uploads/2025/09/at-9536-9400.jpg"
                        alt="Đơn vị phát triển dự án DXMD Vietnam chính thức ký kết hợp tác với hơn 35 đối tác phân phối chiến lược dưới sự chứng kiến của Chủ đầu tư A&amp;T Group, đơn vị phát triển dự án DXMD Vietnam cùng với các lãnh đạo cấp cao đến từ các đơn vị."
                        className="w-full h-auto object-cover rounded-2xl"
                        loading="lazy"
                    />
                </div>
                
                <div className="absolute bottom-2 left-2 mt-2 flex justify-between">
                    <div className="">
                        <span className="text-xs md:text-sm font-medium">
                            09 / 18 / 2025
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-span-2 flex flex-col gap-1 px-2">
                <h3 className="text-md md:text-lg line-clamp-2 font-medium text-white">
                    A&amp;T Saigon Riverside khẳng định sức hút bên sông Sài Gòn với hơn
                    35 đối tác phân phối chiến lược
                </h3>


                <p className="hidden md:block text-xs line-clamp-3">
                    (ĐTCK) Vào ngày 11/09/2025, đơn vị phát triển DXMD Vietnam ký kết hợp
                    tác chiến lược cùng hơn 35 đối...
                </p>
            </div>
        </div>
    );
}
