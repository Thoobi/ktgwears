import { createContext, useEffect, useState } from "react";
const CartContext = createContext();
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartShipping, setCartShipping] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTotalDiscount, setCartTotalDiscount] = useState(0);
  const [cartTotalTax, setCartTotalTax] = useState(0);
  const [cartTotalShipping, setCartTotalShipping] = useState(0);
  const [cartTotalSubTotal, setCartTotalSubTotal] = useState(0);

  useEffect(() => {
    const localData = sessionStorage.getItem("cartItems");
    setCartLength(localData ? JSON.parse(localData).length : []);
  }, []);

  const addToCart = (value) => {
    setItem(value);
    setCartItems((prevCart) => {
      setLoading(true);
      var updatedCart = [];
      const prevCartItems = Array.isArray(prevCart) ? prevCart : [];
      if (prevCartItems.includes(value)) {
        updatedCart = prevCartItems;
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        updatedCart = [...prevCartItems, value];
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });

    setTimeout(() => {
      setLoading(false);
      if (cartItems.includes(value)) {
        toast.warn("Item already in cart 🥸");
      } else {
        toast.success("Item added to cart 🤩");
      }
    }, 1000);
  };

  const value = {
    addToCart,
    ToastContainer,
    cartLength,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
