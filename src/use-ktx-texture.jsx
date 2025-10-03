import * as THREE from "three"
import { useLoader, useThree } from "@react-three/fiber"
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader"

export function useKTX2Texture(url) {
    const { gl } = useThree()
    return useLoader(KTX2Loader, url, (loader) => {
        loader.setTranscoderPath("/basis/") // 📌 copy basis/ vào public
        loader.detectSupport(gl)
    })
}
