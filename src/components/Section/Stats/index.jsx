import { Typography } from "@material-tailwind/react";
import { statsData } from "../../../utils/constants";

export default function StatsSection() {
  return (
    <section className="container max-w-7xl mx-auto md:py-28 py-10">
      <div className="text-center md:mb-24 mb-10">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-2xl font-bold md:!text-4xl"
        >
          Kamu Gak Sendirian Kok
        </Typography>
      </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
    </section>
  )
}