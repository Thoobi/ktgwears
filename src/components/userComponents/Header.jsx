import girl from "../../assets/ktggirl2.png";
import girl1 from "../../assets/ktggirl3.png";
import Marquee from "react-fast-marquee";
import curve from "../../assets/curve.svg";

const Header = () => {
  return (
    <header className={`mt-20 h-full w-full`}>
      <div className="flex flex-col relative mt-10">
        <div className="flex flex-row">
          <img src={girl} alt="" className="max-lg:hidden" />
          <img src={girl1} alt="" />
          <img src={girl} alt="" className="-scale-x-[1] max-lg:hidden" />
        </div>
        <div className="mt-10 flex justify-center items-center">
          <button className="text-lg font-medium text-white bg-black h-[50px] w-[200px] rounded-3xl">
            Shop Now
          </button>
        </div>
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
