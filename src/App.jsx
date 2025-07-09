import { RouterProvider } from "react-router-dom";
import { mainroute } from "./Routes/Mainroutes";
import { CartProvider } from "@/context/CartContext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={mainroute} />
    </CartProvider>
  );
}

export default App;
