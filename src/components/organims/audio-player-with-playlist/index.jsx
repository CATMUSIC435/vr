import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { playlist } from '../../../constants/constant'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'

export function AudioPlayerWithPlaylist() {
    const audioRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

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

        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('ended', handleEnded)
        }
    }, [currentIndex])

    // useEffect(() => {
    //     const handleClick = () => {
    //         if (!isPlaying) {
    //             play()
    //         }
    //     }
    //     window.addEventListener('click', handleClick, { once: true })
    //     return () => window.removeEventListener('click', handleClick)
    // }, [])

    return (
        <div className={clsx(!isExpanded ? 'w-6 fixed md:top-auto bottom-24 right-2 z-50' : 'fixed md:top-auto bottom-24 right-2 w-[260px] md:w-[300px] z-50')}>
            <div className="relative z-10 rounded- shadow-xl">
                <button
                    className="absolute top-0 right-0 text-gray-500 text-xs z-10 focus:outline-0"
                    onClick={() => setIsExpanded((prev) => !prev)}
                >
                    {isExpanded ? '🔽' : '🔼'}
                </button>
                <div className="transition-all duration-500 rounded-t-xl px-1 py-2 md:p-2 lg:px-2 lg:pt-3">
                    {isExpanded ? <div className="flex items-center space-x-4">
                        <div className='relative'>
                            <img
                                src="/2.jpg"
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="flex-none w-14 md:w-16 rounded-sm md:rounded-md bg-slate-100"
                                width={64}
                                height={64}
                            />
                            <button
                                onClick={togglePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 rounded-md"
                            >{isPlaying ? (
                                <Pause className="w-3 h-3 md:w-4 md:h-4 text-[#d4ae6f]" />
                            ) : (
                                <Play className="w-3 h-3 md:w-4 md:h-4 text-[#d4ae6f]" />
                            )}
                            </button>
                        </div>
                        <div className="flex-auto space-y-1 font-semibold">
                            <p className="mb-0 md:mb-auto text-[#1A341B] transition-all duration-500 text-sm leading-6">
                                <abbr title="Episode">Peder</abbr> B. Helland
                            </p>
                            <h2 className="text-white transition-all duration-500 text-sm leading-6 truncate">
                                🎵 {playlist[currentIndex].title}
                            </h2>
                        </div>
                    </div> : null}
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
                {isExpanded ? <div className='absolute left-0 top-0'>

                    <div className='flex gap-1'>
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={playPrev}
                            className="block p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
                        >
                            <SkipBack
                                size={16}
                                strokeWidth={2}
                                className="text-white"
                            />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={playNext}
                            className="block p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
                        >
                            <SkipForward
                                size={16}
                                strokeWidth={2}
                                className="text-white"
                            />
                        </button>
                    </div>

                </div> : null}
            </div>
            <audio ref={audioRef} src={playlist[currentIndex].url} loop={false} />
        </div>

    )

}
