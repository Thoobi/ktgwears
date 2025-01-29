// src/components/userComponents/FeaturedCategory.jsx
import featured from "../../lib/featured";

const FeaturedCategory = () => {
  return (
    <section className="w-full grid grid-cols-3 gap-4 mt-10">
      s
      {featured.map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden"
        >
          <img
            src={item.img}
            alt={`Featured product ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </section>
  );
};

export default FeaturedCategory;
