import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { DataLoading, DataError } from "../../../components/Section/DataStatus";
import { formatThousandNumber } from "../../../_formats";
import { getDonations, updateDonations } from "../../../_services/donation";
import { updateCampaigns } from "../../../_services/campaign";

export function Donations() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const getData = await getDonations();
      setDatas(getData);
    } catch (err) {
      setError("Failed to fetch data, please try again later.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (
    id,
    campaignId,
    collectedDonation,
    amount,
    newStatus
  ) => {
    try {
      await updateDonations(id, { status: newStatus, _method: "PUT" });

      if (newStatus === "confirmed") {
        await updateCampaigns(campaignId, {
          collected_donation:
            parseInt(collectedDonation, 10) + parseInt(amount, 10),
          _method: "PUT",
        });
      }

      setDatas((prevDatas) =>
        prevDatas.map((donation) =>
          donation.id === id
            ? { ...donation, status: newStatus ?? donation.status }
            : donation
        )
      );
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  if (loading) {
    return <DataLoading />;
  }

  if (error) {
    return <DataError msg={error} />;
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="capitalize mb-8 p-6"
        >
          <Button color="teal" className="rounded-md">
            Report Data
          </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll overflow-hidden px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "campaign",
                  "user",
                  "payment_method",
                  "donation_type",
                  "amount",
                  "status",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datas.map(
                (
                  {
                    id,
                    campaign,
                    user,
                    payment_method,
                    donation_type,
                    amount,
                    status,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 ${
                    key === datas.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="capitalize font-semibold"
                        >
                          {campaign.title}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {user.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {payment_method.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {donation_type.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {formatThousandNumber(amount, "IND")}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Select
                          value={status}
                          label="change status"
                          onChange={(e) =>
                            updateStatus(
                              id,
                              campaign.id,
                              campaign.collected_donation,
                              amount,
                              e
                            )
                          }
                          className="text-xs font-semibold text-blue-gray-600"
                          disabled={
                            status === "confirmed" || status === "failed"
                          }
                        >
                          <Option value="pending">Pending</Option>
                          <Option value="confirmed">Confirmed</Option>
                          <Option value="failed">Failed</Option>
                        </Select>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
