import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

export default function SignupForm() {
  const phoneRegExp =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

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

  const phoneSchema = Yup.string()
    .matches(phoneRegExp, {
      message: "Invalid phone number",
      excludeEmptyString: true,
    })
    .required("Phone number is required")
    .min(11, "Phone number is not complete");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      PhoneNumber: "",
      email: "",
      password: "",
    },
    onSubmit: (values, initialValues) => {
      toast.success(`Signup successful \n ${JSON.stringify(values)}`);
      formik.resetForm(initialValues);
    },
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
      firstName: Yup.string().required("Firstname is required"),
      lastName: Yup.string().required("Lastname is required"),
      PhoneNumber: phoneSchema,
    }),
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 border-2 border-gray-700 px-5 py-10 w-[500px] m-auto justify-center items-center"
      >
        <h1 className="text-4xl font-semibold ">Signup</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-base font-medium">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              {...formik.getFieldProps("firstName")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.firstName && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-base font-medium">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              {...formik.getFieldProps("lastName")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.lastName && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.lastName}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-base font-medium">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              name="PhoneNumber"
              value={formik.values.PhoneNumber}
              onChange={formik.handleChange}
              {...formik.getFieldProps("PhoneNumber")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.PhoneNumber && (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {formik.errors.PhoneNumber}
              </div>
            )}
          </div>
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
