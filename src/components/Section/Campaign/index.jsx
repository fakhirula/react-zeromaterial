import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Progress,
  Button,
} from "@material-tailwind/react";
import { campaignsData } from "../../../utils/constants";

export function CampaignSection() {
  return (
    <section className="!mx-auto py-8 lg:py-20">
      <div className="md:mb-14 mb-10">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-2xl font-bold md:!text-4xl"
        >
          Kampanye
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {campaignsData.map((campaign) => (
          <Card
            shadow={false}
            className="w-full max-w-[25rem] overflow-hidden border"
            key={campaign.id}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="blue-gray"
              className="m-0 rounded-none"
            >
              <img
                src={campaign.image}
                alt="card-image"
                className="h-52 w-full object-cover"
              />
            </CardHeader>
            <CardBody className="flex flex-col gap-3 py-8">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {campaign.title}
              </Typography>
              <Typography className="text-sm text-gray-500">
                Campaigner:{" "}
                <a
                  href="#"
                  className="font-semibold text-teal-800 hover:underline"
                >
                  {campaign.campaigner}
                </a>
              </Typography>
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <Typography className="text-sm text-gray-500">
                    <span className="font-semibold text-eerie">
                      {campaign.donations}k
                    </span>{" "}
                    Donasi ditambahkan
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography className="text-sm text-gray-500">
                    <span className="font-semibold text-eerie">
                      {campaign.trees}
                    </span>{" "}
                    Pohon terkumpul
                  </Typography>
                  <Typography className="text-sm text-gray-500">
                    <span className="font-semibold text-eerie">
                      {campaign.daysLeft}
                    </span>{" "}
                    hari lagi
                  </Typography>
                </div>
              </div>
              <Progress value={campaign.progress} size="sm" color="teal" />
            </CardBody>
          </Card>
        ))}
      </div>
      <Button className="mt-6 mx-auto flex" variant="outlined">
        Lihat semua
      </Button>
    </section>
  );
}

export default CampaignSection;
