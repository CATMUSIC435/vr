import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Environment } from '@react-three/drei'
import { useState } from 'react'
import { MeshPano } from './components/panorama-component/mesh-pano';
import { Scene } from './components/panorama-component/scene';
import { Moon, Sun } from 'lucide-react';
import { HotspotImage } from './components/panorama-component/hotspot-image';
import { useModal } from '../contexts/modal-context';
import ListHotspot from './components/panorama-component/listHotpot';
import { TransitionSlider } from './components/transition-slider';

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

                        {!isOpen ? <ListHotspot /> : null}
                        <Scene />

                        <Environment preset="city" />
                    </Canvas>
                </div>

                <TransitionSlider
                    value={transition}
                    onChange={handleTransition}
                    iconStart={<Moon className="w-10 h-10 text-gray-400/90" />}
                    iconEnd={<Sun className="w-10 h-10 text-yellow-400/90" />}
                    width="20rem"
                    color="bg-white/70"
                />
            </div>
        </>
    )
}

