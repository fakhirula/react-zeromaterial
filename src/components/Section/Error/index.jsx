import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-32 sm:py-36 lg:px-8">
        <div className="text-center">
          <Typography
            variant="semibold"
            color="blue-gray"
            className="font-semibold"
          >
            404
          </Typography>
          <Typography variant="h1" className="mt-4 font-bold tracking-tight">
            Page not found
          </Typography>
          <Typography
            variant="medium"
            color="blue-gray"
            className="mt-6 text-base leading-7 text-gray-600"
          >
            Sorry, we couldn’t find the page you’re looking for.
          </Typography>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Typography
              as="a"
              href="/"
              variant="medium"
              color="blue-gray"
              className="font-medium"
            >
              <Link to="/">
                <Button size="md">Go back home</Button>
              </Link>
            </Typography>
            <Typography
              as="a"
              href="/tentang#hubungi"
              variant="medium"
              color="blue-gray"
              className="font-semibold"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Typography>
          </div>
        </div>
      </main>
    </>
  );
}
