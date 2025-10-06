import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";
import { motion } from "framer-motion";

export function Hotspot({ position, label, image, top, heightImg }) {
    const start = new THREE.Vector3(...position);
    const end = new THREE.Vector3(position[0], position[1] + 100, position[2]);

    const curve = useMemo(() => new THREE.LineCurve3(start, end), [start, end]);
    const tubeGeometry = useMemo(
        () => new THREE.TubeGeometry(curve, 20, 0.015, 8, false),
        [curve]
    );

    return (
        <>
            <mesh position={position}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial
                    color="orange"
                    emissive="orange"
                    emissiveIntensity={0.6}
                />
            </mesh>


            <mesh position={position} scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[0.05, 32, 32]} />
                <meshBasicMaterial color="orange" transparent opacity={0.3} />
            </mesh>

            <mesh geometry={tubeGeometry}>
                <meshStandardMaterial
                    color="orange"
                    emissive="orange"
                    emissiveIntensity={2}
                />
            </mesh>

            <Html position={[end.x, end.y + 0.5, end.z]} distanceFactor={400}>
                <div className="relative pointer-events-none">
                    <div className="relative p-2 z-1">
                        <div className="absolute text-left mb-1" style={{ top: `-${top + heightImg + 8}px` }}><motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-sm font-semibold text-black px-3 py-1 rounded-sm bg-white/40 backdrop-blur-md shadow-lg text-center line-clamp-1"
                        >
                            {label}
                        </motion.p>

                            <div style={{ height: `${heightImg}px`, width: `${heightImg * 3 / 2}px` }}>
                                <img
                                    src={image}
                                    alt={label}
                                    className="h-full w-auto object-cover rounded"
                                />
                            </div>
                            <div className="bg-white w-[1px] mx-auto" style={{ height: `${top}px` }}>

                            </div>
                        </div>
                        <div style={{ width: `${heightImg * 3 / 2}px` }}>
                            <div className="text-xs w-4 h-4 rounded-full mt-1 bg-white relative mx-auto">
                                <div className="w-full h-full bg-white animate-ping rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
}
