import LoginForm from "../../components/userComponents/LoginForm";
import SignupForm from "../../components/userComponents/SignupForm";

export default function Checkout() {
  // const { user } = useAuth();
  const user = true;
  return (
    <div className="flex flex-col mt-20 px-5 h-screen font-clash">
      <h1 className="text-7xl">Checkout</h1>
      <p>
        In order to checkout, you must be logged in, Kindly login or sign up
      </p>
      <div className="flex flex-row mt-20 justify-center items-center">
        {user ? (
          <section className="flex gap-10">
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
