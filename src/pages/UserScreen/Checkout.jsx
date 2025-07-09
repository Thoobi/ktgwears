import { useEffect } from "react";
import LoginForm from "@/components/userComponents/LoginForm";
import SignupForm from "@/components/userComponents/SignupForm";
import logo from "@/assets/ktg-logo.svg";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { progressTab, setActiveTab, activeTab, cartItems, cartTotal } =
    useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col py-10 px-5 max-lg:px-3 h-full font-clash  ">
      <span className="flex flex-row justify-between items-center">
        <h1 className="text-7xl max-md:text-4xl">Checkout</h1>
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 opacity-5 max-lg:hidden"
        />
      </span>
      {!isAuthenticated ? (
        <span className="flex flex-col justify-between items-start max-md:gap-3">
          <h2 className="text-3xl font-normal max-md:text-xl">
            Welcome back, kindly login or Signup to checkout your order
          </h2>
          <p>
            In order to checkout your order, you must have an account so as to
            help us track and make sure the right order is delivered to you.
          </p>
        </span>
      ) : (
        <section className="flex flex-row justify-between items-start gap-5 relative max-md:gap-3">
          <span className="flex flex-col justify-between items-start gap-2">
            <h2 className="text-3xl font-normal">
              Welcome, kindly fill in your correct shipping information
            </h2>
            <p className="text-xl font-normal w-[650px]">
              Filling the correct shipping information will help us deliver your
              order to you without any issues. Please make sure to fill in the
              correct information.
            </p>
          </span>
          <div className="flex flex-col absolute gap-5 max-lg:w-full justify-start items-center text-black right-5 max-lg:px-4 py-2 pl-5 h-lg bg-gray-50 pr-10 top-5 rounded-lg">
            <span className="flex self-start items-center gap-2">
              <h3 className="text-3xl font-medium">Orders</h3>
            </span>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 max-lg:gap-2"
                >
                  <div className="flex flex-row gap-5 max-lg:gap-5">
                    <span className="w-20 h-20 border border-gray-300 rounded-md">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <div className="flex flex-col gap-1 max-lg:gap-1 justify-center">
                      <h2 className="text-base font-normal text-gray-800">
                        {item.title}
                      </h2>
                      <div className="flex flex-row items-start gap-2 justify-between max-lg:pr-2">
                        <p className="text-base font-medium text-gray-800">{`₦${item.price.toLocaleString(
                          "en-NG"
                        )}`}</p>
                        <p className="text-base font-medium text-gray-800">
                          {item.size}
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <span>Quantity:</span>
                        <p>{item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center max-lg:w-full h-[60vh] w-full text-gray-800 px-10">
                <h1 className="text-3xl font-medium">Cart is empty</h1>
              </div>
            )}
            <div className="flex self-start justify-between items-center gap-2 w-full border-t border-t-gray-300 py-2 border-dashed">
              <span className="font-medium">Total:</span>
              <span className="font-medium text-base">
                ₦{cartTotal.toLocaleString("en-NG")}
              </span>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                className="bg-black text-white py-2 px-10"
                onClick={() => {
                  navigate("/Shop");
                }}
              >
                Continue to shopping
              </button>
            </div>
          </div>
        </section>
      )}

      <div className="flex flex-row mt-10 py-10 max-lg:py-5 justify-center items-center">
        {!isAuthenticated ? (
          <section className="flex gap-10 w-full justify-center items-center max-lg:flex-col max-md:gap-10">
            <LoginForm />
            <SignupForm />
          </section>
        ) : (
          <section className="flex flex-col gap-10 w-full justify-center items-center max-lg:flex-col max-lg:gap-5">
            <div className="flex flex-row gap-10 w-full justify-start items-center px-20">
              {progressTab.map((tab, id) => (
                <button
                  key={id}
                  className={`text-3xl font-normal flex flex-row  ${
                    activeTab === tab &&
                    "border-b-2 border-b-black text-red-600"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.tag);
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            {
              <section className="flex gap-5 w-full justify-start items-start px-3">
                {progressTab.find((tab) => tab.tag === activeTab)?.content}
              </section>
            }
          </section>
        )}
      </div>
    </div>
  );
}
