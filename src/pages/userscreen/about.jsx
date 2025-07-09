import Mission from "@/assets/mission1.jpg";
import Vision from "@/assets/mission2.jpg";

export const About = () => {
  return (
    <section className="w-full px-4 py-8 space-y-12 max-md:space-y-8 mt-14 font-clash">
      <div className="w-full flex justify-center items-center  gap-2">
        <h1 className="text-7xl max-lg:text-4xl text-center text-black font-normal max-md:font-semibold">
          THE BRAND
        </h1>
      </div>
      <div className="w-full flex flex-col gap-10">
        <section className="w-full flex flex-col gap-10 max-lg:gap-2">
          <div className="w-full flex items-center flex-row gap-10 max-lg:flex-col max-lg:justify-between max-lg:gap-3">
            <div className="w-[35%] max-lg:w-full">
              <img src={Mission} alt="Mission" className="w-full" />
            </div>
            <div className="w-[65%] max-lg:w-full max-lg:px-5 max-md:gap-5 flex flex-col">
              <h1 className="text-center font-medium text-2xl">THE MISSION</h1>
              <p className="text-gray-800 text-3xl max-md:text-xl leading-normal">
                At our core, Our mission is to establish a clothing line that
                will make available a wide range of clothes for male, female,
                teengagers and kids; A clothing label that will favourable with
                clothing enthusiasts and international clothing brands at a
                global scale.
              </p>
            </div>
          </div>
        </section>
        <span className="w-full border-t-[1px] border-t-gray-400 border-dashed"></span>
        <section className="w-full flex flex-col gap-10 max-lg:gap-2">
          <div className="w-full flex items-center flex-row-reverse gap-10 max-lg:flex-col max-lg:justify-between max-lg:gap-3">
            <div className="w-[35%] max-lg:w-full">
              <img src={Vision} alt="Vision" className="w-full" />
            </div>
            <div className="w-[65%] max-lg:w-full max-lg:px-5 max-md:gap-5 flex flex-col">
              <h1 className="text-center font-medium text-2xl">THE VISION</h1>
              <p className="text-gray-800 text-[32px] max-md:text-xl leading-normal">
                Our vision is to establish a clothing line whose brand will not
                only be a household name in Nigeria but a brand that will be
                reckoned within the international market.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
