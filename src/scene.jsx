import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { CameraControls, ContactShadows } from '@react-three/drei'

export function Scene() {
    const controls = useRef(null)

    const { camera } = useThree()

    // useEffect(() => {
    //     camera.fov = 30 // 👈 mặc định thường là 75
    //     camera.updateProjectionMatrix()
    // }, [camera])

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
                minDistance={0.01}    // 👈 cho phép zoom cực gần
                maxDistance={500}
                zoomSpeed={1.5}       // 👈 zoom nhanh hơn khi cuộn
                smoothTime={0.2}      // 👈 giảm thời gian mượt khi zoom
            />
        </>
    )
}
