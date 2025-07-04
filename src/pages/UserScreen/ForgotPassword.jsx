import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailSchema = Yup.string()
    .email("Invalid email")
    .min(6, "Email is too short")
    .max(40, "Email is too long")
    .matches(emailRegExp, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      email: emailSchema,
    }),
  });

  return (
    <section className="w-full px-4 my-20 flex flex-col gap-5 font-clash">
      <div className="py-20">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-7xl max-lg:text-4xl text-center text-black font-medium">
            Forgot Password
          </h1>
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <form className="w-full max-w-md flex flex-col gap-10">
            <div className="w-full flex flex-col gap-2">
              <label
                className="text-lg text-center text-gray-600 font-normal"
                htmlFor="email"
              >
                Enter the email address you registered with
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`border-2 border-gray-500 h-[50px] p-2 text-lg w-md max-lg:w-sm focus:outline-none ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email ? (
                <div className="text-red-500 font-medium text-sm before:content-['*'] before:text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <button
                type="submit"
                className="bg-black/90 hover:bg-black text-white text-lg h-12 w-[350px]"
                onClick={formik.handleSubmit}
              >
                {" "}
                Send Reset Link
              </button>
              <span className="text-black">
                Remember your password?{" "}
                <Link to={"/auth"} className="font-medium text-black underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
