import { useCart } from "../../hooks/useCart";
import { useState, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Cart = () => {
  gsap.registerPlugin(useGSAP);
  const cart = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const {
    cartItems,
    setCartActive,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();
  const navigate = useNavigate();
  const cartItem = cartItems;

  useEffect(() => {
    setDisabled(cartItems.length === 0);
  }, [cartItems]);

  return (
    <div
      className={`flex flex-row bg-red-600 h-full w-lg max-lg:w-full max-lg:h-screen font-clash cart`}
      ref={cart}
    >
      <span
        className="flex flex-col items-center px-1 gap-4 justify-start mt-4 cursor-pointer text-white w-[40px]"
        onClick={() => {
          setCartActive(false);
        }}
      >
        <IoCloseOutline className="text-2xl font-medium" />
        <span className="text-base font-light rotate-180 [writing-mode:vertical-rl]">
          Close shopping cart
        </span>
      </span>
      <div className="w-[28.75rem] max-lg:w-full h-full bg-gray-100 text-black py-10 overflow-scroll">
        <div className="absolute top-0 py-3 pr-14 pl-5 z-20 text-black w-full items-center justify-between flex flex-row-reverse bg-white/10 backdrop-blur-sm">
          <h1 className="text-4xl font-normal max-lg:text-3xl">Your Cart</h1>
        </div>
        <div className="flex flex-col gap-10 max-lg:w-full justify-center items-center text-black py-5 mt-10 mb-24 pr-10 max-lg:px-4">
          {cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <div key={index} className="flex items-start gap-3 max-lg:gap-2">
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  <IoCloseOutline className="text-[1.7rem] bg-red-500 text-white rounded-full p-1" />
                </button>
                <div className="flex flex-row gap-10 max-lg:gap-3">
                  <span className="w-32 border-[1px] border-dashed border-black rounded-md">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full"
                    />
                  </span>
                  <div className="flex flex-col gap-3 max-lg:gap-1 justify-center">
                    <h2 className="text-base font-normal text-gray-800">
                      {item.title}
                    </h2>
                    <div className="flex flex-row items-center justify-between max-lg:pr-2">
                      <p className="text-base font-medium text-gray-800">{`₦${item.nairaPrice}`}</p>
                      <p className="text-base font-medium text-gray-800">
                        {item.size}
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <button
                        onClick={() => {
                          decreaseQuantity(item);
                        }}
                        className="bg-white text-black rounded-md p-2"
                      >
                        <HiMiniMinus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => {
                          increaseQuantity(item);
                        }}
                        className="bg-white text-black rounded-md p-2"
                      >
                        <GoPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center max-lg:w-full h-[60vh] w-full text-gray-800 px-10">
              <h1 className="text-3xl font-medium">Cart is empty</h1>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 pl-8 pr-20 max-lg:pl-4 max-lg:pr-14 z-20 text-white bg-black w-full h-32 items-center justify-between flex flex-col py-5">
          <div className="flex gap-2 w-full justify-between items-center">
            <h1 className="text-base font-light">Total</h1>
            <span className="w-[70%] h-[1px] bg-white"></span>
            <p className="text-base font-light">{`₦${cartTotal}`}</p>
          </div>
          <button
            className={`bg-white text-black rounded-full h-12 w-full ${
              disabled ? "opacity-50 cursor-logo" : ""
            }`}
            disabled={cartItem < 1 ? disabled : false}
            onClick={() => {
              navigate("/checkout");
              setCartActive(false);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
