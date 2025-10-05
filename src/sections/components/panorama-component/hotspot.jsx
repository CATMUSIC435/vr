import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export function Hotspot({ position, label, image }) {
    // điểm bắt đầu (hotspot)
    const start = new THREE.Vector3(...position);

    // điểm kết thúc line (ngay dưới ảnh, chưa cộng thêm y)
    const end = new THREE.Vector3(position[0], position[1] + 100, position[2]);

    // geometry cho line
    const curve = useMemo(() => new THREE.LineCurve3(start, end), [start, end]);
    const tubeGeometry = useMemo(
        () => new THREE.TubeGeometry(curve, 20, 0.015, 8, false),
        [curve]
    );

    return (
        <>
            {/* Chấm hotspot */}
            <mesh position={position}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial
                    color="orange"
                    emissive="orange"
                    emissiveIntensity={0.6}
                />
            </mesh>

            {/* Hiệu ứng tỏa sáng */}
            <mesh position={position} scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[0.05, 32, 32]} />
                <meshBasicMaterial color="orange" transparent opacity={0.3} />
            </mesh>

            {/* Dây nối (tube) */}
            <mesh geometry={tubeGeometry}>
                <meshStandardMaterial
                    color="orange"
                    emissive="orange"
                    emissiveIntensity={2}
                />
            </mesh>

            {/* Label / Ảnh - đặt ngay trên end */}
            <Html position={[end.x, end.y + 0.5, end.z]} distanceFactor={400}>
                <div className="relative">
                    <div className="relative p-2 z-1">
                        <div className="absolute -top-36 text-md font-medium text-center mb-1">
                            <p className="text-white mb-1">Công viên</p>

                            <div className="w-28 h-20">
                                <img
                                    src={image}
                                    alt={label}
                                    className="h-full w-full object-cover rounded"
                                />
                            </div>
                            <div className="bg-white h-14 w-[1px] mx-auto">

                            </div>
                        </div>
                        <div className="w-28">
                            <div className="text-xs w-4 h-4 rounded-full mt-1 bg-white relative mx-auto">
                                <div className="w-full h-full bg-white animate-ping rounded-lg" />
                            </div>
                        </div>
                    </div>
                    {/* Hiệu ứng ping glow */}
                </div>
            </Html>
        </>
    );
}
