import { RouterProvider } from "react-router-dom";
import { mainroute } from "./Routes/mainroutes";
import { CartProvider } from "./context/cartcontext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={mainroute} />
    </CartProvider>
  );
}

export default App;
