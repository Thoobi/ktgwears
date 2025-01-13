import { Outlet } from "react-router-dom"
import Navbar from "../Static/User/Navbar"
import Footer from "../Static/User/Footer"

const Layout = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout