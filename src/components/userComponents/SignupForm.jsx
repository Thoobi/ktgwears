import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

export default function SignupForm() {
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
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
    onSubmit: (values, initialValues) => {
      toast.success(`Signup successful \n ${JSON.stringify(values)}`);
      formik.resetForm(initialValues);
    },
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
      confirmpassword: confirmpasswordSchema,
    }),
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 border-2 border-gray-600 px-5 py-10 w-[450px] m-auto justify-center items-center"
      >
        <span className="w-full text-start px-10 flex gap-1 flex-col">
          <h1 className="text-4xl font-medium ">Signup</h1>
          <p>
            Create an account with us to enjoy the best shopping experience 💐
          </p>
        </span>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.email && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              autoComplete="on"
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword" className="text-base font-medium">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
              value={formik.values.confirmpassword}
              autoComplete="on"
              onChange={formik.handleChange}
              {...formik.getFieldProps("confirmpassword")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.touched.confirmpassword &&
              formik.errors.confirmpassword && (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {formik.errors.confirmpassword}
                </div>
              )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white text-lg h-[45px] w-[300px] hover:bg-black/90 rounded-md flex gap-2 justify-center items-center"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
