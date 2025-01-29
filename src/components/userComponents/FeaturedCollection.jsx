import PropTypes from "prop-types";
import stroke from "../../assets/arrow2.svg";

const FeaturedCollection = ({ featuredItems, value, buttonValue }) => {
  return (
    <section className="w-full mt-20 border-t-[1px] border-t-black py-5 flex items-center justify-center flex-col">
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-between w-[26rem] items-center">
          <h2 className="text-3xl">{value}</h2>
        </div>
        <button
          onClick={buttonValue}
          className="border-[1px] border-black h-[48px] group w-[180px] text-black text-center text-lg px-2 flex items-center justify-center gap-5 rounded-full"
        >
          <span>Shop All</span>
          <span className="group-hover:translate-x-1 duration-300 ease-in ">
            <img
              src={stroke}
              alt="an image of an arrow"
              className="h-full w-full"
            />
          </span>
        </button>
      </div>
      <div className="flex flex-row w-full flex-wrap mt-10 gap-5 px-2s0">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className="w-[300px] border-[1px] border-black p-3 flex flex-col gap-2"
          >
            <div className="border-[1.5px] border-black">
              <img
                src={item.img}
                alt={`Featured product ${index + 1}`}
                className="object-cover"
              />
            </div>
            <div className="w-full flex justify-between">
              <span
                className={`${!item.price && "w-full text-center text-xl"}`}
              >
                {item.title}
              </span>
              <span className="font-medium">
                {item.price ? `$${item.price}` : ``}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

FeaturedCollection.propTypes = {
  featuredItems: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  buttonValue: PropTypes.func,
};

export default FeaturedCollection;
