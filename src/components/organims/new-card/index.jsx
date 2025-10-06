export function NewsCard({ id, title, excerpt, link, image, date }) {
    const formattedDate = new Date(date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    return (
        <div
            key={id}
            className="pb-6 text-white grid grid-cols-1 cursor-pointer hover:opacity-90 transition-all duration-300"
            onClick={() => window.open(link, "_blank")}
        >
            <div className="mb-2 overflow-hidden relative">
                <div className="">
                    <img
                        src={image || "/fallback.jpg"}
                        alt={title}
                        className="w-full h-56 md:h-64 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="absolute bottom-2 left-2 mt-2 flex justify-between">
                    <span className="text-xs md:text-sm font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                        {formattedDate}
                    </span>
                </div>
            </div>

            <div className="col-span-2 flex flex-col gap-1 px-2">
                <h3
                    className="text-md md:text-lg line-clamp-2 font-medium text-white"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className="text-xs line-clamp-3 text-gray-200"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            </div>
        </div>
    );
}
