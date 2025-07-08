import SignupForm from "@components/adminComponents/signupForm";

export default function AdminSignup() {
  return (
    <section>
      <div className="flex flex-col gap-10 mt-10 px-5 w-full font-clash">
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-7xl">Admin Signup</h1>
        </div>
        <div className="flex justify-center">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
