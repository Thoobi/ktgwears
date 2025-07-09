import { Outlet } from "react-router-dom";
import Navbar from "../Static/User/navbar";

export default function UserDashboardLayout() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col ">
      <Navbar />
      <Outlet />
    </section>
  );
}
