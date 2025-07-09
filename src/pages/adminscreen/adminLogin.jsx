import LoginForm from "../../components/adminComponents/signinForm";

export default function Adminlogin() {
  return (
    <section>
      <div className="flex flex-col gap-10 mt-10 px-5 w-full font-clash">
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-7xl">Admin Login</h1>
        </div>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
