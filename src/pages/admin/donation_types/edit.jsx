import { Button, Card, Input } from "@material-tailwind/react";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  showDonationTypes,
  updateDonationTypes,
} from "../../../_services/donation_type";
import ValidationError from "../../../components/Section/ValidationError";

export default function EditDonationTypes() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showDonationTypes(id);
        setName(data.name);
        setDescription(data.description);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      await updateDonationTypes(id, {
        name,
        description,
        _method: "PUT",
      });

      navigate("/dashboard/donation_types");
    } catch (err) {
      setErrors(err.response?.data?.data || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Card className="px-8 py-8 mt-12 mb-8 mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <div className="mb-6 flex flex-col items-end gap-4">
            <div className="w-full">
              <Input
                size="lg"
                label="Name"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={name}
                onChange={handleNameChange}
                error={!!errors.name}
              />
              {errors.name && <ValidationError message={errors.name[0]} />}
            </div>
            <div className="w-full">
              <Input
                size="lg"
                label="Description"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={description}
                onChange={handleDescriptionChange}
                error={!!errors.description}
              />
              {errors.description && (
                <ValidationError message={errors.description[0]} />
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
