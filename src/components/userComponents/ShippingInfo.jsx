import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import CountrySelect from "./CountrySelect";

const ShippingInfo = () => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(emailRegExp, "Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    zip: Yup.string().required("Zip code is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        try {
          console.log("Form Values:", values);
          toast.success("Shipping information saved!");
          toast.success(`Shipping information: \n ${JSON.stringify(values)}`);
        } catch (error) {
          toast.error("Something went wrong!");
          console.error("Form error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-2 px-5">
          <div className="flex w-full justify-start items-start">
            <div className="flex flex-col w-full">
              <label className="text-lg">First Name</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={`border-2 border-gray-500 h-[45px] p-2 text-base w-[300px] focus:outline-none ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col ">
              <label className="text-lg">Last Name</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={`border-2 border-gray-500 h-[45px] p-2 text-base w-[300px] focus:outline-none ${
                  errors.lastName && touched.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && touched.lastName ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex gap-5 w-full justify-center items-center">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`border-2 border-gray-500 h-[45px] p-2 text-base w-[300px] focus:outline-none ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label>Phone</label>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                className={`border-2 border-gray-500 h-[45px] p-2 text-base w-[300px] focus:outline-none ${
                  errors.phone && touched.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && touched.phone ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.phone}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label>Address</label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className={`border-2 border-gray-500 h-[45px] p-2 text-lg w-full focus:outline-none ${
                errors.address && touched.address ? "border-red-500" : ""
              }`}
            />
            {errors.address && touched.address ? (
              <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                {errors.address}
              </div>
            ) : null}
          </div>

          <div className="flex gap-5 w-full justify-center items-center">
            <div className="flex flex-col">
              <label>City</label>
              <Field
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className={`border-2 border-gray-500 h-[45px] p-2 text-lg w-[300px] focus:outline-none ${
                  errors.city && touched.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && touched.city ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.city}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label>State</label>
              <Field
                type="text"
                id="state"
                name="state"
                placeholder="State"
                className={`border-2 border-gray-500 h-[45px] p-2 text-lg w-[300px] focus:outline-none ${
                  errors.state && touched.state ? "border-red-500" : ""
                }`}
              />
              {errors.state && touched.state ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.state}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex gap-5 w-full justify-center items-center">
            <div className="flex flex-col">
              <label>Country</label>
              <Field name="country">
                {({ field, form }) => (
                  <CountrySelect
                    field={field}
                    form={form}
                    error={errors.country}
                    touched={touched.country}
                  />
                )}
              </Field>
              {errors.country && touched.country ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.country}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label>Zip</label>
              <Field
                type="text"
                id="zip"
                name="zip"
                placeholder="Zip"
                className={`border-2 border-gray-500 h-[45px] p-2 text-lg w-[300px] focus:outline-none ${
                  errors.zip && touched.zip ? "border-red-500" : ""
                }`}
              />
              {errors.zip && touched.zip ? (
                <div className="text-red-500 font-medium text-xs before:content-['*'] before:text-red-500">
                  {errors.zip}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-black text-white w-[250px] h-[45px] mt-5"
              type="submit"
            >
              Save Info
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingInfo;
