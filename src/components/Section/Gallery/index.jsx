import { Typography } from "@material-tailwind/react";
import { galleriesData } from "../../../utils/constants";

export default function GallerySection() {
  return(
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Typography
          variant="h1"
          color="blue-gray"
          className="text-center mb-16 !text-2xl font-bold md:!text-4xl"
        >
          Dokumentasi Kegiatan
        </Typography>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="max-h-screen flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[0].img}/>
            </div>
            <div className="md:p-2 p-1 w-1/2 h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[1].img}/>
            </div>
            <div className="md:p-2 p-1 w-full h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[2].img}/>
            </div>
          </div>
          <div className="max-h-screen flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[3].img}/>
            </div>
            <div className="md:p-2 p-1 w-1/2 h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[4].img}/>
            </div>
            <div className="md:p-2 p-1 w-1/2 h-80">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={galleriesData[5].img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}