import { UnitTable } from "./unit-table";

export function UnitDetail({ area, changeArea }) {
    return (
        <div className="p-6 flex justify-center h-full text-white md:text-black">
            <div className="max-w-lg w-full space-y-4 md:space-y-6 h-[800px]">
                <div className="border-t border-[#3a2c1c]/40" />

                <div className="bg-[#3a2c1c] text-white text-center py-2 uppercase tracking-widest font-semibold">
                    Chi tiết căn hộ
                </div>

                <div className="flex items-center justify-between text-[#3a2c1c]">
                    <h2 className="text-2xl font-medium tracking-widest uppercase">
                        {area.title}
                    </h2>
                    <div className="flex space-x-2 text-4xl">
                        <button onClick={() => changeArea(area.id)} className="cursor-pointer p-2 rounded-full hover:text-[#d4ae6f] hover:bg-gray-100 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button onClick={() => changeArea(area.id, true)} className="cursor-pointer p-2 rounded-full hover:text-[#d4ae6f] hover:bg-gray-100 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                </div>



                {/* <div className="w-full" >
                    <img
                        src={area.imgPlan}
                        useMap="#image-map"
                        alt="floor plan"
                        className="w-full h-auto"
                    />
                </div> */}

                <div className="overflow-x-auto">
                    <table className="w-full border border-[#3a2c1c]/50 text-sm">
                        <thead>
                            <tr className="bg-[#3a2c1c] text-white uppercase">
                                <th className="px-4 py-2 text-left">Tầng / Level</th>
                                <th className="px-4 py-2 text-center">2-8</th>
                            </tr>
                        </thead>
                        <UnitTable area={area} />
                    </table>
                </div>


                <div className="text-xs leading-relaxed space-y-2 text-justify">
                    <p>
                        <span className="font-semibold">Lưu ý:</span> Chúng tôi đã nỗ lực và
                        cẩn trọng để hoàn thiện tài liệu này. Tuy nhiên tài liệu chỉ dùng
                        với mục đích tham khảo.
                    </p>
                    <p>
                        <span className="font-semibold">Ghi chú:</span> Diện tích sử dụng căn
                        hộ sau cùng sẽ được xác minh bởi đơn vị đo đạc.
                    </p>
                </div>
            </div>
        </div>
    );
}
