import ktgDesktop from "@/assets/ktg-text-logo.png";
import ktgimg from "@/assets/ktg-logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogoClick = () => {
    // Logic to handle logo click, e.g., navigate to home
    window.location.href = "/admin/dshboard";
  };
  return (
    <section>
      <nav
        className={`w-full bg-white/[.99] border-b-[1px] border-b-gray-400 flex flex-col items-start justify-center fixed top-0 z-20 font-clash max-lg:items-center h-14 px-5`}
      >
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
            className={`lg:hidden max-lg:w-[25px]`}
          />
        </Link>
      </nav>
    </section>
  );
}
