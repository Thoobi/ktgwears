import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/layout/userLayout";
import { WelcomeScreen } from "@/pages/userscreen/Welcomescreen";
import { Shop } from "@/pages/userscreen/shop";
import { Stories } from "@/pages/userscreen/stories";
import { Stylechart } from "@/pages/userscreen/stylechart";
import { About } from "@/pages/userscreen/about";
import { CartProvider } from "@/context/CartContext";
import { Refund } from "@/pages/userscreen/refund";
import { Shipping } from "@/pages/userscreen/shipping";
import { Checkout } from "@/pages/userscreen/checkout";
import { Auth } from "@/pages/userscreen/auth";
import { AuthProvider } from "@/context/AuthContext";
import { UserDashboard } from "@/pages/userscreen/protected/userDashboard";
import ProtectedRoutes from "@/routes/protectedRoutes";
import ProductPreview from "@/pages/userscreen/productPreview";
import ForgotPassword from "@/pages/userscreen/forgotPassword";
import Adminlayout from "@components/layout/adminLayout";
import Admindashboard from "@/pages/adminscreen/adminDashboard";
import Adminlogin from "@/pages/adminScreen/adminLogin";
import UserDashboardLayout from "@components/layout/userDashboardLayout";

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
        element: <WelcomeScreen />,
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
        path: "/auth",
        element: <Auth />,
      },
      {
        element: <UserDashboardLayout />,
        children: [
          {
            path: "user",
            element: (
              <ProtectedRoutes>
                <AuthProvider>
                  <UserDashboard />
                </AuthProvider>
              </ProtectedRoutes>
            ),
          },
        ],
      },
    ],
  },
  {
    element: (
      <AuthProvider>
        <Adminlayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Admindashboard />,
      },
      {
        path: "/admin/login",
        element: <Adminlogin />,
      },
    ],
  },
]);
