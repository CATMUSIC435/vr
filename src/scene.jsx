import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { CameraControls, ContactShadows } from '@react-three/drei'

export function Scene() {
    const controls = useRef(null)

    // useFrame((_, delta) => {
    //     if (controls.current) {
    //         controls.current.azimuthAngle += delta * 0.1   // xoay chậm (0.1 rad/s)
    //         controls.current.update(delta)
    //     }
    // })

    return (
        <>
            <ambientLight intensity={0.5 * Math.PI} />
            {/* <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} /> */}

            <CameraControls
                ref={controls}
                enableZoom={true}
                // dollyToCursor={true}
                // zoomToCursor={true}
                minDistance={1}
                maxDistance={400}
                zoomSpeed={0.1}
            />
        </>
    )
}
