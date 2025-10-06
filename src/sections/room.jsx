import { useState } from 'react'
import { ChevronDown, ChevronUp, LayoutDashboard, LayoutGrid } from 'lucide-react';
import ImageGridCarousel from './components/image-grid-carousel';
import { ListApartment } from './components/list-apartment';
import { IconButtonVtl } from '../components/molecules/icon-button-vtl';

export function Room() {
    const [open, setOpen] = useState(true);
    const [index, setIndex] = useState(0);

    const buttonList = [
        { idx: 0, name: "theo Layout", icon: LayoutDashboard },
        { idx: 1, name: "Tất cả", icon: LayoutGrid },
    ];


    return (
        <>
            <div className='w-full h-full relative'>

                {index === 0 && <ListApartment />}
                {index === 1 && <ImageGridCarousel />}
                <div className="absolute bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 z-10">
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
                        {buttonList.map((item) => (
                            <IconButtonVtl
                                key={item.idx}
                                icon={item.icon}
                                name={item.name}
                                active={index === item.idx}
                                onClick={() => setIndex(item.idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

