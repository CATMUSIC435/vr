import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoPlayer({
    src,
    autoPlay = true,
    loop = true,
    muted = false,
    controls = false,
    className = "",
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                src={src}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Overlay nút Play/Pause */}
            {!controls && (
                <button
                    onClick={togglePlay}
                    className="absolute bottom-0 left-0 
                   w-16 h-16 flex items-center justify-center    bg-black/50 text-white 
                   hover:bg-black/70 transition"
                >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
            )}
        </div>
    );
}
