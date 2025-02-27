import { Textarea, Button, Input, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showPlants, updatePlants } from "../../../_services/plant";
import ValidationError from "../../../components/Section/ValidationError";

export default function EditPlant() {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    price: "",
    description: "",
    image: null,
    growing_conditions: "",
    benefit: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const data = await showPlants(id);
      setFormData({
        name: data.name,
        species: data.species,
        price: data.price,
        description: data.description,
        growing_conditions: data.growing_conditions,
        benefit: data.benefit,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const validationErrors = {};
    const requiredFields = [
      "name",
      "species",
      "price",
      "description",
      "growing_conditions",
      "benefit",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = [
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`,
        ];
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("species", formData.species);
      payload.append("price", formData.price);
      payload.append("description", formData.description);
      payload.append("growing_conditions", formData.growing_conditions);
      payload.append("benefit", formData.benefit);
      payload.append("_method", "PUT");

      if (formData.image) {
        payload.append("image", formData.image);
      }

      await updatePlants(id, payload);
      navigate("/dashboard/plants");
    } catch (err) {
      setErrors(err.response?.data?.data || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Card className="px-8 py-8 mt-12 mb-8 mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <Input
                size="lg"
                label="Name"
                name="name"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
              />
              {errors.name && <ValidationError message={errors.name[0]} />}
            </div>
            <div className="w-full">
              <Input
                size="lg"
                label="Species"
                name="species"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.species}
                onChange={handleChange}
                error={!!errors.species}
              />
              {errors.species && (
                <ValidationError message={errors.species[0]} />
              )}
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
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
                type="number"
                min={1}
                size="lg"
                label="Price"
                name="price"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
              />
              {errors.price && <ValidationError message={errors.price[0]} />}
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Textarea
                size="lg"
                label="Description"
                name="description"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
              />
              {errors.description && (
                <ValidationError message={errors.description[0]} />
              )}
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Textarea
                size="lg"
                label="Growing Conditions"
                name="growing_conditions"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.growing_conditions}
                onChange={handleChange}
                error={!!errors.growing_conditions}
              />
              {errors.growing_conditions && (
                <ValidationError message={errors.growing_conditions[0]} />
              )}
            </div>
            <div className="w-full">
              <Textarea
                size="lg"
                label="Benefit"
                name="benefit"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.benefit}
                onChange={handleChange}
                error={!!errors.benefit}
              />
              {errors.benefit && (
                <ValidationError message={errors.benefit[0]} />
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
