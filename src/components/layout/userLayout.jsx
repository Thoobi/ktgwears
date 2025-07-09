import { Outlet } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navbar from "../Static/User/Navbar";
import Footer from "../Static/User/Footer";
// import Cart from "../shared/Cart";
// import { useCart } from "@/hooks/useCart";
import { useLocation } from "react-router-dom";

const Userlayout = () => {
  const location = useLocation();
  // const { cartActive, setCartActive } = useCart();

  // useEffect(() => {
  //   if (cartActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [cartActive]);

  const withNavbar = useMemo(() => {
    const staticPaths = [
      "/",
      "/Shop",
      "/Stories",
      "/Stylefolio",
      "/About",
      "/refund",
      "/shipping",
      "/user",
    ];
    const isProductPath = location.pathname.includes("/product/");
    return [...staticPaths, ...(isProductPath ? [location.pathname] : [])];
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!localStorage.getItem("activePath")) {
      localStorage.setItem("activePath", location.pathname);
    }
  }, [location]);

  return (
    <div>
      {withNavbar.includes(location.pathname) && <Navbar />}
      <Outlet />
      <Footer />
      {/* {cartActive && (
        <>
          <div
            className="fixed inset-0 bg-black/5 z-40 cursor-pointer transition-opacity duration-300 ease-in-out max-lg:hidden"
            onClick={() => setCartActive(false)}
          />
          <div
            className={`fixed top-0 right-0 h-screen z-[80] max-lg:w-full max-lg:h-full shadow-xl transform transition-transform`}
          >
            <Cart />
          </div>
        </>
      )} */}
    </div>
  );
};

export default Userlayout;
