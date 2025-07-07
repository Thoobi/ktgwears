import { Outlet } from "react-router-dom";
import Navbar from "@components/static/user/Navbar";

export default function UserDashboardLayout() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col ">
      <Navbar />
      <Outlet />
    </section>
  );
}
