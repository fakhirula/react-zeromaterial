import { useEffect, useState } from "react";

import { Typography, Input, Button, Checkbox } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { register } from "../../../_services/auth";
import ValidationError from "../../../components/Section/ValidationError";

export default function Register() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      await register(registerData);
      navigate("/login");
    } catch (err) {
      setErrors(err.response?.data?.data || {});
    } finally {
      setLoading(false);
    }
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, [token, navigate]);

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign up
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign up
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-4 max-w-[24rem] text-left"
        >
          <div className="">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Name
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              error={!!errors.name}
            />
            {errors.name && <ValidationError message={errors.name[0]} />}
          </div>
          <div className="">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="john.doe@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              error={!!errors.email}
            />
            {errors.email && <ValidationError message={errors.email[0]} />}
          </div>
          <div className="">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              error={!!errors.password}
            />
            {errors.password && (
              <ValidationError message={errors.password[0]} />
            )}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            loading={loading}
            disabled={loading}
            type="submit"
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign up
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign up with google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <a href="/login" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}
