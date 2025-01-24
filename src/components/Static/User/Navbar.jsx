import ktgimg from "../../../assets/ktg-text-logo.png";
import { Link, NavLink } from "react-router-dom";
import { navcomponent } from "../../../lib/navbar";
import { IoAddOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activePath") || "";
  });

  useEffect(() => {
    if (active === "") {
      localStorage.clear();
    } else {
      localStorage.setItem("activePath", active);
    }
  }, [active]);

  const handleLogoClick = () => {
    setActive("");
  };

  return (
    <nav className="w-full bg-white/[.98] border-b-[1px] border-b-black/[.4] flex items-center px-5 py-3 fixed top-0 z-10 justify-between pt-5">
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
        <Link>CART [ ]</Link>
        <div className="flex gap-1 items-center cursor-pointer">
          <span>MENU</span>
          <IoAddOutline className="text-black" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
