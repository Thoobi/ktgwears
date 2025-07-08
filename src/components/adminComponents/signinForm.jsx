import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleAdminLogin } = useAuth();
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordSchema = Yup.string()
    .required("Password is required")
    .min(6, "Password is too short")
    .matches(passwordRegExp, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      excludeEmptyString: true,
    });

  const emailSchema = Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(emailRegExp, {
      message: "Invalid email",
      excludeEmptyString: true,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await handleAdminLogin(values.email, values.password);
      setIsLoading(false);
      resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
      flex flex-col gap-5 border-2 border-gray-700 py-10 max-lg:py-5 w-[450px] max-lg:w-full justify-center items-center max-lg:border-[1px] max-lg:border-black"
    >
      <span className="w-full text-start px-10 flex gap-1 flex-col max-lg:px-3">
        <h1 className="text-4xl font-medium w-full text-start">Login</h1>
        <p className="flex gap-1 flex-col">
          Welcome back! Login to your account to continue shopping with us 🌟
          <Link to={"/forgotpassword"}>
            <span className="text-blue-500 font-medium text-base underline">
              {" "}
              Forgot password?
            </span>
          </Link>
        </p>
      </span>

      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <div className="flex flex-col max-lg:w-full max-lg:px-2">
          <label htmlFor="email" className="text-base font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="on"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            {...formik.getFieldProps("email")}
            className="border-2 border-gray-500 h-[45px] p-2 w-[320px] max-lg:w-full focus:outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col max-lg:w-full max-lg:px-2">
          <label htmlFor="password" className="text-base font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="on"
            value={formik.values.password}
            onChange={formik.handleChange}
            {...formik.getFieldProps("password")}
            className="border-2 border-gray-500 h-[45px] p-2 w-[320px] max-lg:w-full focus:outline-none"
          />

          {formik.errors.password ? (
            <div className="text-red-500 text-xs font-medium before:content-['*'] before:text-red-500">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="bg-black rounded-md hover:bg-black/90 text-white text-lg h-[45px] w-[300px]"
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Login"}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
