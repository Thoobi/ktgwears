import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function LoginForm() {
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

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
    onSubmit: (values, initialValues) => {
      toast.success(`Login successful \n ${JSON.stringify(values)}`);
      setTimeout(() => {
        formik.resetForm(initialValues);
      }, 1000);
    },
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
    }),
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="
      flex flex-col gap-5 border-2 border-gray-600 px-5 py-10 w-[450px] m-auto justify-center items-center"
      >
        <span className="w-full text-start px-10 flex gap-1 flex-col">
          <h1 className="text-4xl font-medium w-full text-start">Login</h1>
          <p className="flex gap-1 flex-col">
            Welcome back! Login to your account to continue shopping with us 🌟
            <Link>
              <span className="text-blue-500 font-medium text-base underline">
                {" "}
                Forgot password?
              </span>
            </Link>
          </p>
        </span>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
              value={formik.values.password}
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />

            {formik.errors.password ? (
              <div className="text-red-500 text-xs font-medium before:content-['*'] before:text-red-500">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <button
            type="submit"
            className="bg-black rounded-md hover:bg-black/90 text-white text-lg h-[45px] w-[300px]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
