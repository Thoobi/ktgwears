import LoginForm from "@/components/userComponents/LoginForm";
import SignupForm from "@/components/userComponents/SignupForm";
import logo from "@/assets/ktg-logo.svg";

export const Auth = () => {
  return (
    <div>
      <div className="flex flex-col py-10 gap-3 px-5 h-full font-clash max-md:gap-4">
        <span className="flex flex-row justify-between items-center ">
          <h1 className="text-7xl max-md:text-4xl">Create an account</h1>
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 opacity-5 max-lg:hidden"
          />
        </span>
        <div className="max-w-2xl max-md:w-full">
          <span>
            So to help us kep tab of your order, you must create an account so
            as to help us track and make sure the right order is delivered to
            you.
          </span>
        </div>

        <div className="flex flex-row mt-10 max-md:mt-5 py-10 max-lg:py-5 justify-center items-center">
          <section className="flex gap-10 w-full justify-center items-center max-lg:flex-col max-lg:gap-5">
            <LoginForm />
            <SignupForm />
          </section>
        </div>
      </div>
    </div>
  );
};
