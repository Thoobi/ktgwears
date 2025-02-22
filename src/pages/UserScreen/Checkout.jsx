import LoginForm from "../../components/userComponents/LoginForm";
import SignupForm from "../../components/userComponents/SignupForm";
import logo from "../../assets/ktg-logo.svg";
import UseGoogle from "../../components/userComponents/UseGoogle";
import { useEffect } from "react";

export default function Checkout() {
  const user = false;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex flex-col mt-20 px-5 h-full font-clash">
      <span className="flex flex-row justify-between items-center">
        <h1 className="text-7xl">Checkout</h1>
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 opacity-5 max-lg:hidden"
        />
      </span>
      <p className="font-normal text-xl/5 w-[450px] max-lg:w-full max-lg:text-base">
        In order to checkout your order, you must have an account so as to help
        us track and make sure the right order is delivered to you.
      </p>
      <div className="flex flex-row mt-10 py-10 justify-center items-center">
        {user === false ? (
          <section className="flex gap-10 w-full justify-center items-center max-lg:flex-col max-lg:gap-5">
            <LoginForm />
            <SignupForm />
            <UseGoogle />
          </section>
        ) : (
          <span className="flex flex-col">Checkout as guest</span>
        )}
      </div>
    </div>
  );
}
