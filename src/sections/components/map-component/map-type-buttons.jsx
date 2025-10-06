import { IconButtonVtl } from "../../../components/molecules/icon-button-vtl";

export function MapTypeButtons({ typeArray, changePlace }) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 z-10">
      <div className="flex gap-2 text-xs md:text-sm font-light">
        {typeArray.map((item) => (
          <IconButtonVtl
            key={item.idx}
            icon={item.icon}
            name={item.name}
            onClick={() => changePlace(item.idx, item.icon)}
          />
        ))}
      </div>
    </div>
  );
}
