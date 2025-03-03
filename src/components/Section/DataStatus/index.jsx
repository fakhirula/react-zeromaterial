import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function DataLoading() {
  return (
    <main className="py-6 px-12 space-y-2 bg-gray-300 min-h-screen w-full flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <Spinner className="h-8 w-8" />
        <div className="text-2xl font-bold text-gray-800">
          Please Wait ..
        </div>
      </div>
    </main>
  )
}

export function DataError({ msg }) {
  return (
    <main className="py-6 px-12 space-y-2 bg-gray-300 min-h-screen w-full flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-800">
          {msg}..
        </div>
      </div>
    </main>
  )
}

DataError.propTypes = {
  msg: PropTypes.isRequired,
};