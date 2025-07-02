import { useFormik } from "formik";
import { Link } from "react-router-dom";
import stroke from "@/assets/arrow.svg";
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
      <Link
        to="/checkout"
        className="flex items-center gap-2 group w-[8%] px-5"
      >
        <span className="h-full">
          <img src={stroke} alt="" className="w-full h-full" />
        </span>
      </Link>
      <div>
        <div className="w-full flex justify-center items-center pt-40">
          <h1 className="text-5xl max-lg:text-3xl text-center text-black font-normal">
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
                className={`border-2 border-gray-500 h-[50px] p-2 text-lg w-[450px] focus:outline-none ${
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
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="bg-black/90 hover:bg-black text-white text-lg h-12 w-[350px]"
                onClick={formik.handleSubmit}
              >
                {" "}
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
