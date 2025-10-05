import { Hotspot } from "./hotspot";

function getRandom100to300() {
  return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
}  

export default function HotspotCircle() {
    const count = 20;
    const radius = 500;
    const centerY = -110;

    const hotspots = Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI;
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
                    image={spot.image} color="#ff8800"
                    top={getRandom100to300()}
                />
            ))}
        </>
    );
}
