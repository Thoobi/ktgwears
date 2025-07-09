import { RouterProvider } from "react-router-dom";
import { mainroute } from "@/routes/Mainroutes";

function App() {
  return <RouterProvider router={mainroute}></RouterProvider>;
}

export default App;
