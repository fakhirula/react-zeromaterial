import React from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Onboarding() {
  return (
    <section>
      <div className="px-4 grid h-screen place-items-center">
        <Card>
          <CardBody className="max-w-lg md:p-20">
            <HeartIcon className="w-14 h-14 text-gray-900" />
            <Typography
              color="blue-gray"
              className="mb-4 !mt-4 "
              variant="h4"
            >
              Welcome to our community!
            </Typography>
            <Typography
              variant="lead"
              className="leading-8 text-gray-500"
            >
              We&apos;re excited to have you join us. Get started by completing
              your profile, exploring our features, and connecting with other
              users.
              <br />
              <br />
              Have questions? Check out our FAQs or reach out to our support
              team for assistance.
              <br />
              <br />
              Let&apos;s embark on this journey together!
            </Typography>
            <div className="flex !gap-4 mt-8">
              <Button fullWidth variant="outlined">
                skip
              </Button>
              <Button fullWidth>start</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Onboarding;