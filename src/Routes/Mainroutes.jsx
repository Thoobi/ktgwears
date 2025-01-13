import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Welcomesreen from "../pages/UserScreen/Welcomescreen";

export const mainRoute = createBrowserRouter(
  [
    {
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Welcomesreen />
        }
      ]
    }
  ]
)