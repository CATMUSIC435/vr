export function ApartmentCard({ onClick, idx, name, img }) {
    return (
        <div
            key={idx}
            onClick={onClick}
            className="relative h-full bg-[#f8f9e9] overflow-hidden shadow-lg group transition-all duration-500"
        >

            <div>
                <img
                    src={img}
                    alt={name}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
                <h2 className="text-white text-xl font-medium mb-4 drop-shadow-md text-center px-2">
                    {name}
                </h2>
            </div>

            <div className="group-hover:w-full absolute bottom-2 left-2 text-[#1A341B] px-2 py-1 text-sm font-semibold border-b-[1px] border-white transition-all duration-200 ease-in-out">
                {name}
            </div>
        </div>
    );
}
