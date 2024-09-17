import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ currentPage, setCurrentPage, testimonialsPerPage, totalTestimonials }) {
  const numPages = Math.ceil(totalTestimonials / testimonialsPerPage);

  const next = () => {
    if (currentPage === numPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const firstTestimonial = (currentPage - 1) * testimonialsPerPage;
  const lastTestimonial = currentPage * testimonialsPerPage;

  return (
    <div className="max-w-full mx-auto">
      <div className="flex items-center justify-center gap-8 py-6">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
          <strong className="text-gray-900">{numPages}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={currentPage === numPages}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}