import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import {
  CheckBadgeIcon,
  ClockIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  decodeToken,
  formatDateString,
  formatThousandNumber,
} from "../../../_formats";
import { getDonations } from "../../../_services/donation";
import { campaignStorage } from "../../../_api";
import { useNavigate } from "react-router-dom";

export default function Record() {
  const [errors, setErrors] = useState({});
  const [listData, setListData] = useState([]);

  const token = localStorage.getItem("accessToken");
  const userData = decodeToken(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allDonations = await getDonations();
        const filteredDonations = allDonations.filter(
          (donation) => donation.user_id === userData.id
        );
        setListData(filteredDonations);
      } catch (error) {
        setErrors(error.response.data.errors || {});
        console.error(error);
      }
    };

    fetchData();
  }, [userData.id]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <ClockIcon className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <XCircleIcon className="h-4 w-4 text-red-500" />;
      case "confirmed":
        return <CheckBadgeIcon className="h-4 w-4 text-teal-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "failed":
        return "Failed";
      case "confirmed":
        return "Confirmed";
      default:
        return "Unknown";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "failed":
        return "text-red-500";
      case "confirmed":
        return "text-teal-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="max-w-4xl !mx-auto px-8 py-20 w-full">
      <Card shadow={false}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex gap-2 flex-col md:flex-row items-start !justify-between"
        >
          <div className="w-full mb-2">
            <Typography className="!font-bold" color="blue-gray">
              Riwayat Donasi
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small"
            >
              View your donation details quickly and easily.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 !p-4">
          {listData.length > 0 ? (
            listData.map((data, key) => (
              <Card
                shadow={false}
                key={key}
                className="rounded-lg border border-gray-300 p-4"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border border-gray-200 rounded-lg">
                      <Avatar
                        src={
                          campaignStorage +
                          (data.campaign && data.campaign.image)
                        }
                        alt={data.campaign && data.campaign.title}
                        variant="rounded"
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold"
                      >
                        {data.campaign && data.campaign.title}
                      </Typography>
                      <Typography className="!text-gray-600 text-xs font-normal">
                        {data.campaign && data.campaign.location} |{" "}
                        {formatDateString(data.created_at)}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      size="sm"
                      variant="text"
                      color={getStatusTextColor(data.status)}
                      className="flex items-center gap-1"
                    >
                      {getStatusIcon(data.status)}
                      <Typography
                        className={`!font-semibold text-xs ${getStatusTextColor(
                          data.status
                        )}`}
                      >
                        {getStatusText(data.status)}
                      </Typography>
                    </Button>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex gap-1">
                      <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Nomor Resi:
                      </Typography>
                      <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                      >
                        {data.donation_code}
                      </Typography>
                    </div>
                    <div className="flex gap-1">
                      <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Tujuan Donasi:
                      </Typography>
                      <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                      >
                        {data.donation_type && data.donation_type.name}
                      </Typography>
                    </div>
                    <div className="flex gap-1">
                      <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Nominal:
                      </Typography>
                      <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                      >
                        Rp{formatThousandNumber(data.amount, "IND")} |{" "}
                        {data.payment_method && data.payment_method.name}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card
              shadow={false}
              className="rounded-lg border border-gray-300 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="mx-auto mb-1 font-bold"
              >
                Tidak ada riwayat donasi
              </Typography>
            </Card>
          )}
        </CardBody>
      </Card>
    </section>
  );
}
