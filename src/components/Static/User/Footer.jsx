import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterCard from "@components/userComponents/FooterCard";

const Footer = () => {
  return (
    <footer className="w-full font-clash pt-20">
      <div className="flex flex-col gap-5 max-lg:px-2 ">
        <div className="flex gap-4 w-full items-center justify-between max-lg:flex-col max-lg:items-center max-lg:px-2 max-lg:gap-13">
          <div className="text-[15rem]/[130px] font-medium flex flex-col items-center justify-start px-5 py-2 gap-5 text-black mr-20 max-lg:mr-0 max-lg:w-full max-lg:text-center max-lg:text-[10rem] max-lg:font-semibold">
            <div className="">
              <span>K</span>
              <span>T</span>
              <span>
                G<span className="text-red-600">.</span>
              </span>
            </div>
          </div>
          <div className="flex justify-between w-1/2 px-10 py-5 max-lg:w-full max-lg:px-5 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:py-2">
            <div className="flex justify-between w-1/2 max-lg:w-full max-lg:px-2">
              <FooterCard
                header="Products"
                link1="New Arrivals"
                link2="Joggers"
                link3="T-Shirts"
                link4="Hoodies"
                href1="/shop"
                href2="/shop"
                href3="/shop"
                href4="/shop"
              />
              <FooterCard
                header="Company"
                link1="About Us"
                href1="/About"
                link2="Refund & Return"
                href2="/refund"
                link3="Shipping Policy"
                href3="/shipping"
                link4="Terms of Service"
                href4="/terms"
              />
            </div>
            <div className="flex gap-5 py-10 mt-5 max-lg:mt-0 px-5 max-lg:py-2">
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
      </div>
    </footer>
  );
};

export default Footer;
