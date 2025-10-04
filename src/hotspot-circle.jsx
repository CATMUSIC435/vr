import { Hotspot } from "./hotspot";

export default function HotspotCircle() {
    const count = 10; // số hotspot muốn tạo
    const radius = 500; // bán kính vòng tròn
    const centerY = -100; // độ cao (Y)

    const hotspots = Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2; // chia đều góc
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return {
            position: [x, centerY, z],
            label: `Hotspot ${i + 1}`,
            image: "/12.jpg",
        };
    });

    return (
        <>
            {hotspots.map((spot, i) => (
                <Hotspot
                    key={i}
                    position={spot.position}
                    label={spot.label}
                    image={spot.image}
                />
            ))}
        </>
    );
}
