import ReactCurvedText from "react-curved-text";
import stroke from "../../assets/stroke.svg";
import girl from "../../assets/ktggirl2.png";
import girl1 from "../../assets/ktggirl3.png";
import Marquee from "react-fast-marquee";
import FeaturedCollection from "../../components/FeaturedCollection";

const Welcomesreen = () => {
  return (
    <>
      <header className={`px-5 h-full w-full`}>
        <div className="flex flex-col relative mt-10">
          <div className="flex flex-row">
            <img src={girl} alt="" />
            <img src={girl1} alt="" />
            <img src={girl} alt="" className="-scale-x-[1]" />
          </div>
          <div className="mt-10 flex justify-center items-center">
            <button className="text-lg font-medium text-white bg-black h-[50px] w-[200px] rounded-3xl">
              Shop Now
            </button>
          </div>
          <Marquee
            pauseOnHover={true}
            autoFill={true}
            className="w-full hover:cursor-pointer flex overflow-hidden items-center z-10"
          >
            <div className="flex justify-center items-center">
              <h1 className="text-[8rem] font-medium text-center text-black">
                kingtogods
              </h1>
              <span className="text-red-600 text-6xl font-bold bounce self-center">
                •
              </span>
            </div>
            <ReactCurvedText
              width="240"
              height="250"
              cx="100"
              cy="130"
              rx={100}
              ry={100}
              startOffset={50}
              reversed={false}
              text="• kingtogods • kingtogods • kingtogods • kingtogods • kingstogods •"
              textProps={{
                style: { fontSize: 18, fontWeight: 600, fill: "black" },
              }}
              textPathProps={null}
              tspanProps={{ dy: "-12" }}
              ellipseProps={null}
              svgProps={null}
            />
            <div className="flex justify-center items-center">
              <h1 className="text-[8rem] font-medium text-center text-black">
                kingtogods
              </h1>
              <span className="text-red-600 text-6xl font-bold bounce self-center">
                •
              </span>
            </div>
            <ReactCurvedText
              width="240"
              height="250"
              cx="100"
              cy="130"
              rx={100}
              ry={100}
              startOffset={50}
              reversed={false}
              text="• kingtogods • kingtogods • kingtogods • kingtogods • kingstogods •"
              textProps={{
                style: { fontSize: 18, fontWeight: 600, fill: "black" },
              }}
              textPathProps={null}
              tspanProps={{ dy: "-12" }}
              ellipseProps={null}
              svgProps={null}
            />
            <div className="absolute top-24 right-24 -rotate-[90deg] hover:cursor-pointer hover:ease-out hover:-translate-x-4 hover:duration-300 text-white">
              <img className="w-16 h-16" src={stroke} alt="" />
            </div>
          </Marquee>
        </div>
        <FeaturedCollection />
      </header>
    </>
  );
};

export default Welcomesreen;
