import { Button, Typography } from "@material-tailwind/react";

export default function JoinNow() {
  return (
    <section className="!mx-auto py-8 lg:py-20">
      <div className="p-10 rounded-l-xl border border-blue-gray-100 bg-opacity-15 bg-[url('https://images.unsplash.com/photo-1631524254770-03abe3f42a0d?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">
          <div className="w-full lg:w-1/2">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold mb-2"
            >
              Upcoming Events
            </Typography>
            <Typography variant="h3" color="blue-gray">
              International Conference: Zero Waste To Zero Emissions
            </Typography>
            <Typography
              className="mt-2 mb-6 !text-base font-normal text-gray-500"
            >
              Prepare to be part of dynamic conversations that will redefine the
              boundaries.
            </Typography>
            <Button variant="filled" className="flex-shrink-0">
              join now
            </Button>
          </div>
      </div>
    </section>
  );
}