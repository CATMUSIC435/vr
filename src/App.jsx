import { useRef } from 'react'
import PanoramaViewer from './sections/panorama-viewer';
import { ModalProvider } from './contexts/modal-context';
import { MainMenu } from './sections/components/main-menu';
import { AudioPlayerWithPlaylist } from './components/organims/audio-player-with-playlist';



export default function App() {

  const containerRef = useRef(null);

  return (
    <ModalProvider>
      <div
        ref={containerRef} className='w-screen h-screen relative bg-[#1A341B] select-none'>
        <PanoramaViewer/>
        <MainMenu containerRef={containerRef} />
        <AudioPlayerWithPlaylist />
      </div>
    </ModalProvider>
  )
}

