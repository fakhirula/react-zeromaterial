import { Alert, Button, Card, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storePaymentMethods } from "../../../_services/payment_method";
import ValidationError from "../../../components/Section/ValidationError";

export default function CreatePaymentMethod() {
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", account_number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError(null);
    setLoading(true);

    try {
      await storePaymentMethods(formData);
      navigate(-1);
    } catch (err) {
      if (err.response && err.response?.status === 403) {
        setGeneralError("You are not authorized to perform this action!");
      } else {
        setErrors(err.response.data.errors || {});
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Card className="px-8 py-8 mt-12 mb-8 mx-auto">
        {generalError && (
          <Alert color="red">
            {generalError}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <div className="mb-6 flex flex-col items-end gap-4">
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
                label="Account Number"
                name="account_number"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={formData.account_number}
                onChange={handleChange}
                error={!!errors.account_number}
              />
              {errors.account_number && (
                <ValidationError message={errors.account_number[0]} />
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
