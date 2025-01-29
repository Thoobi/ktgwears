import Header from "../../components/userComponents/Header";
import FeaturedCollection from "../../components/userComponents/FeaturedCollection";
import featuredCollection from "../../lib/featured";
import { useNavigate } from "react-router-dom";
import { featuredCategory } from "../../lib/featured";

const Welcomesreen = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 px-5 w-full">
      <Header />
      <FeaturedCollection
        featuredItems={featuredCollection}
        value={"Featured Collections"}
        buttonValue={() => {
          navigate("/Shop");
          console.log("Button clicked");
        }}
      />
      <FeaturedCollection
        featuredItems={featuredCategory}
        value={"Featured Category"}
        buttonValue={() => {
          navigate("/Shop");
          console.log("Button clicked");
        }}
      />
    </div>
  );
};

export default Welcomesreen;
