import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Welcomesreen from "../pages/UserScreen/Welcomescreen";
import Shop from "../pages/UserScreen/Shop";
import Stories from "../pages/UserScreen/Stories";
import Stylechart from "../pages/UserScreen/Stylechart";
import About from "../pages/UserScreen/About";
import { CartProvider } from "../context/CartContext";

export const mainRoute = createBrowserRouter([
  {
    element: (
      <CartProvider>
        <Layout />
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <Welcomesreen />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
      {
        path: "/stylefolio",
        element: <Stylechart />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);
