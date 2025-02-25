// @material-tailwind/react
import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  CardBody,
} from "@material-tailwind/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export function KpiCard({ title, percentage, price, color, icon }) {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="!font-medium !text-xs text-gray-600">
            {title}
          </Typography>
          <div className="flex items-center gap-1">
            {icon}
            <Typography color={color} className="font-medium !text-xs">
              {percentage}
            </Typography>
          </div>
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
}

const data = [
  {
    title: "Revenue",
    percentage: "12%",
    price: "$50,846.90",
    color: "red",
    icon: <ChevronDownIcon strokeWidth={4} className="w-3 h-3 text-red-500" />,
  },
  {
    title: "Outbound Clicks",
    percentage: "16%",
    price: "10,342",
    color: "green",
    icon: <ChevronUpIcon strokeWidth={4} className="w-3 h-3 text-green-500" />,
  },
  {
    title: "Total Audience",
    percentage: "10%",
    price: "19,720",
    color: "green",
    icon: <ChevronUpIcon strokeWidth={4} className="w-3 h-3 text-green-500" />,
  },
  {
    title: "Event Count",
    percentage: "10%",
    price: "20,000",
    color: "red",
    icon: <ChevronDownIcon strokeWidth={4} className="w-3 h-3 text-red-500" />,
  },
];

export default function Dashboard() {
  return (
    <section className="mx-auto py-14 px-8">
      <div className="flex justify-between md:items-center">
        <div>
          <Typography className="font-bold">Overall Performance</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600 md:w-full w-4/5"
          >
            An upward arrow indicates an increase in value compared to the
            previous period.
          </Typography>
        </div>
      </div>
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
        {data.map((props, key) => (
          <KpiCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}