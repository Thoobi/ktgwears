import girl from "../../assets/ktggirl2.png";
import girl1 from "../../assets/ktggirl3.png";
import Marquee from "react-fast-marquee";
import curve from "../../assets/curve.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className={`mt-20 h-full w-full`}
      style={{
        backgroundImage: "url('/bg-home1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col relative mt-10">
        <div className="flex flex-row max-md:items-center max-md:justify-center">
          <img src={girl} alt="" className="max-md:hidden" />
          <img src={girl1} alt="" className="max-md:w-60" />
          <img src={girl} alt="" className="-scale-x-[1] max-md:hidden" />
        </div>
        <button
          className="text-lg font-medium text-white bg-black py-3 max-md:py-1.5 max-md:px-4 px-6 rounded-3xl self-center my-8"
          onClick={() => {
            navigate("/Shop");
          }}
        >
          Shop Now
        </button>
        <Marquee
          pauseOnHover={true}
          autoFill={true}
          speed={80}
          className="w-full hover:cursor-pointer flex overflow-hidden items-center z-10 my-5"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-[8rem] font-normal max-lg:text-[5rem] text-center text-black">
              kingtogods
            </h1>
          </div>
          <img src={curve} alt="" className="lg:h-[150px] lg:w-[150px]" />
          <div className="flex justify-center items-center">
            <h1 className="text-[8rem] font-normal text-center max-lg:text-[5rem] text-black">
              kingtogods
            </h1>
          </div>
          <img src={curve} alt="" className="lg:h-[150px] lg:w-[150px]" />
          <div className="flex justify-center items-center">
            <h1 className="text-[8rem] font-normal text-center max-lg:text-[5rem] text-black">
              kingtogods
            </h1>
          </div>
          <img src={curve} alt="" className="lg:h-[150px] lg:w-[150px]" />
        </Marquee>
      </div>
    </header>
  );
};

export default Header;
