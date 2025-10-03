import { useRef, useState } from 'react'
import { Building, Component, Map } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import MapBoxBasic from './map';
import PanoramaViewer from './panorama-viewer';
import { Plans } from './plans';
import AudioPlayerWithPlaylist from './audio-player-with-playlist';
import { Library } from './library';

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
  const [isOpen, setIsOpen] = useState(false)


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


  return (
    <>
      <div className='w-screen h-screen relative bg-[#1A341B]'>
        <PanoramaViewer transition={transition} onChange={handleTransition} />

        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <div className="flex flex-col gap-3 text-xs md:text-sm font-light">
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
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
                  onClick={() => setIsOpen(null)}
                  className="cursor-pointer absolute top-2 right-2 z-10 text-black transform hover:rotate-180 transition-all duration-300 duration-initial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="36" height="36" viewBox="0 0 24 24"
                    fill="none" stroke="#fff"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>

                </button>
                {index === 1 && <div className='w-full h-full rounded-xl overflow-hidden'><MapBoxBasic /></div>}
                {index === 2 && <Plans />}
                {index === 3 && <div className='w-full h-full rounded-xl overflow-hidden'><Library /></div>}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AudioPlayerWithPlaylist />
      </div>
    </>
  )
}

