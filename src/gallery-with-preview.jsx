
const thumbnailImages = ['/5.jpg','/6.jpg','/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg']

export default function GalleryWithPreview({ list, setList, imagesAnother }) {
  return (
    <div className="grid md:h-full grid-cols-1 md:grid-cols-4 md:gap-2">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-2">
        {thumbnailImages.map((img, index) => (
          <div key={index} className="h-24 w-full">
            <img
              src={img}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => {
                if (index === 0 && setList) {
                  setList(imagesAnother)
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 md:mt-0 col-span-3 h-56 md:h-full">
        <div className='h-full w-full bg-[100%,100%] bg-center' style={{backgroundImage: `url(${thumbnailImages[0]})`}}>

        </div>
      </div>
    </div>
  )
}
