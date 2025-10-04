import { useRef, useState } from 'react'
import { Book, Building, ChevronDown, ChevronUp, Component, Map, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import MapBoxBasic from './map';
import PanoramaViewer from './panorama-viewer';
import { Plans } from './plans';
import AudioPlayerWithPlaylist from './audio-player-with-playlist';
import { Library } from './library';
import { Room } from './room';
import EmbeddedSite from './embedded-site';

export default function App() {

  // const currentMeshRef = useRef();
  // const texture1 = useLoader(THREE.TextureLoader, '/assets/panorama.png')
  // const texture2 = useLoader(THREE.TextureLoader, '/assets/pano.jpg')

  // texture1.mapping = THREE.EquirectangularReflectionMapping;
  // texture1.generateMipmaps = false;

  // texture2.mapping = THREE.EquirectangularReflectionMapping;
  // texture2.generateMipmaps = false;

  const controls = useRef()
  const [transition, setTransition] = useState(0);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error(`Không thể bật fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };


  // const material = useLoader(THREE.TextureLoader, '/assets/panorama.png')
  // material.mapping = THREE.EquirectangularReflectionMapping;
  // currentTexture.encoding   = THREE.sRGBEncoding;
  // material.generateMipmaps = false;
  // currentTexture.minFilter = THREE.LinearMipMapLinearFilter;

  // const material2 = useLoader(THREE.TextureLoader, '/assets/pano.ktx2')
  // const material2 = useKTX2('/assets/pano.ktx2');
  // material2.mapping = THREE.EquirectangularReflectionMapping;
  // currentTexture.encoding   = THREE.sRGBEncoding;
  // material2.generateMipmaps = false;
  // currentTexture.minFilter = THREE.LinearMipMapLinearFilter;

  const handleTransition = (e) => {
    const value = parseFloat(e.target.value);
    setTransition(value);
  }


  const handleClose = () => {
    setIndex(0);
    setIsOpen(false)
  }


  return (
    <>
      <div
        ref={containerRef} className='w-screen h-screen relative bg-[#1A341B] select-none'>
        <PanoramaViewer isOpen={isOpen} transition={transition} onChange={handleTransition} />

        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            onClick={() => setOpen(!open)}
            className="mb-3 bg-[#1A341B] text-white px-2 py-1 rounded-lg shadow-md"
          >
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <div className={`flex flex-col gap-3 text-xs md:text-sm font-light transition-all duration-500 overflow-hidden 
        ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <button
              onClick={() => setIndex(0)}
              className={`cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-md shadow-2xs
        ${index === 0 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
            >
              <Component className="w-6 h-6" />
              Toàn cảnh
            </button>

            <button
              onClick={() => {
                setIsOpen(true)
                setIndex(1)
              }}
              className={` cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 1 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
            >
              <Map className="w-6 h-6" />
              Bản đồ
            </button>
            <button
              onClick={() => {
                setIsOpen(true)
                setIndex(2)
              }}
              className={` cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 2 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
            >
              <Building className="w-6 h-6" />
              Mặt bằng
            </button>
            <button
              onClick={() => {
                setIsOpen(true)
                setIndex(4)
              }}
              className={` cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 4
                  ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
            >
              <Building className="w-6 h-6" />
              Căn hộ
            </button>
            <button
              onClick={() => {
                setIsOpen(true)
                setIndex(3)
              }}
              className={` cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs
        ${index === 3 ? "bg-[#1A341B]" : "bg-white/10 hover:bg-blue-100/20 focus:border-none"}`}
            >
              <Building className="w-6 h-6" />
              Thư viện
            </button>
          </div>
        </div>

        <div className='absolute top-3 right-3 z-10'>
          <div className='flex flex-col gap-1'>
            <button
              onClick={toggleFullscreen}
              className=" cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            <button
              onClick={() => {
                setIsOpen(true)
                setIndex(6)
              }}
              className=" cursor-pointer flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition text-[#d4ae6f] backdrop-blur-2xl shadow-2xs"
            >
              <Book size={20} />
            </button>

          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative shadow-lg w-[80vw] h-[80vh] bg-white/10 backdrop-blur-md rounded-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <button
                  onClick={() => handleClose()}
                  className="cursor-pointer absolute top-2 right-2 z-10 text-black transform hover:rotate-180 transition-all duration-300 duration-initial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="36" height="36" viewBox="0 0 24 24"
                    fill="none" stroke="#000"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>

                </button>
                {index === 1 && <div className='w-full h-full rounded-xl overflow-hidden'><MapBoxBasic /></div>}
                {index === 2 && <Plans />}
                {index === 3 && <div className='w-full h-full rounded-xl overflow-hidden'><Library /></div>}
                {index === 4 && <div className='w-full h-full rounded-xl overflow-hidden'><Room /></div>}
                {index === 6 && <div className='w-full h-full rounded-xl overflow-hidden'>
                  <iframe src="https://player.flipsnack.com?hash=RUVEREREOTlFOEMrdDNzbzhsbHBtYQ==" width="100%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe></div>}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AudioPlayerWithPlaylist />
      </div>
    </>
  )
}

