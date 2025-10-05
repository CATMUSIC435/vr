import { useState } from 'react'
import { Book, Building, ChevronDown, ChevronUp, CircleQuestionMark, Component, Map, Maximize2, TableOfContents } from 'lucide-react';
import MapBoxBasic from '../map';
import { Plans } from './../plans';
import { Library } from '../library';
import { Room } from './../room';
import NavButton from './../../components/molecules/nav-button';
import { FAQList } from './../../sections/faq-list';
import { UsageGuide } from './../../sections/usage-guide';
import { useModal } from "../../contexts/modal-context";
import { ModalContainer } from "../../components/molecules/modal-container-context";
import { IconButton } from '../../components/atoms/icon-button';

const menuItems = [
    {
        label: "Toàn cảnh",
        icon: Component,
        idx: 0,
    },
    {
        label: "Bản đồ",
        icon: Map,
        idx: 1,
    },
    {
        label: "Mặt bằng",
        icon: Building,
        idx: 2,
    },
    {
        label: "Căn hộ",
        icon: Building,
        idx: 4,
    },
    {
        label: "Thư viện",
        icon: Building,
        idx: 3,
    },
];

export function MainMenu({ containerRef }) {

    const [open, setOpen] = useState(true);
    const { index, openModal } = useModal();

    const handleOpen = (index) => {
        switch (index) {
            case 1:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <MapBoxBasic />
                    </div>
                    , 1)
                break

            case 2:
                openModal(<Plans />, 2)
                break

            case 3:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <Library />
                    </div>
                    , 3)
                break

            case 4:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <Room />
                    </div>
                    , 4)
                break

            case 6:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <iframe
                            src="https://player.flipsnack.com?hash=RUVEREREOTlFOEMrdDNzbzhsbHBtYQ=="
                            width="100%"
                            height="100%"
                            seamless
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-read; clipboard-write"
                        ></iframe>
                    </div>
                    , 6)
                break

            case 7:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-y-scroll">
                        <FAQList />
                    </div>
                    , 7)
                break

            case 8:
                openModal(
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <UsageGuide />
                    </div>
                    , 8)
                break

            default:
                break
        }
    }

    const toggleFullscreen = () => {
        const container = containerRef.current;
        if (!container) return;

        if (!document.fullscreenElement) {
            container.requestFullscreen().catch((err) => {
                console.error(`Không thể bật fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }


    const buttons = [
        {
            icon: Maximize2,
            onClick: toggleFullscreen,
        },
        {
            icon: Book,
            onClick: () => handleOpen(6)
        },
        {
            icon: TableOfContents,
            onClick: () => handleOpen(7)
        },
        {
            icon: CircleQuestionMark,
            onClick: () => handleOpen(8)
        },
    ];

    return (
        <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="mb-3 bg-[#1A341B] text-white px-2 py-1 rounded-lg shadow-md"
                >
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                <div
                    className={`flex flex-col gap-1 md:gap-2 text-xs md:text-sm font-light transition-all duration-500 overflow-hidden
        ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    {menuItems.map((item) => {
                        const isActive = index === item.idx;
                        return (
                            <NavButton
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                active={isActive}
                                onClick={() => handleOpen(item.idx)}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="absolute top-3 right-3 z-10">
                <div className="flex flex-col gap-1">
                    {buttons.map((btn, i) => (
                        <IconButton key={i} icon={btn.icon} onClick={btn.onClick} />
                    ))}
                </div>
            </div>

            <ModalContainer />
        </>
    );
};
