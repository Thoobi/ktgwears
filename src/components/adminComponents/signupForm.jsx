import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const { handleAdminSignup } = useAuth();
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

  const confirmpasswordSchema = Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required");

  const emailSchema = Yup.string()
    .email("Invalid email")
    .min(6, "Email is too short")
    .max(40, "Email is too long")
    .matches(emailRegExp, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required");

  const passwordSchema = Yup.string()
    .required("Password is required")
    .min(6, "Password is too short")
    .matches(passwordRegExp, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      excludeEmptyString: true,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
      confirmpassword: confirmpasswordSchema,
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await handleAdminSignup(values.email, values.password);
      setLoading(false);
      resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 border-2 border-gray-600 py-10 w-[450px] max-lg:w-full justify-center items-center max-lg:py-5 max-lg:border-[1px] max-lg:border-black"
    >
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <div className="flex flex-col max-lg:w-full max-lg:px-2">
          <label htmlFor="signup_email" className="text-base font-medium">
            Email
          </label>
          <input
            type="email"
            autoComplete="on"
            placeholder="Email"
            id="signup_email"
            value={formik.values.email}
            onChange={formik.handleChange}
            {...formik.getFieldProps("email")}
            className="border-2 border-gray-500 h-[45px] p-2 w-[320px] max-lg:w-full focus:outline-none"
          />
          {formik.errors.email && (
            <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col max-lg:w-full max-lg:px-2">
          <label htmlFor="signup_password" className="text-base font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="signup_password"
            value={formik.values.password}
            autoComplete="on"
            onChange={formik.handleChange}
            {...formik.getFieldProps("password")}
            className="border-2 border-gray-500 h-[45px] p-2 w-[320px] max-lg:w-full focus:outline-none"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="flex flex-col max-lg:w-full max-lg:px-2">
          <label htmlFor="confirmpassword" className="text-base font-medium">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            id="confirmpassword"
            value={formik.values.confirmpassword}
            autoComplete="on"
            onChange={formik.handleChange}
            {...formik.getFieldProps("confirmpassword")}
            className="border-2 border-gray-500 h-[45px] p-2 w-[320px] max-lg:w-full focus:outline-none"
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
              {formik.errors.confirmpassword}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="bg-black text-white text-lg h-[45px] w-[300px] hover:bg-black/90 rounded-md flex gap-2 justify-center items-center"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </div>
    </form>
  );
}
