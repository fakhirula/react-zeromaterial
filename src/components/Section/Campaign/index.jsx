import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Progress,
  Button,
} from "@material-tailwind/react";
import { DataError, DataLoading } from "../DataStatus";
import { useEffect, useState } from "react";
import { getCampaigns } from "../../../_services/campaign";
import { campaignStorage } from "../../../_api";
import {
  formatDaysLeft,
  formatProgress,
  formatThousandNumber,
} from "../../../_formats";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CampaignSection({ amount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const getData = await getCampaigns();
        setDatas(getData);
      } catch (err) {
        setError("Failed to fetch data, please try again later.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let displayedCampaigns = datas;
  if (amount !== "all") {
    const amountNumber = parseInt(amount, 10);
    displayedCampaigns = datas.slice(0, amountNumber);
  }

  displayedCampaigns = shuffleArray(displayedCampaigns);

  if (loading) {
    return <DataLoading />;
  }

  if (error) {
    return <DataError msg={error} />;
  }

  return (
    <section className="!mx-auto py-8 lg:py-20">
      {amount === "all" ? (
        <div className="md:mb-14 mb-10">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-center mb-4 !text-2xl font-bold md:!text-4xl"
          >
            Kampanye
          </Typography>
        </div>
      ) : (
        <div className="md:mb-14 mb-10">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-2xl font-bold md:!text-4xl"
          >
            Kampanye
          </Typography>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {displayedCampaigns.map((data) => (
          <Card
            shadow={false}
            className="w-full max-w-[25rem] overflow-hidden border"
            key={data.id}
          >
            <Link to={`/kampanye/${data.id}`}>
              <CardHeader
                floated={false}
                shadow={false}
                color="blue-gray"
                className="m-0 rounded-none"
              >
                <img
                  src={campaignStorage + data.image}
                  alt="card-image"
                  className="h-52 w-full object-cover"
                />
              </CardHeader>
              <CardBody className="flex flex-col gap-3 py-8">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {data.title}
                </Typography>
                <Typography className="text-sm text-gray-500">
                  Campaigner:{" "}
                  <Link
                    to="#"
                    className="font-semibold text-teal-800 hover:underline"
                  >
                    {data.user.name}
                  </Link>
                </Typography>
                <div className="flex flex-col gap-1">
                  <div className="w-full">
                    <Typography className="text-sm text-gray-500">
                      <span className="font-semibold text-eerie">
                        {formatThousandNumber(data.collected_donation, "ENG")}
                      </span>{" "}
                      Donasi ditambahkan
                    </Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography className="text-sm text-gray-500">
                      <span className="font-semibold text-eerie">
                        {data.total_trees_donated}
                      </span>{" "}
                      Pohon terkumpul
                    </Typography>
                    <Typography className="text-sm text-gray-500">
                      <span className="font-semibold text-eerie">
                        {formatDaysLeft(data.start_date, data.end_date)}
                      </span>{" "}
                      hari lagi
                    </Typography>
                  </div>
                </div>
                <Progress
                  value={formatProgress(
                    data.target_donation,
                    data.collected_donation
                  )}
                  size="sm"
                  color="teal"
                />
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
      {!amount === "all" && (
        <Button className="mt-6 mx-auto flex" variant="outlined">
          Lihat semua
        </Button>
      )}
    </section>
  );
}

CampaignSection.propTypes = {
  amount: PropTypes.string,
};