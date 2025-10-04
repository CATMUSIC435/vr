import { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

export function Scene() {
  const controls = useRef(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    // 👇 setup vị trí ban đầu cho camera
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    camera.fov = 45;
    camera.updateProjectionMatrix();

    // 👇 setup lại CameraControls sau khi canvas render xong
    if (controls.current) {
      controls.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [camera]);

  return (
    <>
      <ambientLight intensity={1.2} />

      <CameraControls
        ref={controls}
        args={[camera, gl.domElement]} // 👈 Cực quan trọng: gắn camera & domElement
        enableZoom={true}
        zoomSpeed={1.2}
        minDistance={0.001}
        maxDistance={500}
        smoothTime={0.3}
      />
    </>
  );
}

export default function App() {
  return (
    <Canvas>
      <Scene />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
