import { useEffect, useState } from "react";
import { productCategory } from "@/lib/category";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const { getAllWears, allWearables, totalPages, setPage, page } = useCart();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllWearables = async () => {
      try {
        setIsLoading(true);
        await getAllWears();
      } catch (error) {
        console.error("Error fetching wearables:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllWearables();
  }, []);

  const [active, setActive] = useState("All");

  const handleClick = (value) => {
    setActive(value);
  };

  const handleViewDetails = (item) => {
    console.log("Viewing details for:", item);
    navigate(`/product/${item.id}`);
  };

  return (
    <section className="mt-20 font-clash">
      <div className="mt-16 relative pt-10">
        <span className="absolute top-10 left-[63%] text-sm max-md:left-[77%] max-md:top-[2%] font-medium">
          [{allWearables.length}]
        </span>
        <h2 className="text-center text-7xl max-md:text-4xl font-normal max-md:font-medium px-3">
          All Products
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-3 max-md:gap-2 mt-5 px-5">
          {productCategory.map((item, index) => (
            <button
              onClick={() => {
                handleClick(item.title);
              }}
              key={index}
              className={`cursor-pointer text-base font-normal ${
                active === item.title
                  ? "text-red-600 font-semibold"
                  : "text-black"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center items-center h-full">
          {isLoading && allWearables <= 1 ? (
            <div className="flex justify-center items-center mt-10 h-[400px]">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-5 max-md:gap-3 mt-10 max-md:grid-cols-2">
              {allWearables
                .filter((item) => active === "All" || item.category === active)
                .map((item, index) => (
                  <div
                    key={index}
                    className="w-[300px] max-md:w-[170px] border border-dashed border-gray-200 flex flex-col justify-between items-center p-3 max-md:p-2 bg-transparent gap-3"
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-[300px] w-full max-md:h-[170px] object-contain"
                    />
                    <div className="flex flex-col justify-between w-full max-md:px-2.5 px-3 gap-3">
                      <span className="flex flex-row justify-between items-center w-full max-md:flex-col ">
                        <h3 className="text-base font-normal max-md:text-sm uppercase">
                          {item.name}
                        </h3>
                        <p className="text-base font-medium text-gray-800 max-md:text-sm">{`₦${item.price.toLocaleString(
                          "en-NG"
                        )}`}</p>
                      </span>
                      <button
                        className="border-gray-500 border text-black px-8 py-1.5 hover:bg-black hover:text-white transition-colors duration-300 max-md:text-xs"
                        onClick={handleViewDetails.bind(null, item)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 text-sm rounded border ${
                page === p
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
