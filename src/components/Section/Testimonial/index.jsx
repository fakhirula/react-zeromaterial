import { useEffect, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Pagination } from '../../Pagination';
import { getTestimonies } from '../../../_services/testimony';
import PropTypes from 'prop-types';
import { DataError, DataLoading } from '../DataStatus';
import { Link } from 'react-router-dom';

function TestimonialCard({ testimony }) {
  return (
    <div key={testimony.id} className="p-4 md:w-1/2 w-full">
      <Card shadow={false} className="h-full bg-gray-100 p-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <p className="leading-relaxed mb-6">{testimony.quotes}</p>
        <Link to="#" className="inline-flex items-center">
          <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
            >
              {testimony.user ? testimony.user.name : 'Unknown User'}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="text-gray-500"
            >
              {testimony.user ? testimony.user.job : 'Unknown User'}
            </Typography>
          </span>
        </Link>
      </Card>
    </div>
  );
}

export default function Testimonial() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 2; // Jumlah testimonial per halaman

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const testimoniesData = await getTestimonies();
        setTestimonialsData(testimoniesData);
      } catch (err) {
        setError("Failed to fetch data, please try again");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const totalTestimonials = testimonialsData.length;

  if (loading) {
      return <DataLoading />;
    }
  
    if (error) {
      return <DataError msg={error} />;
    }

  return (
    <section className="text-gray-600 body-font">
      <div className="py-24 mx-auto">
        <div className="md:mb-14 mb-10">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-center mb-4 !text-2xl font-bold md:!text-4xl"
          >
            Harapan Mereka
          </Typography>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonialsData.slice(
            (currentPage - 1) * testimonialsPerPage,
            currentPage * testimonialsPerPage
          ).map((testimonial, index) => (
            <TestimonialCard key={index} testimony={testimonial} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          testimonialsPerPage={testimonialsPerPage}
          totalTestimonials={totalTestimonials}
        />
      </div>
    </section>
  );
}

TestimonialCard.propTypes = {
  testimony: PropTypes.isRequired,
};