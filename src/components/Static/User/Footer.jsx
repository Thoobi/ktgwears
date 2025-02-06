import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterCard from "../../userComponents/FooterCard";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div className="flex items-start w-full px-5 py-5">
        <span className="text-4xl w-full">
          Elevate your unique style and embrace your royalty with KTGwears. Our
          streetwear inspires you to stand out.
        </span>
      </div>
      <div className="flex gap-4 w-full items-center justify-between">
        <div className="text-[12rem]/[130px] font-medium flex flex-col items-center justify-start px-5 py-2 gap-5 text-black mr-20">
          <div className="">
            <span>K</span>
            <span>T</span>
            <span>
              G<span className="text-red-600">.</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between w-1/2 px-10 py-5">
          <FooterCard
            header="Products"
            link1="New Arrivals"
            link2="Joggers"
            link3="T-Shirts"
            link4="Hoodies"
            href="/shop"
          />
          <FooterCard
            header="Company"
            link1="About Us"
            link2="Contact Us"
            link3="Privacy Policy"
            link4="Shipping and Returns"
          />
          <div className="flex gap-5 py-10 mt-5 px-5">
            <div className="flex items-start gap-5">
              <Link className="border-black border-[1px] h-[3rem] w-[3rem] group rounded-3xl hover:bg-red-600 flex justify-center items-center">
                <FaInstagram className="text-2xl text-black group-hover:text-white" />
              </Link>
              <Link className="border-black border-[1px] h-[3rem] w-[3rem] group rounded-3xl hover:bg-red-600  flex justify-center items-center">
                <FaXTwitter className="text-xl text-black hover:text-white group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
