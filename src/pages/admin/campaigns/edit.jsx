import { Button, Input, Card, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showCampaigns, storeCampaigns } from "../../../_services/campaign";
import ValidationError from "../../../components/Section/ValidationError";
import { getPlants } from "../../../_services/plant";
import "react-datepicker/dist/react-datepicker.css";

export default function EditCampaign() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [errorPlants, setErrorPlants] = useState(null);
  const [plants, setPlants] = useState([]);

  // State variables for each input field
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [plantId, setPlantId] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [targetDonation, setTargetDonation] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    setErrorPlants(null);

    try {
      const dataCampaign = await showCampaigns(id);
      const dataPlants = await getPlants();
      setTitle(dataCampaign.title);
      setImage(dataCampaign.image);
      setLocation(dataCampaign.location);
      setPlantId(dataCampaign.plant_id);
      setStartDate(dataCampaign.start_date);
      setEndDate(dataCampaign.end_date);
      setTargetDonation(dataCampaign.target_donation);
      
      setPlants(dataPlants);
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handlePlantIdChange = (e) => {
    setPlantId(e.target.value);
  };

  const handleTargetDonationChange = (e) => {
    setTargetDonation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("location", location);
    formData.append("created_by_user_id", 1);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("plant_id", plantId);
    formData.append("target_donation", targetDonation);

    try {
      await storeCampaigns(formData);
      navigate(-1);
    } catch (err) {
      setErrors(err.response?.data?.data || {});
    } finally {
      setLoading(false);
    }
  };

  console.log(startDate);

  return (
    <section>
      <Card className="px-8 py-8 mt-12 mb-8 mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <Input
                size="lg"
                label="Title"
                name="title"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={title}
                onChange={handleTitleChange}
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
                onChange={handleImageChange}
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
                value={location}
                onChange={handleLocationChange}
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
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                onChange={handleStartDateChange}
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
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                onChange={handleEndDateChange}
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
                label="Plant"
                value={plantId}
                onChange={handlePlantIdChange}
              >
                {plants.map((plant) => (
                  <Option key={plant.id} value="1">
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
                value={targetDonation}
                onChange={handleTargetDonationChange}
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
