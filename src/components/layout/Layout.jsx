import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Static/User/Navbar";
import Footer from "../Static/User/Footer";
import Cart from "../shared/Cart";
import useUser from "../../hooks/useCart";

const Layout = () => {
  const { cartActive, setCartActive } = useUser();
  useEffect(() => {
    if (cartActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartActive]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {cartActive && (
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
      )}
    </div>
  );
};

export default Layout;
