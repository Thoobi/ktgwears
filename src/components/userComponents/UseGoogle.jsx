import { FcGoogle } from "react-icons/fc";

export default function UseGoogle() {
  return (
    <div className="flex flex-col gap-5 border-2 border-gray-600 px-5 py-10 w-[450px] m-auto justify-center items-center">
      <p className="text-3xl font-medium ">Contine with google</p>
      <p className="text-center">
        Not a fan of forms? No worries, you can login with your google account
      </p>
      <button
        type="submit"
        className="bg-black text-white text-lg h-[45px] w-[300px] hover:bg-black/90 rounded-md flex gap-2 justify-center items-center"
      >
        <FcGoogle className="inline-block" />
        Continue with google
      </button>
    </div>
  );
}
