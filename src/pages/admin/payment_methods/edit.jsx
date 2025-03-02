import { Alert, Button, Card, Input } from "@material-tailwind/react";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  showPaymentMethods,
  updatePaymentMethods,
} from "../../../_services/payment_method";
import ValidationError from "../../../components/Section/ValidationError";

export default function EditPaymentMethod() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showPaymentMethods(id);
        setName(data.name);
        setAccountNumber(data.account_number);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError(null);
    setLoading(true);

    try {
      await updatePaymentMethods(id, {
        name,
        account_number: accountNumber,
        _method: "PUT",
      });

      navigate("/dashboard/payment_methods");
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
                label="Account Number"
                variant="outlined"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                value={accountNumber}
                onChange={handleAccountNumberChange}
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
