import useCart from "../hooks/useCart";
import { IoCloseOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";
const Cart = () => {
  const {
    cartItems,
    setCartActive,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();
  console.log(cartItems);
  console.log(cartTotal);
  const cartItem = cartItems;
  console.log(cartItem);
  return (
    <div className="flex flex-row justify-between bg-white h-full w-[500px] transition-all duration-1000 ease-out">
      <span
        className="px-3 flex flex-col items-center gap-5 justify-start py-5 mt-1 cursor-pointer"
        onClick={() => {
          setCartActive(false);
        }}
      >
        <IoCloseOutline className="text-3xl font-medium" />
        <span className="text-lg rotate-180 [writing-mode:vertical-rl]">
          Close shopping cart
        </span>
      </span>
      <div className="w-[29rem] h-full bg-black/[.90] text-white py-5 overflow-scroll">
        <div className="absolute top-0 mb-10 pr-20 z-20 bg-white text-black w-full h-12 items-center justify-between flex">
          <h1 className="text-xl font-medium">Cart</h1>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Clear cart
          </button>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center text-white py-5 mt-10 mb-24 px-10">
          {cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  <IoCloseOutline className="text-2xl bg-white text-black rounded-full p-1" />
                </button>
                <div className="flex flex-row gap-10">
                  <span className="w-32 border-[1px] border-white rounded-md">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full"
                    />
                  </span>
                  <div className="flex flex-col gap-3 justify-center">
                    <h2>{item.title}</h2>
                    <div className="flex flex-row justify-between">
                      <p>{`$${item.usdPrice}`}</p>
                    </div>
                    <div className="flex flex-row justify-between">
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
            <div className="flex flex-col justify-center items-center gap-4 h-full text-white px-10">
              <h1 className="text-2xl font-medium">Cart is empty</h1>
            </div>
          )}
        </div>
        <div className="absolute bottom-14 pr-20 z-20 bg-white text-black w-full h-20 items-center justify-between flex">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-normal">Cart Total</h1>
            <p className="text-base font-medium">{`$${cartTotal}`}</p>
          </div>
          <button className="bg-black text-white rounded-md p-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
