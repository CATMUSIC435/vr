import { useState } from 'react'
import { ChevronDown, ChevronUp, Component, Map } from 'lucide-react';
import ImageGridCarousel from './components/image-grid-carousel';
import { ListApartment } from './components/list-apartment';

export function Room() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(true);


    return (
        <>
            <div className='w-full h-full relative'>

                {index === 0 && <ListApartment />}
                {index === 1 && <ImageGridCarousel />}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={() => setOpen(!open)}
                            className="mb-2 bg-[#1A341B] text-white px-2 py-1 rounded-lg shadow-md"
                        >
                            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    </div>
                    <div className={`flex gap-3 text-xs md:text-sm font-light transition-all duration-500 overflow-hidden 
        ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <button
                            onClick={() => setIndex(0)}
                            className={`cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs
        ${index === 0 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
                        >
                            <Component className="w-6 h-6" />
                            theo Layout
                        </button>

                        <button
                            onClick={() => {
                                setIndex(1)
                            }}
                            className={` cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 1 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
                        >
                            <Map className="w-6 h-6" />
                            Tất cả
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

