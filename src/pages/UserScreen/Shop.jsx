import { productCategory } from "../../lib/category";
import { useEffect, useState } from "react";

const Shop = () => {
  const [active, setActive] = useState("All");
  const handleClick = (value) => {
    setActive(value);
  };
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className="mt-20">
      <div className="mt-16 relative pt-10">
        <span className="absolute top-10 left-[63%] text-sm">[60]</span>
        <h2 className="text-center text-7xl">All Products</h2>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
          {productCategory.map((item, index) => (
            <button
              onClick={() => {
                handleClick(item.title);
              }}
              key={index}
              className={`cursor-pointer text-base font-light ${
                active === item.title
                  ? "text-red-600 font-semibold"
                  : "text-black"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
