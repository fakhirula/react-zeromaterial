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
import { formatIsActive } from "../../../_formats";
import { getUsers, updateUsers } from "../../../_services/user";

export function Users() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const getData = await getUsers();
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
      await updateUsers(id, { isactive: newStatus, _method: "PUT" });

      setDatas((prevDatas) =>
        prevDatas.map((user) =>
          user.id === id
            ? { ...user, isactive: newStatus ?? user.isactive }
            : user
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
                {["name", "email", "job", "role", "isactive"].map((el) => (
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
              {datas.map(({ id, name, email, job, role, isactive }, key) => {
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
                        {email}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {job || "-"}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {role}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Select
                        value={isactive === 1 ? "1" : "0"}
                        label="change status"
                        onChange={(e) => updateStatus(id, e)}
                        className="text-xs font-semibold text-blue-gray-600"
                        disabled={role === "superadmin"}
                      >
                        <Option value="1">Active</Option>
                        <Option value="0">Non-active</Option>
                      </Select>
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
