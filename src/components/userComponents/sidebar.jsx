import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
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
        <h2 className="text-4xl font-normal text-gray-600">
          Welcome,{" "}
          <span className="text-4xl font-medium text-black">{userName}</span>
        </h2>
        <p></p>
        <div className="flex flex-col space-y-5">
          {navlink.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item.tab)}
              className={`text-2xl font-normal text-start ${
                activeTab === item.tab
                  ? "text-red-600 font-bold"
                  : "text-gray-500"
              }`}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="px-8 py-2 bg-red-600 text-white text-lg font-medium rounded-full absolute bottom-20">
        Logout
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
