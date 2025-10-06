import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Environment } from '@react-three/drei'
import { useState } from 'react'
import { MeshPano } from './components/panorama-component/mesh-pano';
import { Scene } from './components/panorama-component/scene';
import { Moon, Sun } from 'lucide-react';
import { HotspotImage } from './components/panorama-component/hotspot-image';
import { useModal } from '../contexts/modal-context';
import ListHotspot from './components/panorama-component/listHotpot';

export default function PanoramaViewer() {

    const { isOpen } = useModal();
    const [transition, setTransition] = useState(0);


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
            <div className='relative h-screen w-screen overflow-hidden'>
                <div className='h-screen w-screen overflow-hidden'>
                    <Canvas camera={{ position: [0, 0, 1], fov: 30 }}>
                        <AdaptiveDpr pixelated />
                        <AdaptiveEvents />
                        <directionalLight
                            position={[10, 10, 5]}
                            intensity={1.5}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />

                        <MeshPano opacity={transition} path="/assets/panorama.ktx2" />
                        <MeshPano opacity={1} path="/assets/panorama-ui.ktx2" />


                        <HotspotImage
                            position={[20, -495, -22]}
                            label="Cửa chính"
                            image="/12.jpg"
                        />

                        {/* {!isOpen ? <HotspotCircle /> : null} */}

                        {!isOpen ? <ListHotspot /> : null}
                        <Scene />

                        <Environment preset="city" />
                    </Canvas>
                </div>

                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 p-4 rounded-lg text-white'>
                    <label className='w-full relative" block text-sm font-medium mb-2'>
                        <div
                            className="absolute -top-10 flex items-center justify-center w-10 h-10"
                            style={{
                                left: `${transition * 100}%`,
                                transform: "translateX(-50%)",
                            }}
                        >
                            <Moon
                                className="w-8 h-8 absolute text-gray-400/90"
                                style={{ opacity: 1 - transition }}
                            />
                            <Sun
                                className="w-8 h-8 absolute text-yellow-400/90"
                                style={{ opacity: transition }}
                            />
                        </div>

                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.001"
                        value={transition}
                        onChange={handleTransition}
                        className='w-full h-2 appearance-none cursor-pointer bg-white/80 rounded-md slider'
                    />
                </div>
            </div>
        </>
    )
}

