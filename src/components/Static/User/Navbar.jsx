import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navcomponent, authcomponent } from "@/lib/navbar";
import useCart from "@/hooks/useCart";
import { IoCloseOutline } from "react-icons/io5";
import ktgDesktop from "@/assets/ktg-text-logo.png";
import ktgimg from "@/assets/ktg-logo.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  const { cartLength, setCartActive, setMenuActive, menuActive } = useCart();
  const length = cartLength | 0;
  const location = useLocation();
  const [active, setActive] = useState(() => {
    return location.pathname || "";
  });

  const gsapRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2.5, ease: "power3.inOut" },
    });
    tl.fromTo(".navbar", { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
    return () => {
      tl.kill();
    };
  }, [menuActive]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const handleLogoClick = () => {
    setActive("/");
    setMenuActive(false);
  };

  return (
    <nav
      className={`w-full bg-white/[.99] border-b-[1px] border-b-gray-400 flex flex-col items-center fixed px-5 top-0 z-20 justify-between font-clash max-lg:items-center max-lg:h-[60px] max-lg:py-0 transition transform duration-300 ease-in-out ${
        menuActive ? "h-[50vh] max-lg:py-0" : "max-lg:py-2"
      }`}
    >
      <ul className="flex items-center justify-between w-full max-lg:gap-2 py-4">
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

        <div
          className={`flex flex-row gap-8 max-lg:hidden ${
            menuActive && "hidden"
          }`}
        >
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

        <div
          className={`text-sm text-black font-medium flex items-center gap-3 ${
            menuActive && "hidden"
          }`}
        >
          <div
            className={`py-[2px] cursor-pointer`}
            onClick={() => {
              setCartActive(true);
            }}
          >
            {`CART`}{" "}
            <span className="text-black font-semibold">[{length}]</span>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <button
              className="flex items-center cursor-pointer justify-center h-full"
              onClick={() => setMenuActive(!menuActive)}
            >
              MENU
            </button>
          </div>
        </div>
      </ul>
      {menuActive && (
        <div
          className={`w-full navbar bg-transparent border-t-gray-400 max-lg:hidden
          flex flex-col justify-between`}
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-10">
              <ul className="flex flex-col items-start justify-center py-2 self-start">
                {navcomponent.map((item, index) => (
                  <li key={index} className="py-2 flex gap-5">
                    <NavLink
                      to={item.path}
                      ref={gsapRef}
                      onClick={() => {
                        setActive(item.path);
                        setMenuActive(false);
                      }}
                      className={`text-5xl text-black font-medium transition ${
                        active === item.path ? "font-medium" : ""
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col items-start justify-center py-2 self-start">
                {authcomponent.map((item, index) => (
                  <li key={index} className="py-2 flex gap-5">
                    <NavLink
                      to={item.path}
                      ref={gsapRef}
                      onClick={() => {
                        setActive(item.path);
                        setMenuActive(false);
                      }}
                      className={`text-5xl text-black font-medium transition ${
                        active === item.path ? "font-medium" : ""
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="flex items-center flex-row-reverse gap-0.5 self-end py-2"
              onClick={() => setMenuActive(false)}
            >
              <IoCloseOutline className="text-xl font-normal" />
              <span className="text-lg font-light">Close</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
