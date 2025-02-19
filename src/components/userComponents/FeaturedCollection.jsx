import PropTypes from "prop-types";
import stroke from "../../assets/arrow2.svg";
// import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const FeaturedCollection = ({
  featuredItems,
  value,
  hoverValue,
  buttonContent,
  buttonValue,
}) => {
  const navigate = useNavigate();
  // const { addToCart } = useCart();

  const handleClick = (value) => {
    navigate(`/Shop/${value}`);
  };

  const productClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  // const handleCart = (value) => {
  //   addToCart(value);
  // };

  return (
    <section className="w-full mt-20 border-t-[1px] border-t-black py-2 flex items-center justify-center flex-col">
      <div className="flex justify-between w-full items-center py-5">
        <div className="flex justify-between w-[26rem] items-center">
          <h2 className="text-4xl max-lg:text-3xl font-normal">{value}</h2>
        </div>
        {buttonValue && (
          <button
            onClick={buttonValue}
            className="border-[1px] border-black h-[48px] group w-[180px] text-black text-center text-lg px-2 flex items-center justify-center gap-5 rounded-full"
          >
            <span className="max-lg:text-base max-lg:font-normal">
              {buttonContent}
            </span>
            <span className="group-hover:translate-x-1 duration-300 ease-in max-lg:hidden">
              <img
                src={stroke}
                alt="an image of an arrow"
                className="h-full w-full"
              />
            </span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 max-lg:gap-y-2 mt-10 max-lg:mt-5 max-md:px-5 px-10">
        {featuredItems.map((item, id) => (
          <div
            key={id}
            className="w-[300px] border-[0.8px] border-black p-3 flex flex-col gap-5 max-lg:w-full max-lg:px-5 max-lg:gap-2"
          >
            <div className=" relative group">
              <img
                src={item.img}
                alt={`Featured product ${id + 1}`}
                className="object-cover"
              />
              <div className="hidden absolute max-lg:bottom-0 top-0 left-0 w-full h-full group-hover:flex bg-gray-200 bg-opacity-30 max-lg:bg-opacity-0 max-lg:backdrop-blur-none backdrop-blur-sm items-center justify-center transition-all duration-1000">
                {value === "Featured Category" ? (
                  <button
                    className="border-[1px] border-black h-[48px] max-lg:h-[40px] max-lg:w-[150px] group w-[200px] text-black text-center text-lg px-2 flex items-center justify-center gap-5 bg-black"
                    onClick={() => handleClick(item.title)}
                  >
                    <span className="text-white">{hoverValue}</span>
                  </button>
                ) : (
                  <button
                    className="border-[1px] border-black h-[48px] max-lg:h-[40px] max-lg:w-[150px] group w-[200px] text-white text-center text-lg px-2 flex items-center justify-center gap-5 bg-black"
                    onClick={() => productClick(item)}
                  >
                    <span className="flex items-center gap-2 text-base font-light max-lg:text-base max-lg:font-normal">
                      {hoverValue}
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="w-full flex gap-2 justify-between max-lg:gap-1 items-center">
              <span className={`text-lg max-lg:text-lg max-lg:text-center`}>
                {item.title}
              </span>

              {value === "Featured Collections" && (
                <span className="font-normal max-lg:text-base">
                  {`₦${item.nairaPrice}`}
                </span>
              )}
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
      // price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  buttonValue: PropTypes.func,
  hoverValue: PropTypes.string,
  buttonContent: PropTypes.string,
};

export default FeaturedCollection;
