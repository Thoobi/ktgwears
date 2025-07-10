import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navcomponent, authcomponent } from "@/lib/navbar";
import { useCart } from "@/hooks/useCart";
import { IoCloseOutline } from "react-icons/io5";
import ktgDesktop from "@/assets/ktg-text-logo.png";
import ktgimg from "@/assets/ktg-logo.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  const { cartLength, setCartActive, setMenuActive, menuActive } = useCart();
  const { isAuthenticated } = useAuth();
  const length = cartLength | 0;
  const location = useLocation();
  const [menuClicked, setMenuClicked] = useState(false);
  const [active, setActive] = useState(() => {
    return location.pathname || "";
  });
  const navItems = authcomponent(isAuthenticated);

  const menuRef = useRef(null);
  const menuItems = useRef(null);
  const menuItems1 = useRef(null);
  const btnRef = useRef(null);

  const handleClose = () => {
    if (!menuRef.current || !menuItems.current || !btnRef) return;

    const items = menuItems.current.querySelectorAll("li");
    const items1 = menuItems1.current.querySelectorAll("li");
    const btn = btnRef.current;
    const tl = gsap.timeline({
      onComplete: () => setMenuActive(false),
    });

    tl.to(btn, {
      opacity: 0,
      y: -20,
      duration: 0.3,
    })
      .to(items1, {
        x: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      })
      .to(items, {
        x: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      })
      .to(menuRef.current, {
        height: 0,
        opacity: 0,
        y: -20,
        duration: 0.75,
      });
  };

  useEffect(() => {
    if (!menuRef.current || !menuItems.current || !btnRef) return;

    const items = menuItems.current.querySelectorAll("li");
    const items1 = menuItems1.current.querySelectorAll("li");
    const btn = btnRef.current;

    if (menuActive) {
      const tl = gsap.timeline();
      tl.fromTo(
        btn,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        }
      ).fromTo(
        menuRef.current,
        { height: 0, opacity: 0, y: -20 },
        {
          height: "90dvh",
          opacity: 1,
          y: 0,
        }
      );
      tl.fromTo(
        items,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "bounce.out",
          stagger: {
            amount: 0.2,
          },
        }
      ).fromTo(
        items1,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "bounce.oJut",
          stagger: {
            amount: 0.2,
          },
        }
      );
    }
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
      className={`w-full bg-white/[.99] border-b-[1px] border-b-gray-400 flex flex-col items-center fixed top-0 z-20 justify-between font-clash max-lg:items-center `}
    >
      <ul className="flex items-center justify-between w-full max-lg:gap-2 py-4 px-5">
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
            className={`lg:hidden max-md:w-7`}
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
              onClick={() => {
                setMenuClicked(true);
                setMenuActive(!menuActive);
              }}
            >
              MENU
            </button>
          </div>
        </div>
      </ul>
      {menuActive && menuClicked && (
        <div
          ref={menuRef}
          className={`w-full bg-transparent border-t-gray-400
          flex flex-col justify-end items-end`}
        >
          <div className="flex items-center justify-between px-5">
            <div className="flex gap-10">
              <ul
                className="flex flex-col items-start justify-center py-2 self-start"
                ref={menuItems1}
              >
                {navcomponent.map((item, index) => (
                  <li key={index} className="py-2 flex gap-5">
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        setActive(item.path);
                        setMenuActive(false);
                      }}
                      className={`text-7xl max-lg:text-3xl text-black font-medium menu ${
                        active === item.path ? "font-medium" : ""
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul
                className="flex flex-col items-start justify-center py-2 self-start"
                ref={menuItems}
              >
                {navItems.map((item, index) => (
                  <li key={index} className="py-2 flex gap-5">
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        if (item.title === "CART") {
                          setCartActive(true);
                        }

                        setActive(item.path);
                        setMenuActive(false);
                      }}
                      className={`text-7xl max-lg:text-3xl text-black font-medium menu ${
                        active === item.path ? "font-medium" : ""
                      }`}
                    >
                      <span className="text-black font-medium">
                        {item.title}
                      </span>

                      {item.title === "CART" && (
                        <span className="text-black font-medium">
                          [{length}]
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            ref={btnRef}
            className="flex items-center flex-row-reverse gap-0.5 self-end py-1.5 px-5 text-white bg-black w-full"
            onClick={handleClose}
          >
            <IoCloseOutline className="text-lg" />
            <span className="text-base font-normal">Close</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
