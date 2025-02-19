import KTGLogo from "../../assets/KTG-Logo.svg";
import Mission from "../../assets/mission1.jpg";
import Vision from "../../assets/mission2.jpg";

const About = () => {
  return (
    <div className="w-full px-4 py-8 space-y-12 mt-14 font-clash">
      <div className="w-full flex justify-center items-center  gap-2">
        {/* <img src={KTGLogo} alt="KTG Logo" className="w-[20px]" /> */}
        <h1 className="text-7xl max-lg:text-5xl text-center text-black font-normal">
          Our Brand
        </h1>
        {/* <img src={KTGLogo} alt="KTG Logo" className="w-[20px]" /> */}
      </div>
      <div className="w-full flex flex-col gap-10">
        <section className="w-full flex flex-col gap-10 max-lg:gap-2">
          <h2 className="text-5xl text-black max-lg:text-3xl max-lg:text-center">
            Our Mission
          </h2>
          <div className="w-full flex items-center flex-row gap-10 max-lg:flex-col max-lg:justify-between max-lg:gap-3">
            <div className="w-[35%] max-lg:w-full">
              <img src={Mission} alt="Mission" className="w-full" />
            </div>
            <div className="w-[65%] max-lg:w-full max-lg:px-5">
              <p className="text-gray-800 text-[32px] max-lg:text-[24px] leading-normal">
                At our core, Our mission is to establish a clothing line that
                will make available a wide range of clothes for male, female,
                teengagers and kids; a clothing label that will favourable with
                clothing enthusiasts and international clothing brands at a
                global scale.
              </p>
            </div>
          </div>
        </section>
        <span className="w-full border-t-[1px] border-t-gray-400 border-dashed"></span>
        <section className="w-full flex flex-col gap-10 max-lg:gap-2">
          <h2 className="text-5xl text-black max-lg:text-3xl max-lg:text-center">
            Our Vision
          </h2>
          <div className="w-full flex items-center flex-row-reverse gap-10 max-lg:flex-col max-lg:justify-between max-lg:gap-3">
            <div className="w-[35%] max-lg:w-full">
              <img src={Vision} alt="Vision" className="w-full" />
            </div>
            <div className="w-[65%] max-lg:w-full max-lg:px-5">
              <p className="text-gray-800 text-[32px] max-lg:text-[24px] leading-normal">
                Our vision is to establish a clothing line whose brand will not
                only be a household name in Nigeria but a brand that will be
                reckoned with in the international market.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
