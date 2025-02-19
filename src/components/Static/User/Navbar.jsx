import ktgimg from "../../../assets/ktg-logo.svg";
import ktgDesktop from "../../../assets/ktg-text-logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navcomponent } from "../../../lib/navbar";
import { IoAddOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { cartLength, setCartActive } = useCart();
  const length = cartLength | 0;
  const location = useLocation();
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activePath") || "";
  });

  useEffect(() => {
    const handlePopState = () => {
      setActive(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  useEffect(() => {
    if (active === "") {
      localStorage.clear();
    } else {
      localStorage.setItem("activePath", active);
    }
  }, [active]);

  const handleLogoClick = () => {
    setActive("/");
  };

  return (
    <nav className="w-full bg-white/[.99] border-b-[1px] border-b-gray-400 flex items-center px-5 py-3 fixed top-0 z-20 justify-between pt-5 font-clash max-lg:items-center max-lg:h-[60px] max-lg:py-0">
      <Link
        href={"/"}
        onClick={handleLogoClick}
        className="flex gap-2 items-center justify-center"
      >
        <img
          src={ktgDesktop}
          alt="The logo of the brand KTG wears"
          className="max-lg:hidden"
        />
        <img
          src={ktgimg}
          alt="The logo of the brand KTG wears"
          className="lg:hidden max-lg:w-[25px]"
        />
      </Link>

      <div className="flex flex-row gap-8 max-lg:hidden">
        {navcomponent.map((items, index) => (
          <div key={index} className="text-sm text-black font-medium group">
            <NavLink
              to={items.path}
              onClick={() => setActive(items.path)}
              className={`py-[2px] relative overflow-hidden`}
            >
              <div className="font-clash">
                {active === items.path
                  ? `[ ${items.title} ]`
                  : `${items.title}`}
                {active === items.path ? (
                  ""
                ) : (
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full hover:w-full"
                  }`}
                  ></span>
                )}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="text-sm text-black font-medium flex items-center gap-3">
        <div
          className={`py-[2px] cursor-pointer`}
          onClick={() => {
            setCartActive(true);
          }}
        >
          {`CART`} <span className="text-black font-semibold">[{length}]</span>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <div className="flex items-center cursor-pointer justify-center h-full">
            <span>MENU</span>
            <IoAddOutline className="text-black" size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
