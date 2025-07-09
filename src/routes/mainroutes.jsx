import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/layout/userLayout";
import { WelcomeScreen } from "@/pages/UserScreen/welcomeScreen";
import { Shop } from "@/pages/UserScreen/shop";
import { Stories } from "@/pages/UserScreen/stories";
import { Stylechart } from "@/pages/UserScreen/stylechart";
import { About } from "@/pages/UserScreen/about";
import { Refund } from "@/pages/UserScreen/refund";
import { Shipping } from "@/pages/UserScreen/shipping";
import { Checkout } from "@/pages/UserScreen/checkout";
import { Auth } from "@/pages/UserScreen/auth";
import { AuthProvider } from "@/context/AuthContext";
import { UserDashboard } from "@/pages/UserScreen/protected/userDashboard";
import ProtectedRoutes from "@/routes/protectedRoutes";
import ProductPreview from "@/pages/UserScreen/productPreview";
import ForgotPassword from "@/pages/UserScreen/forgotPassword";
import Adminlayout from "@components/layout/adminLayout";
import Admindashboard from "@/pages/adminscreen/adminDashboard";
import Adminlogin from "@/pages/adminscreen/adminLogin";
import UserDashboardLayout from "@components/layout/UserDashboardLayout";

export const mainroute = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
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
                <UserDashboard />
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
