import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataLoading, DataError } from "../../../components/Section/DataStatus";
import { campaignStorage } from "../../../_api";
import { formatThousandNumber } from "../../../_formats";
import {
  getCampaigns,
  updateCampaigns,
} from "../../../_services/campaign";

export function Campaigns() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datas, setDatas] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await updateCampaigns(id, { status: newStatus, _method: "PUT" });

      setDatas((prevDatas) =>
        prevDatas.map((campaign) =>
          campaign.id === id
            ? { ...campaign, status: newStatus ?? campaign.status }
            : campaign
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
    <div className="flex flex-col gap-12 mt-12 mb-8">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="p-6 mb-8 capitalize"
        >
          <Link to={`create`}>
            <Button color="teal" className="rounded-md">
              Create Data
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2 overflow-hidden overflow-x-scroll">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "title",
                  "image",
                  "location",
                  "created by",
                  "plant",
                  "target donation",
                  "collected donation",
                  "status",
                ].map((el) => (
                  <th
                    key={el}
                    className="px-5 py-3 text-left border-b border-blue-gray-50"
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
                ({id, title, image, location, user, plant, target_donation, collected_donation, status}, key) => {
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
                          className="font-semibold capitalize"
                        >
                          {title}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Avatar
                          src={campaignStorage + image}
                          alt="avatar"
                          variant="rounded"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {location}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {user.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {plant.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {formatThousandNumber(target_donation, "IND")}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {formatThousandNumber(collected_donation, "IND")}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Select
                          value={status}
                          label="change status"
                          onChange={(e) => updateStatus(id, e)}
                          className="text-xs font-semibold text-blue-gray-600"
                          disabled={status === "finished"}
                        >
                          <Option value="active">Active</Option>
                          <Option value="inactive">Inactive</Option>
                          <Option value="finished">Finished</Option>
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
