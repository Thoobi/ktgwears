import LoginForm from "../../components/userComponents/LoginForm";
import SignupForm from "../../components/userComponents/SignupForm";
import logo from "../../assets/ktg-logo.svg";
import UseGoogle from "../../components/userComponents/UseGoogle";
import ShippingInfo from "../../components/userComponents/ShippingInfo";
import { useEffect, useState } from "react";

const progressTab = [
  {
    name: "Shipping Info",
    content: <ShippingInfo />,
    active: true,
  },
  {
    name: "Payment",
    active: false,
  },
  {
    name: "Review",
    active: false,
  },
];

export default function Checkout() {
  const [activeTab, setActiveTab] = useState(progressTab[0]);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const handleNext = () => {
    const currentIndex = progressTab.indexOf(activeTab);
    const nextIndex = currentIndex + 1;

    if (nextIndex < progressTab.length) {
      progressTab.forEach((tab, index) => {
        tab.active = index <= nextIndex;
      });
      setActiveTab(progressTab[nextIndex]);
      setCompletedSteps([...completedSteps, nextIndex]);
    }
  };

  const user = false;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex flex-col py-10 px-5 max-lg:px-3 h-full font-clash">
      <span className="flex flex-row justify-between items-center">
        <h1 className="text-7xl">Checkout</h1>
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 opacity-5 max-lg:hidden"
        />
      </span>
      {user === true ? (
        <span className="flex flex-row justify-between items-center">
          <h2 className="text-3xl font-normal ">
            Welcome back, kindly login or Signup to checkout your order
          </h2>
          <p>
            In order to checkout your order, you must have an account so as to
            help us track and make sure the right order is delivered to you.
          </p>
        </span>
      ) : (
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
      )}

      <div className="flex flex-row mt-10 py-10 max-lg:py-5 justify-center items-center">
        {user === true ? (
          <section className="flex gap-10 w-full justify-center items-center max-lg:flex-col max-lg:gap-5">
            <LoginForm />
            <SignupForm />
            <UseGoogle />
          </section>
        ) : (
          <section className="flex flex-col gap-10 w-full justify-center items-center max-lg:flex-col max-lg:gap-5">
            <div className="flex flex-row gap-5 w-full justify-start items-center">
              {progressTab.map((tab, id) => (
                <button
                  key={id}
                  className={`text-2xl font-light flex flex-row  ${
                    completedSteps.includes(id)
                      ? "text-black font-normal"
                      : "text-gray-400"
                  } ${activeTab === tab ? "border-b-2 border-b-black" : ""}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setCompletedSteps([...completedSteps, id]);
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            {
              <section className="flex flex-col gap-5 w-full justify-start items-start px-3">
                {activeTab.content}
                <button
                  className="bg-transparent text-black border-[1px] border-black w-[250px] h-[45px]"
                  onClick={handleNext}
                >
                  <span className="text-xl font-normal">Next</span>
                </button>
              </section>
            }
          </section>
        )}
      </div>
    </div>
  );
}
