import { useEffect, useState } from "react";
import {
  Button,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { showCampaigns } from "../../../_services/campaign";
import { campaignStorage } from "../../../_api";
import {
  formatDaysLeft,
  formatProgress,
  formatThousandNumber,
} from "../../../_formats";

export default function CampaignDetail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const dataCampaign = await showCampaigns(id);
      setDatas(dataCampaign);
    } catch (err) {
      setError("Failed to fetch data, please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleButtonClick = () => {
    navigate("/donasi", { state: { id } });
  };

  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-wrap">
          <img
            alt={datas.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={campaignStorage + datas.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex flex-row gap-2">
              <Typography
                variant="h2"
                className="text-sm title-font text-gray-500 font-light tracking-widest"
              >
                {datas.location}
              </Typography>
            </div>
            <Typography
              variant="h1"
              className="text-gray-900 text-3xl title-font font-medium mb-1"
            >
              {datas.title}
            </Typography>
            <div className="flex flex-row items-center gap-2">
              <Typography className="text-sm title-font text-gray-500 font-light tracking-widest">
                Jenis pohon
              </Typography>
              <Typography
                variant="h2"
                className="text-sm title-font text-gray-500 font-light tracking-widest"
              >
                {datas.plant && datas.plant.name}
              </Typography>
            </div>
            <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all we have. Then we lose
              family over time. What else could rust the heart more over time?
              Blackgold.
            </Typography>
            <div className="my-8 flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <Typography className="font-semibold text-eerie">
                  {formatThousandNumber(datas.collected_donation, "ENG")}
                </Typography>
                <Typography>Donasi ditambahkan</Typography>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <Typography className="font-semibold text-eerie">
                    {datas.total_trees_donated}
                  </Typography>
                  <Typography>Pohon terkumpul</Typography>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Typography className="font-semibold text-eerie">
                    {formatDaysLeft(datas.start_date, datas.end_date)}
                  </Typography>
                  <Typography>Hari lagi</Typography>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <Progress
                  value={formatProgress(
                    datas.target_donation,
                    datas.collected_donation
                  )}
                  size="lg"
                  color="teal"
                />
              </div>
              <div className="flex">
                <Button
                  color="gray"
                  className="w-full"
                  onClick={handleButtonClick}
                >
                  Donasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
