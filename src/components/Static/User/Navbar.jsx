import ktgimg from "../../../assets/ktg-text-logo.png";
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
    <nav className="w-full bg-white/[.99] border-b-[1px] border-b-black/[.4] flex items-center px-5 py-3 fixed top-0 z-20 justify-between pt-5">
      <Link
        href={"/"}
        onClick={handleLogoClick}
        className="flex gap-2 items-center"
      >
        <img src={ktgimg} alt="The logo of the brand KTG wears" />
      </Link>

      <div className="flex flex-row gap-8">
        {navcomponent.map((items, index) => (
          <div key={index} className="text-sm text-black font-medium group">
            <NavLink
              to={items.path}
              onClick={() => setActive(items.path)}
              className={`py-[2px] relative overflow-hidden`}
            >
              <div className="">
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
            console.log("clicked cart");
          }}
        >{`CART[${length}]`}</div>
        <div className="flex gap-1 items-center cursor-pointer">
          <div className="flex gap-1 items-center cursor-pointer">
            <span>MENU</span>
            <IoAddOutline className="text-black" size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
