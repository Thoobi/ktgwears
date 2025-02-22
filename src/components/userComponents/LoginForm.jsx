import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  const passwordSchema = Yup.string()
    .required("Required")
    .min(6, "Password is too short")
    .matches(passwordRegExp, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      excludeEmptyString: true,
    });

  const emailSchema = Yup.string()
    .email("Invalid email")
    .required("Required")
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
      flex flex-col gap-5 border-[1px] border-gray-400 p-5 w-[400px] m-auto justify-center items-center"
      >
        <h1 className="text-5xl font-normal ">Login</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
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
              <div className="text-red-500 font-medium text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
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
              <div className="text-red-500 text-xs font-medium mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="bg-black rounded-md hover:bg-black/90 text-white text-lg h-[45px] w-[300px]"
          >
            Login
          </button>
          <span className="flex flex-row justify-center items-center gap-2">
            <hr />
            or
            <hr />
          </span>
          <button
            type="submit"
            className="bg-black text-white text-lg h-[45px] w-[300px] hover:bg-black/90 rounded-md flex gap-2 justify-center items-center"
          >
            <FcGoogle className="inline-block" />
            Continue with google
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
