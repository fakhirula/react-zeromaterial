import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { DataLoading, DataError } from "../../../components/Section/DataStatus";
import {
  destroyPaymentMethods,
  getPaymentMethods,
} from "../../../_services/payment_method";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export function PaymentMethods() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const getData = await getPaymentMethods();
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      setLoading(true);
      try {
        await destroyPaymentMethods(id);
        setDatas((prevData) => prevData.filter((data) => data.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
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
          <Link to={`create`}>
            <Button color="teal" className="rounded-md">
              Create Data
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="overflow-x-scroll overflow-hidden px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["name", "account number", "action"].map((el) => (
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
              {datas.map(({ id, name, account_number }, key) => {
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
                        {name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {account_number}
                      </Typography>
                    </td>
                    <td className={`${className} flex flex-row gap-2`}>
                      <Typography as="a" href={`${page}/edit/${id}`}>
                        <PencilSquareIcon {...icon} />
                      </Typography>
                      <Link to={`edit/${id}`}></Link>
                      <Typography as="button" onClick={() => handleDelete(id)}>
                        <TrashIcon {...icon} />
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
