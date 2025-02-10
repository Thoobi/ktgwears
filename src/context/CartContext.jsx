import { createContext, useEffect, useState, useCallback } from "react";
const CartContext = createContext();
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

const CartProvider = ({ children }) => {
  const [cartActive, setCartActive] = useState(false);
  const [usdPrice, setUsdPrice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartShipping, setCartShipping] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTotalTax, setCartTotalTax] = useState(0);
  const [cartTotalShipping, setCartTotalShipping] = useState(0);
  const [cartTotalSubTotal, setCartTotalSubTotal] = useState(0);

  useEffect(() => {
    const localData = sessionStorage.getItem("cartItems");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setCartItems(parsedData);
      setUsdPrice(parsedData.usdPrice || []);
      setCartLength(parsedData.length || 0);
    }
  }, []);

  const addToCart = useCallback((value) => {
    setLoading(true);
    setCartItems((prevCart) => {
      const prevCartItems = Array.isArray(prevCart) ? prevCart : [];
      const itemExists = prevCartItems.some((item) => item.id === value.id);

      if (itemExists) {
        toast.warning("Item already in cart 🥸");
        return prevCartItems;
      }
      const updatedCart = [...prevCartItems, { ...value, quantity: 1 }];
      setLoading(false);
      toast.success("Item added to cart 🤩");
      return updatedCart;
    });
  }, []);

  const removeFromCart = useCallback((value) => {
    setCartItems((prevCart) => {
      if (!prevCart || prevCart.length < 1) {
        sessionStorage.removeItem("cartItems");
        toast.error("Cart is empty");
        setCartLength(0);
        return [];
      }

      const updatedCart = prevCart.filter((item) => item.id !== value.id);
      toast.success("Item removed from cart");

      if (updatedCart.length === 0) {
        sessionStorage.removeItem("cartItems");
        setCartLength(0);
      } else {
        setCartLength(updatedCart.length);
      }

      return updatedCart;
    });
  }, []);

  const increaseQuantity = useCallback((value) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === value.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedCart;
    });
  }, []);

  const decreaseQuantity = useCallback((value) => {
    if (value.quantity === 1) {
      toast.error("Quantity cannot be less than 1");
    } else {
      setCartItems((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === value.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        return updatedCart;
      });
    }
  }, []);

  const calculateTotal = useCallback((items, isUSD) => {
    return items.reduce((total, item) => {
      const price = isUSD ? item.usdPrice : item.nairaPrice;
      return total + price * (item.quantity || 1);
    }, 0);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartTotal(calculateTotal(cartItems, usdPrice));
      setCartLength(cartItems.length);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      setCartTotal(0);
      setCartLength(0);
    }
  }, [cartItems, usdPrice, calculateTotal]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setCartTotal(0);
    setCartLength(0);
    sessionStorage.removeItem("cartItems");
  }, []);

  const value = {
    addToCart,
    cartLength,
    setCartActive,
    cartActive,
    cartItems,
    usdPrice,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      <Toaster position="bottom-left" expand={true} richColors={true} />
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
