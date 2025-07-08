import PaystackPop from "@paystack/inline-js";
import propTypes from "prop-types";
import { useCart } from "@/hooks/useCart";

export default function Payment() {
  const { cartTotal, shippingInfo, setActiveTab } = useCart();

  async function initializeTransaction() {
    const popup = new PaystackPop();
    popup.newTransaction({
      key: "pk_test_e01a3b6ca7bece393a41a2c054d329fef2c83858",
      email: shippingInfo.email,
      amount: cartTotal * 100,
      onload: (response) => {
        console.log("Transaction initialized:", response);
      },
      onSuccess: (transaction) => {
        console.log("Transaction successful:", transaction);
        setActiveTab("REVIEW");
      },
      onCancel: (transaction) => {
        console.log("Transaction was cancelled", transaction);
      },
    });
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-4xl font-bold mb-4">Payment</h2>
        <button
          onClick={() => {
            initializeTransaction();
            console.log("amount:", cartTotal, "email:", shippingInfo.email);
          }}
          className="px-8 py-2 bg-blue-600 text-white text-lg font-medium rounded-full"
        >
          Pay Now
        </button>
      </div>
    </section>
  );
}

Payment.propTypes = {
  email: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
};
