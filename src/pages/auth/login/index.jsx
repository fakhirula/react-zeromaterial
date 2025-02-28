import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { login } from "../../../_services/auth";
import ValidationError from "../../../components/Section/ValidationError";
import { decodeToken } from "../../../_formats";

export default function Login() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await login(loginData);
      localStorage.setItem("accessToken", res.token);

      const redirectTo = localStorage.getItem("redirectAfterLogin");
      if (redirectTo) {
        localStorage.removeItem("redirectAfterLogin");
        return navigate(redirectTo);
      }

      const checkRole = decodeToken(res.token);
      if (checkRole.role === "superadmin") {
        return navigate("/dashboard");
      } else {
        return navigate("/");
      }
    } catch (err) {
      setErrors(err.response?.data?.data || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[24rem] text-left"
        >
          <div className="mb-6">
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
              value={loginData.email}
              onChange={handleChange}
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              error={!!errors.email}
            />
            {errors.email && <ValidationError message={errors.email[0]} />}
          </div>
          <div className="mb-6">
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
              value={loginData.password}
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
          <Button
            loading={loading}
            disabled={loading}
            type="submit"
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div>
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
            sign in with google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a href="/register" className="font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}
