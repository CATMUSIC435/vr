import { linkSound } from "../../../constants";
import { useSound } from "../../../hooks/use-sound";

export function IconButtonVtl({
    icon: Icon,
    name,
    onClick,
    className = "",
    active = false,
}) {
    const { playSound } = useSound(linkSound);
    const handleClick = () => {
        playSound();
        onClick();
    }
    return (
        <button
            onClick={handleClick}
            className={`
        cursor-pointer w-8 md:w-22 flex flex-col items-center gap-1 px-2 md:px-3 py-1 md:py-2 rounded-sm md:rounded-lg
        backdrop-blur-md shadow-md transition-all duration-200
        ${className}
        ${active ? "bg-[#1A341B]" : "bg-white/20 hover:bg-white/30"}
        text-[#d4ae6f]
      `}
        >
            {Icon && <Icon className="w-6 h-6" />}
            {name && <div className="hidden md:block">
                <p className="line-clamp-1 w-full">{name}</p>
            </div>}
        </button>
    )
}
