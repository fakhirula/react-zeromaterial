import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { brandsData } from "../../../utils/constants";

export function BrandSection() {
  return (
    <section className="!mx-auto py-8 lg:py-20">
      <div className="text-center place-content-center grid">
        <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
          Lebih dari 350+ brand bersama kami
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug font-bold md:!text-4xl"
        >
          Dipercayai oleh Mereka
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-3xl text-base !text-gray-500 lg:px-8 mb-10"
        >
          Dari komunitas rintisan yang inovatif hingga dipercayai oleh 350 lebih perusahaan. Kami telah bekerja sama ke berbagai sektor, masing-masing tantangan unik telah berhasil diselesaikan.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card id={brandsData[0].id} shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src={brandsData[0].img}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  {brandsData[0].name}
                </Typography>
              </CardBody>
            </Card>
            <Card id={brandsData[1].id} shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src={brandsData[1].img}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  {brandsData[1].name}
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card id={brandsData[2].id} shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src={brandsData[2].img}
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4">
                {brandsData[2].name}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal lg:max-w-[16rem]">
                &quot;{brandsData[2].quote}&quot;
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card id={brandsData[3].id} shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src={brandsData[3].img}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  {brandsData[3].name}
                </Typography>
              </CardBody>
            </Card>
            <Card id={brandsData[4].id} shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src={brandsData[4].img}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  {brandsData[4].name}
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Button className="mt-6 mx-auto flex" variant="outlined">Lihat semua</Button>
    </section>
  );
}

export default BrandSection;