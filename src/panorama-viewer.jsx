import { Canvas, useLoader } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, CameraControls, ContactShadows, Environment, Html, OrbitControls, useKTX2 } from '@react-three/drei'
import { useRef, useState } from 'react'
// import PanoramaWithTransition from './panorama-with-transition';
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshPano } from './mesh-pano';
import { Scene } from './scene';
import { Moon, Plus, Sun } from 'lucide-react';
import MapBoxBasic from './map';

export default function PanoramaViewer() {

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

    // console.log(transi tion);


    return (
        <>
            <div className='relative h-screen w-screen overflow-hidden'>
                <div className='h-screen w-screen overflow-hidden'>
                    <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                        <AdaptiveDpr pixelated />
                        <AdaptiveEvents />
                        <ambientLight intensity={Math.PI / 2} />
                        <directionalLight
                            position={[10, 10, 5]}
                            intensity={1.5}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />

                        <MeshPano opacity={transition} path="/assets/panorama.ktx2" />
                        <MeshPano opacity={1} path="/assets/panorama-ui.ktx2" />

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

