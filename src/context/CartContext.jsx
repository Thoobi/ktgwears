import { createContext, useEffect, useState, useCallback } from "react";
const CartContext = createContext();
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

const CartProvider = ({ children }) => {
  const size = ["S", "M", "L", "XL"];
  const [cartActive, setCartActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const localData = sessionStorage.getItem("cartItems");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setCartItems(parsedData);
      setCartLength(parsedData.length || 0);
    }
  }, []);

  const addToCart = useCallback(
    (value) => {
      setCartItems((prevCart) => {
        const prevCartItems = Array.isArray(prevCart) ? prevCart : [];

        if (selectedSize === "SELECT A SIZE" || !selectedSize) {
          toast.error("Please select a size first");
          return prevCartItems;
        }

        const existingProductWithSameSize = prevCartItems.find(
          (item) => item.id === value.id && item.size === selectedSize
        );

        if (existingProductWithSameSize) {
          toast.error(
            `This item in size ${selectedSize} is already in your cart!`
          );
          return prevCartItems;
        } else {
          toast.success(`Item added in size ${selectedSize} to cart 🤩`);
          return [
            ...prevCartItems,
            { ...value, quantity: 1, size: selectedSize },
          ];
        }
      });
      setSelectedSize("SELECT A SIZE");
    },
    [selectedSize]
  );

  const removeFromCart = useCallback((value) => {
    setCartItems((prevCart) => {
      if (!prevCart || prevCart.length < 1 || !value.size || !value.id) {
        sessionStorage.removeItem("cartItems");
        toast.error("Cart is empty");
        setCartLength(0);
        return [];
      }

      const updatedCart = prevCart.filter(
        (item) => !(item.id === value.id && item.size === value.size)
      );
      toast.success("Item removed from cart");

      if (updatedCart.length < 1) {
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
        item.id === value.id && item.size === value.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return updatedCart;
    });
  }, []);

  const decreaseQuantity = useCallback((value) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === value.id && item.size === value.size) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      if (filteredCart.length === 0) {
        sessionStorage.removeItem("cartItems");
        toast.success("Cart is empty");
      } else {
        sessionStorage.setItem("cartItems", JSON.stringify(filteredCart));
      }

      return filteredCart;
    });
  }, []);

  const calculateTotal = useCallback((items) => {
    return items.reduce((total, item) => {
      const price = item.nairaPrice;
      return total + price * (item.quantity || 1);
    }, 0);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartTotal(calculateTotal(cartItems));
      setCartLength(cartItems.length);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      setCartTotal(0);
      setCartLength(0);
    }
  }, [cartItems, calculateTotal]);

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
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    selectedSize,
    setSelectedSize,
    size,
  };

  return (
    <CartContext.Provider value={value}>
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            fontSize: "0.9rem",
            fontWeight: "light",
            fontFamily: "ClashGrotesk",
            textAlign: "center",
          },
        }}
        richColors={true}
      />
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
