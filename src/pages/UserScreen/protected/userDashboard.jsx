import { useState } from "react";
import Order from "@/src/components/userComponents/postAuth/order";
import Shipping from "@/src/components/userComponents/postAuth/shippingInfo";
import Sidebar from "@/src/components/userComponents/sidebar";

const sidebarItems = [
  {
    tab: "SHIPPING",
    name: "Shipping info",
    path: "/user",
    component: <Shipping />,
  },
  {
    tab: "ORDERS",
    name: "Orders",
    path: "/user/orders",
    component: <Order />,
  },
];

export function UserDashboard() {
  const [activeTab, setActiveTab] = useState("SHIPPING");
  return (
    <section className="w-full px-4 mt-14 font-clash flex flex-row">
      <section className="border-r border-r-gray-400 w-1/4 h-screen">
        <Sidebar
          navlink={sidebarItems}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </section>
      <section className="flex-1 h-[60vh] px-5">
        <div className="mt-5">
          {sidebarItems.find((item) => item.tab === activeTab)?.component}
        </div>
      </section>
    </section>
  );
}
