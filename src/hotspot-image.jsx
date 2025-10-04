import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function HotspotImage({ position, label, image }) {
    const texture = useLoader(THREE.TextureLoader, image);

    const start = new THREE.Vector3(...position);
    const end = new THREE.Vector3(position[0], position[1] + 2, position[2]);

    const curve = new THREE.LineCurve3(start, end);
    const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.015, 8, false);

    const imageRef = useRef();
    const glowRef = useRef();
    const [hovered, setHovered] = useState(false);
    const blinkRef = useRef(0);

    useFrame((_, delta) => {
        if (hovered && imageRef.current) {
            blinkRef.current += delta * 5;

            // Nhấp nháy nhẹ, không gắt
            imageRef.current.material.opacity = 0.8 + 0.2 * Math.sin(blinkRef.current * 2);

            if (glowRef.current) {
                glowRef.current.visible = true;
                glowRef.current.material.opacity = 0.2 + 0.15 * Math.sin(blinkRef.current * 2);
            }
        } else {
            if (imageRef.current) imageRef.current.material.opacity = 1;
            if (glowRef.current) glowRef.current.visible = false;
        }
    });

    return (
        <>
            {/* Chấm hotspot */}

            {/* Hiệu ứng tỏa sáng */}
            <mesh position={position} scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[0.05, 32, 32]} />
                <meshBasicMaterial color="orange" transparent opacity={0.3} />
            </mesh>

            {/* Dây nối */}
            <mesh geometry={tubeGeometry}>
                <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={1.5} />
            </mesh>

            {/* Ảnh + viền glow */}
            <group>
                {/* Ảnh gốc */}
                <mesh
                    ref={imageRef}
                    position={[end.x, end.y + 1, end.z]}
                    rotation={[-Math.PI / 2, 0, 39.75]}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <planeGeometry args={[100, 80]} />
                    <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
                </mesh>

                {/* Glow nhẹ */}
                <mesh
                    ref={glowRef}
                    visible={false}
                    position={[end.x, end.y + 1, end.z]}
                    rotation={[-Math.PI / 2, 0, 39.75]}
                    scale={[1.03, 1.03, 1]} // viền nhỏ hơn, chỉ nhô nhẹ
                >
                    <planeGeometry args={[100, 80]} />
                    <meshBasicMaterial
                        color="#ffae42" // cam nhạt
                        transparent
                        opacity={0.2}
                        blending={THREE.AdditiveBlending} // ánh sáng thật
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>
        </>
    );
}
