import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../Static/User/Navbar";
import Footer from "../Static/User/Footer";
import Cart from "../Cart";
import useUser from "../../hooks/useCart";

const Layout = () => {
  const { cartActive, setCartActive } = useUser();
  const overlayRef = useRef(null);
  const handleClick = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target)) {
      setCartActive(false);
    }
  };
  useEffect(() => {
    if (cartActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartActive]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {cartActive && (
        <>
          <div className="fixed inset-0 bg-black/5 z-40" />
          <div className="fixed top-[3.6rem] right-0 h-screen z-50 shadow-xl">
            <Cart />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
