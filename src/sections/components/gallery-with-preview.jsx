import { useState } from "react";
import MyCarousel from "./my-carousel"

export function GalleryWithPreview({ list }) {

  const [activeImage, setActiveImage] = useState(list[0]);
  return (
    <div className="grid md:h-full grid-cols-1 md:grid-cols-4 md:gap-2">
      <MyCarousel list={list} setActiveImage={setActiveImage} />
      <div className="mt-2 md:mt-0 col-span-3 h-60 md:h-full">
        <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: `url(${activeImage})` }}>
        </div>
      </div>
    </div>
  )
}
