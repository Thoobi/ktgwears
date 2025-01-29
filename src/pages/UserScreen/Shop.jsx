import { productCategory } from "../../lib/category";
const Shop = () => {
  return (
    <section className="mt-20">
      <div className="mt-16 relative pt-10">
        <span className="absolute top-10 left-[63%] text-sm">[60]</span>
        <h2 className="text-center text-7xl">All Products</h2>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
          {productCategory.map((item, index) => (
            <button key={index} className="cursor-pointer text-base font-light">
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
