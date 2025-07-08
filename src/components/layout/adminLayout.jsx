import { Outlet } from "react-router-dom";
import Navbar from "@components/static/admin/navbar";
import { Toaster } from "sonner";

export default function Adminlayout() {
  return (
    <section>
      <Toaster position="top-center" richColors />
      <Navbar />
      <section className="py-10">
        <Outlet />
      </section>
    </section>
  );
}
