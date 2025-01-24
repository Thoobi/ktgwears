import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./Routes/Mainroutes";

function App() {
  return (
    <>
      <RouterProvider router={mainRoute}></RouterProvider>
    </>
  );
}

export default App;
