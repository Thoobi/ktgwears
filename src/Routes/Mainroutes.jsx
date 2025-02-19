import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Welcomesreen from "../pages/UserScreen/Welcomescreen";
import Shop from "../pages/UserScreen/Shop";
import Stories from "../pages/UserScreen/Stories";
import Stylechart from "../pages/UserScreen/Stylechart";
import About from "../pages/UserScreen/About";
import { CartProvider } from "../context/CartContext";
import Refund from "../pages/UserScreen/Refund";
import Shipping from "../pages/UserScreen/Shipping";
import Checkout from "../pages/UserScreen/Checkout";
import ProductPreview from "../pages/UserScreen/ProductPreview";
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
      {
        path: "/Refund",
        element: <Refund />,
      },
      {
        path: "/Shipping",
        element: <Shipping />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/product/:id",
        element: <ProductPreview />,
      },
    ],
  },
]);
