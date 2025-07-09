import { RouterProvider } from "react-router-dom";
import { mainroute } from "./Routes/Mainroutes";

function App() {
  return <RouterProvider router={mainroute}></RouterProvider>;
}

export default App;
