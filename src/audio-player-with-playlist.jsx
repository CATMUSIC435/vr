import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

const playlist = [
    { title: 'Moon', url: '/music/Moon.mp3' },
    { title: 'My Love', url: '/music/Peder B. Helland - My Love (Radio Edit).mp3' },
    { title: 'Forever', url: '/music/Forever (Radio Edit).mp3' },
    { title: 'Yellow Flower', url: '/music/Forever (Radio Edit).mp3' },
    { title: 'Evening Waves', url: '/music/Evening Waves (Radio Edit).mp3' },
    { title: 'Rainy Day', url: '/music/Rainy Day (Radio Edit).mp3' },
]

export default function AudioPlayerWithPlaylist() {
    const audioRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const play = () => {
        audioRef.current?.play()
        setIsPlaying(true)
    }

    const pause = () => {
        setIsPlaying(false)
        audioRef.current?.pause()
    }

    const togglePlay = () => {
        isPlaying ? pause() : play()

    }

    const playNext = () => {
        const next = (currentIndex + 1) % playlist.length
        setCurrentIndex(next)
        setTimeout(() => audioRef.current?.play(), 100)
    }

    const playPrev = () => {
        const prev = (currentIndex - 1 + playlist.length) % playlist.length
        setCurrentIndex(prev)
        setTimeout(() => audioRef.current?.play(), 100)
    }

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleEnded = () => playNext()
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
        const handleLoadedMetadata = () => setDuration(audio.duration)

        audio.addEventListener('ended', handleEnded)
        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)

        return () => {
            audio.removeEventListener('ended', handleEnded)
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
    }, [currentIndex])

    useEffect(() => {
        const handleClick = () => {
            if (!isPlaying) {
                play()
            }
        }
        window.addEventListener('click', handleClick, { once: true })
        return () => window.removeEventListener('click', handleClick)
    }, [])

    return (
        <div className={clsx(!isExpanded ? 'w-[80px] md:w-[90px] fixed md:top-auto bottom-4 right-2 shadow-xl rounded-xl shadown-inner bg-white/10 backdrop-blur-md z-50' : 'fixed md:top-auto bottom-4 right-2 w-[260px] md:w-[300px] shadow-xl rounded-xl shadown-inner bg-white/10 backdrop-blur-md z-50')}>
            <div className="relative z-10 rounded-xl shadow-xl">
                <button
                    className="absolute top-0 right-0 text-gray-500 text-xs z-10"
                    onClick={() => setIsExpanded((prev) => !prev)}
                >
                    {isExpanded ? '🔽' : '🔼'}
                </button>
                <div className="transition-all duration-500 rounded-t-xl p-2 lg:px-2 lg:pt-3 space-y-2 sm:space-y-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/2.jpg"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="flex-none rounded-lg bg-slate-100"
                            width={64}
                            height={64}
                        />
                        {isExpanded ? <div className="flex-auto space-y-1 font-semibold">
                            <p className="mb-0 md:mb-auto text-indigo-600 transition-all duration-500 dark:text-indigo-700 text-sm leading-6">
                                <abbr title="Episode">Peder</abbr> B. Helland
                            </p>
                            <h2 className="text-white transition-all duration-500 text-sm leading-6 truncate">
                                🎵 {playlist[currentIndex].title}
                            </h2>
                        </div> : null}
                    </div>
                </div>
                <div className={`transition-all duration-100  ${isExpanded ? 'mt-3 max-h-auto' : 'max-h-0 opacity-0'}`}>

                    {/* <div className="space-y-2 w-full px-2 md:pb-4 *:lg:px-4">
                        <div className="relative">
                            <div className="bg-slate-100 transition-all duration-500 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 h-2"
                                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                                    role="progressbar"
                                    aria-label="music progress"
                                    aria-valuenow={1456}
                                    aria-valuemin={0}
                                    aria-valuemax={4550}
                                />
                            </div>
                            <div className="ring-cyan-500 transition-all duration-500 dark:ring-cyan-400 ring-2 absolute top-1/2 w-4 h-4 -mt-2 -ml-1 flex items-center justify-center bg-white rounded-full shadow" style={{ left: `${(currentTime / duration) * 100 + 4 || 0}%` }}>
                                <div className="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='absolute left-0 top-1/2 -translate-y-1/2'>
                    
                    <div>
                        <div className="flex-auto flex items-center justify-evenly">
                            <button
                                type="button"
                                className="block"
                                aria-label="Previous"
                                onClick={playPrev}
                            >
                                <svg width={24} height={24} fill="none">
                                    <path
                                        d="m10 12 8-6v12l-8-6Z"
                                        fill="#fff"
                                        stroke="#fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6 6v12"
                                        stroke="#fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-auto flex items-center justify-evenly">
                            <button
                                type="button"
                                className="block"
                                aria-label="Next"
                                onClick={playNext}
                            >
                                <svg width={24} height={24} fill="none">
                                    <path
                                        d="M14 12 6 6v12l8-6Z"
                                        fill="#fff"
                                        stroke="#fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18 6v12"
                                        stroke="#fff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <audio ref={audioRef} src={playlist[currentIndex].url} loop={false} />
        </div>

    )

}
