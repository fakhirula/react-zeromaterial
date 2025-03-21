import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {
  getTestimonies,
} from "../../../_services/testimony";
import { DataLoading, DataError } from "../../../components/Section/DataStatus";
import { formatDateString, formatTruncateText } from "../../../_formats";

export function Testimonies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const getData = await getTestimonies();
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
                {["user", "quotes", "date"].map((el) => (
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
              {datas.map(({ user, quotes, created_at }, key) => {
                const className = `py-3 px-5 ${
                  key === datas.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="capitalize font-semibold"
                      >
                        {user.name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {formatTruncateText(quotes)}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {formatDateString(created_at)}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
