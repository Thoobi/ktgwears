import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Welcomescreen } from "@/pages/userscreen/Welcomescreen";
import { Shop } from "@/pages/userscreen/shop";
import { Stories } from "@/pages/userscreen/stories";
import { Stylechart } from "@/pages/userscreen/stylechart";
import { About } from "@/pages/userscreen/about";
import { CartProvider } from "@/context/CartContext";
import { Refund } from "@/pages/userscreen/refund";
import { Shipping } from "@/pages/userscreen/shipping";
import { Checkout } from "@/pages/userscreen/checkout";
import ProductPreview from "@/pages/userscreen/productPreview";
import ForgotPassword from "@/pages/userscreen/forgotPassword";
import { Auth } from "@/pages/userscreen/auth";
import { AuthProvider } from "@/context/AuthContext";
import { UserDashboard } from "@/pages/userscreen/protected/userDashboard";
import ProtectedRoutes from "@/routes/protectedRoutes";

export const mainRoute = createBrowserRouter([
  {
    element: (
      <CartProvider>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <Welcomescreen />,
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
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/user",
        element: (
          <ProtectedRoutes>
            <UserDashboard />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);
