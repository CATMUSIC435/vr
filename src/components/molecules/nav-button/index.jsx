import { clsx } from "clsx";
import { useSound } from "../../../hooks/use-sound";
import { linkSound } from "../../../constants";

export default function NavButton({ label, icon: Icon, active, onClick, className }) {
    const { playSound } = useSound(linkSound);


    const handleClick = () => {
        playSound();
        onClick();
    }

    return (
        <button
            onClick={handleClick}
            className={clsx(className,
                "cursor-pointer flex flex-col items-center md:gap-1 px-2 md:px-3 py-2 rounded-xl transition-all duration-300 ease-linear text-[#d4ae6f]",
                {
                    "bg-[#1A341B] scale-105 shadow-md": active,
                    "bg-white/20 hover:bg-white/20 hover:text-white/80": !active,
                }
            )}
        >
            <Icon className="w-4 h-4 md:w-6 md:h-6" />
            <span className="hidden md:block text-sm">{label}</span>
        </button>
    );
}
