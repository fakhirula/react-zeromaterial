import { Button, Input, Card, Select, Option, Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeCampaigns } from "../../../_services/campaign";
import ValidationError from "../../../components/Section/ValidationError";
import { getPlants } from "../../../_services/plant";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateCampaign() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  const navigate = useNavigate();

  const [errorPlants, setErrorPlants] = useState(null);
  const [plants, setPlants] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    image: null,
    location: "",
    created_by_user_id: 1,
    plant_id: "",
    start_date: "",
    end_date: "",
    target_donation: "",
  });

  const fetchData = async () => {
    setLoading(true);
    setErrorPlants(null);

    try {
      const getData = await getPlants();
      setPlants(getData);
    } catch (err) {
      setErrorPlants("Failed to fetch data, please try again later.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError(null);
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await storeCampaigns(data);
      navigate(-1);
    } catch (err) {
      if (err.response && err.response?.status === 403) {
        setGeneralError("You are not authorized to perform this action!");
      } else {
        setErrors(err.response?.data?.data || {});
      }
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <section>
      <Card className="px-8 py-8 mt-12 mb-8 mx-auto">
        {generalError && (
          <Alert color="red">
            {generalError}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <Input
                size="lg"
                label="Title"
                name="title"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.title}
                onChange={handleChange}
                error={!!errors.title}
              />
              {errors.title && <ValidationError message={errors.title[0]} />}
            </div>
            <div className="w-full">
              <Input
                type="file"
                size="lg"
                label="Image"
                name="image"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                onChange={handleChange}
                error={!!errors.image}
              />
              {errors.image && <ValidationError message={errors.image[0]} />}
            </div>
            <div className="w-full">
              <Input
                size="lg"
                label="Location"
                name="location"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.location}
                onChange={handleChange}
                error={!!errors.location}
              />
              {errors.location && (
                <ValidationError message={errors.location[0]} />
              )}
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Input
                type="date"
                size="lg"
                label="Start Date"
                name="start_date"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.start_date}
                onChange={handleChange}
                error={!!errors.start_date}
              />
              {errors.start_date && (
                <ValidationError message={errors.start_date[0]} />
              )}
            </div>
            <div className="w-full">
              <Input
                type="date"
                size="lg"
                label="End Date"
                name="end_date"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.end_date}
                onChange={handleChange}
                error={!!errors.end_date}
              />
              {errors.end_date && (
                <ValidationError message={errors.end_date[0]} />
              )}
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Select
                label="Select Plant"
                name="plant_id"
                onChange={(value) => setFormData((prevData) => ({ ...prevData, plant_id: value }))}
                error={!!errors.plant_id}
              >
                {plants.map((plant) => (
                  <Option key={plant.id} value={plant.id}>
                    {plant.name}
                  </Option>
                ))}
              </Select>
              {errors.plant_id && (
                <ValidationError message={errors.plant_id[0]} />
              )}
            </div>
            <div className="w-full">
              <Input
                type="number"
                min={1}
                size="lg"
                label="Target Donation"
                name="target_donation"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.targetDonation}
                onChange={handleChange}
                error={!!errors.target_donation}
              />
              {errors.target_donation && (
                <ValidationError message={errors.target_donation[0]} />
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              loading={loading}
              disabled={loading}
              type="submit"
              className="rounded-md"
            >
              Save Data
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
}