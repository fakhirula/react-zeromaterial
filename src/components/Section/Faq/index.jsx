import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faqsData } from "../../../utils/constants";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


export function FaqsSection() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <section className="">
      <div className="mb-10">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-4xl !leading-snug lg:text-[40px]"
        >
          Frequently asked questions
        </Typography>
        <Typography
          className="font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
        >
          A lot of people don&apos;t appreciate the moment until it&apos;s
          passed. I&apos;m not trying my hardest, and I&apos;m not trying to
          do.
        </Typography>
      </div>
      <div className="grid gap-10 px-8">
        {faqsData.map(({ id, title, desc }) => (
          <div key={id}>
            <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
              <AccordionHeader className="pb-6 text-[20px] font-bold" onClick={() => handleOpen(id)}>
                {title}
              </AccordionHeader>
              <AccordionBody className="text-base font-normal !text-gray-500">{desc}</AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqsSection;