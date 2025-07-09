import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import PropTypes from "prop-types";

export default function Sidebar({ navlink, setActiveTab, activeTab }) {
  const { handleLogout, getUser } = useAuth();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUserName(user.user_metadata?.display_name || user.email);
      }
    };
    fetchUser();
  });

  return (
    <section className="relative w-full h-full py-5">
      <div className="w-full space-y-12 font-clash">
        <h2 className="text-4xl max-md:text-xl font-normal text-gray-600">
          Hello,{" "}
          <span className="text-4xl font-medium text-black max-md:text-2xl">
            {userName}
          </span>
        </h2>
        <p></p>
        <div className="flex flex-col space-y-5">
          {navlink.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item.tab)}
              className={`text-2xl max-md:text-base font-medium text-start first:border-t first:border-t-gray-400  border-b border-b-gray-400 py-4 ${
                activeTab === item.tab
                  ? "text-red-600 font-bold"
                  : "text-gray-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="px-8 py-2 max-md:px-4 max-md:py-4 max-md:text-base bg-red-600 text-white text-lg font-medium rounded-full absolute bottom-20 max-md:bottom-28"
      >
        <RiLogoutBoxRLine className="text-lg" />
      </button>
    </section>
  );
}

Sidebar.propTypes = {
  navlink: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};
