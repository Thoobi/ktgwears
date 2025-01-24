import stroke from "../assets/arrow2.svg";
import { useNavigate } from "react-router-dom";
const FeaturedCollection = () => {
  const navigate = useNavigate();
  const handleShopclick = () => {
    navigate("/Shop");
  };
  return (
    <section className="w-full mt-20 border-t-[1px] border-t-black py-2">
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-between w-[26rem] items-center">
          <h2 className="text-4xl">Featured Wears</h2>
        </div>
        <button
          onClick={handleShopclick}
          className="border-[1px] border-black h-[55px] w-[200px] text-black text-center text-lg px-5 flex items-center justify-center gap-4 rounded-full"
        >
          <span>Shop All</span>
          <span className="hover:translate-x-3 duration-300 ease-in ">
            <img
              src={stroke}
              alt="an image of an arrow"
              className="h-full w-full"
            />
          </span>
        </button>
      </div>
      <div>{}</div>
    </section>
  );
};

export default FeaturedCollection;
