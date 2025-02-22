import LoginForm from "../../components/userComponents/LoginForm";
import SignupForm from "../../components/userComponents/SignupForm";
import logo from "../../assets/ktg-logo.svg";

export default function Checkout() {
  const user = false;
  return (
    <div className="flex flex-col mt-20 px-5 h-screen font-clash">
      <span className="flex flex-row justify-between items-center">
        <h1 className="text-7xl">Checkout</h1>
        <img src={logo} alt="logo" className="w-20 h-20 opacity-5" />
      </span>
      <p className="px-3 font-medium">
        In order to checkout your order, you must have an account so as to help
        us track and make sure the right order is delivered to you.
      </p>
      <div className="flex flex-row mt-10 justify-center items-center">
        {user === false ? (
          <section className="flex gap-10 w-full justify-center items-center">
            <LoginForm />
            <SignupForm />
          </section>
        ) : (
          <span className="flex flex-col">Checkout as guest</span>
        )}
      </div>
    </div>
  );
}
