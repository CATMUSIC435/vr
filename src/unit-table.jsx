import { areaDef } from "./constant";

export function UnitTable({ area }) {
    return (
        <tbody className="text-xs ">
            <tr className="border-t border-[#3a2c1c]/50">
                <td className="px-4 py-1">Căn hộ / Unit</td>
                <td className="px-4 py-1"></td>
            </tr>
            <tr className="border-t border-[#3a2c1c]/50">
                <td className="px-4 py-1">H.01</td>
            </tr>
            {
                Object.keys(areaDef).map((key) => {
                    const value = area[key];
                    if (value) {
                        return (<tr key={key} className="border-t border-[#3a2c1c]/50">
                            <td className="px-4 py-1">{areaDef[key]}</td>
                            <td className="px-4 py-1">{area[key]}</td>
                        </tr>);
                    }
                })
            }
        </tbody>
    );
}
