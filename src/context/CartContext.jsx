import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import ShippingInfo from "@/components/userComponents/shippingInfo";
import Payment from "@/components/userComponents/stack/Payment";
import { Toaster, toast } from "sonner";

const CartContext = createContext();
const progressTab = [
  {
    tag: "SHIPPING",
    range: 0,
    name: "Shipping Info",
    content: <ShippingInfo />,
  },
  {
    tag: "PAYMENT",
    range: 1,
    name: "Payment",
    content: <Payment />,
  },
  {
    tag: "REVIEW",
    range: 2,
    name: "Review",
    content: <div>Review</div>,
  },
];

const CartProvider = ({ children }) => {
  const size = ["S", "M", "L", "XL"];
  const [cartActive, setCartActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [activeTab, setActiveTab] = useState(progressTab[0].tag);
  const [completedSteps, setCompletedSteps] = useState([0]);
  const [menuActive, setMenuActive] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({});
  const [reviewInfo, setReviewInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState({});

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
        }
        toast.success(`Item added in size ${selectedSize} to cart 🤩`);
        const newItem = { ...value, quantity: 1, size: selectedSize };
        const updatedCart = [...prevCartItems, newItem];
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        setCartLength(updatedCart.length);
        return updatedCart;
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

      if (updatedCart.length === 1) {
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
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
    activeTab,
    progressTab,
    setActiveTab,
    completedSteps,
    setCompletedSteps,
    shippingInfo,
    setShippingInfo,
    paymentInfo,
    setPaymentInfo,
    reviewInfo,
    setReviewInfo,
    orderInfo,
    setOrderInfo,
    setMenuActive,
    menuActive,
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
