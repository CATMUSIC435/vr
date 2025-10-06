import { linkSound } from "../../../constants";
import { useSound } from "../../../hooks/use-sound";
import { cn } from "../../../lib/utils";

export function IconButton({
  icon: Icon,
  active = false,
  onClick,
  label,
}) {
  const { playSound } = useSound(linkSound);

  const handleClick = () => {
    playSound();
    onClick();
  }
  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs cursor-pointer",
        active ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"
      )}
    >
      <Icon className="w-4 h-4 md:w-6 md:h-6" />
      {label && <span className="text-xs">{label}</span>}
    </button>
  );
};
