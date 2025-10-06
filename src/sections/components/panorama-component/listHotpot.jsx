import { pots } from "../../../constants/pot";
import { Hotspot } from "./hotspot";

export default function ListHotspot() {
    return (
        <>
            {
                pots.map((item, i) => (
                    <Hotspot
                        key={i}
                        position={item.position}
                        label={item.name}
                        image={item.img}
                        heightImg={item.hImg}
                        color={item.color}
                        top={item.top}
                    />
                ))
            }
        </>
    );
}
