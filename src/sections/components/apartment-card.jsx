export function ApartmentCard() {
    return (
        <div className="relative h-full bg-[#f8f9e9] overflow-hidden shadow-lg group transition-all duration-500">
            {/* Hình nền */}
            <div className="flex">
                <img
                    src="https://i.ibb.co/qn3WVWd/plan.jpg"
                    alt="Mặt bằng"
                    className="w-1/2 h-[260px] object-cover"
                />
                <div className="w-1/2 flex flex-col justify-between bg-white p-4">
                    <div className="text-right">
                        <h3 className="text-[#b79233] text-lg font-semibold">Zenia Suites</h3>
                    </div>
                    <div>
                        <p className="text-gray-700 font-medium">CĂN HỘ 2PN 1WC</p>
                        <p className="text-sm text-gray-500">Diện tích: 55.6 - 57.49 m²</p>
                    </div>
                    <img
                        src="https://i.ibb.co/F0L0V2Z/interior.jpg"
                        alt="Nội thất"
                        className="rounded-lg object-cover w-full h-28"
                    />
                </div>
            </div>

            {/* Overlay khi hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
                <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-md">
                    2PN 1WC
                </h2>
                <button className="bg-[#7AA25C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#5d824a] transition">
                    Xem thêm
                </button>
            </div>

            {/* Nhãn nhỏ ở góc */}
            <div className="absolute bottom-4 left-4 bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-sm font-semibold">
                2PN 1WC
            </div>
        </div>
    );
}
