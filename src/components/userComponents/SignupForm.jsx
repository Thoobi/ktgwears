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
    .required("Required")
    .min(6, "Email is too short")
    .max(40, "Email is too long")
    .matches(emailRegExp, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required");

  const passwordSchema = Yup.string()
    .required("Required")
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
    .required("Required")
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
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      PhoneNumber: phoneSchema,
    }),
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 border-[1px] border-gray-400 p-5 w-[400px] m-auto justify-center items-center"
      >
        <h1 className="text-5xl font-normal">Signup</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              {...formik.getFieldProps("firstName")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.firstName && (
              <div className="text-red-500 font-medium text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              {...formik.getFieldProps("lastName")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.lastName && (
              <div className="text-red-500 font-medium text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={formik.values.PhoneNumber}
              onChange={formik.handleChange}
              {...formik.getFieldProps("PhoneNumber")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.PhoneNumber && (
              <div className="text-red-500 font-medium text-sm">
                {formik.errors.PhoneNumber}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.errors.email && (
              <div className="text-red-500 font-medium text-sm">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              autoComplete="on"
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
              className="border-2 border-gray-500 h-[45px] p-2 w-[320px] focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 font-medium text-xs mt-1">
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
