import Header from "../../components/userComponents/Header";
import FeaturedCollection from "../../components/userComponents/FeaturedCollection";
import featuredCollection from "../../lib/featured";
import { useNavigate } from "react-router-dom";
import { featuredCategory } from "../../lib/featured";
import { useEffect } from "react";

const Welcomesreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20 px-5 w-full font-clash">
      <Header />
      <FeaturedCollection
        featuredItems={featuredCollection}
        value="Featured Collections"
        buttonValue={() => {
          navigate("/Shop");
        }}
        buttonContent={"View All"}
        hoverValue={"View Product"}
      />
      <FeaturedCollection
        featuredItems={featuredCategory}
        value="Featured Category"
        buttonValue={() => {
          navigate("/Shop");
        }}
        buttonContent={"Shop All"}
        hoverValue={"View Category"}
      />
    </div>
  );
};

export default Welcomesreen;
