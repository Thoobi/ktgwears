import { RouterProvider } from "react-router-dom";
import { mainRoute } from "@/routes/mainroutes";

function App() {
  return (
    <>
      <RouterProvider router={mainRoute}></RouterProvider>
    </>
  );
}

export default App;
