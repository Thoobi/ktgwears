import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { GoChevronDown } from "react-icons/go";
import stroke from "@/assets/arrow.svg";

export default function ProductPreview() {
  const [product, setProduct] = useState({});
  const [showSize, setShowSize] = useState(false);
  const { id } = useParams();
  const {
    addToCart,
    selectedSize,
    setSelectedSize,
    size,
    getAllWears,
    allWearables,
  } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchWearables = async () => {
      try {
        const data = await getAllWears();
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching wearables:", error);
      }
    };
    fetchWearables();
  });

  useEffect(() => {
    if (!id || !allWearables?.length) return;

    const selectedProduct = allWearables.find((product) => product.id === id);

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id, allWearables]);

  const handleSizeClick = () => {
    setShowSize(!showSize);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center mt-24 gap-10 max-lg:flex-col items-center max-lg:px-5 max-lg:mt-30 max-lg:gap-10 font-clash">
      <span className="w-full flex justify-start items-center px-5">
        <Link to="/Shop" className="text-2xl text-black flex gap-4">
          <img src={stroke} alt="" />
        </Link>
      </span>
      <h1 className="text-5xl text-black max-lg:text-2xl">Product Details</h1>
      <div className="w-full flex justify-center items-center gap-10 max-lg:gap-5 max-lg:flex-col">
        <div className="w-[400px] border-[1px] max-lg:w-full flex justify-center items-center border-gray-400">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[400px] max-lg:w-full bg-gray-100 bg-opacity-50 border-[1px] flex flex-col gap-5 max-lg:gap-2 border-gray-400 p-5">
          <h1 className="text-4xl font-medium max-lg:text-2xl max-lg:font-normal uppercase">
            {product.name}
          </h1>
          <p className="text-2xl text-gray-800 max-lg:text-xl max-lg:font-medium">{`₦ ${product?.price?.toLocaleString(
            "en-NG"
          )}`}</p>
          <div className="flex items-start gap-1 flex-col">
            <h3 className="text-lg font-normal text-gray-800">Size</h3>
            <div className="flex items-center gap-2 max-lg:gap-5 w-full">
              <div
                className="border-[1px] border-gray-300 px-4 py-2 rounded-md w-full flex justify-between items-center flex-col gap-3 cursor-pointer"
                onClick={handleSizeClick}>
                <div className="flex justify-between items-center w-full gap-2">
                  <span className="text-base text-gray-800">
                    {selectedSize || "SELECT A SIZE"}
                  </span>
                  <GoChevronDown
                    className={`${showSize ? "rotate-180" : ""}`}
                  />
                </div>
                {showSize && (
                  <div className="flex flex-col gap-2 items-start w-full">
                    {size.map((size) => (
                      <button
                        key={size}
                        className={`border-[1px] px-2 border-gray-300 text-base w-full flex items-center py-2 hover:bg-gray-100 ${
                          selectedSize === size ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}>
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md max-lg:mt-2"
            onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <div className="flex gap-2 items-start justify-between max-lg:mt-2 max-[350px]:flex-col max-[350px]:items-center max-[350px]:w-full">
            <Link to="/checkout">
              <button className="bg-black text-white px-4 py-2 rounded-md max-[350px]:w-full">
                Checkout
              </button>
            </Link>
            <Link to="/shop">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
