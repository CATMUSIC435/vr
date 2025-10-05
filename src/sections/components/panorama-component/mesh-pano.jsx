import * as THREE from 'three';
// import { useKTX2Texture } from './use-ktx-texture';
import { useKTX2 } from '@react-three/drei';
// import { useKTX2Texture } from './use-ktx-texture';

export function MeshPano({ path, opacity}) {
    const texture = useKTX2(path)
    // material2.mapping = THREE.EquirectangularReflectionMapping;
    texture.flipY = true
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.encoding = THREE.sRGBEncoding;
    texture.generateMipmaps = false;

    return (
        <mesh>
            <sphereGeometry args={[500, 60, 40]} />
            <meshBasicMaterial opacity={opacity} transparent={true} map={texture} side={THREE.BackSide} />
        </mesh>
    )
}