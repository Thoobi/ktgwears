// import { useAuth } from "../../context/AuthContext";

export default function Checkout() {
  // const { user } = useAuth();
  const user = true;
  return (
    <div className="flex flex-col mt-20 px-5 font-clash">
      <h1 className="text-7xl">Checkout</h1>
      <div className="flex flex-row">
        {user ? (
          <span className="flex flex-col">Checkout as guest</span>
        ) : (
          <span className="flex flex-col">Checkout as guest</span>
        )}
      </div>
    </div>
  );
}
