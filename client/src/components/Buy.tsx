import { FormEvent } from "react";
import { State } from "../types";
import { ethers } from "ethers";

const Buy = ({ state }: { state: State }) => {
  const buyCoffee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector<HTMLInputElement>("#name")?.value;
    const message = document.querySelector<HTMLInputElement>("#message")?.value;
    const amount = { value: ethers.parseEther("0.01") };
    const transaction = await contract?.buyMeACoffee(name, message, amount);
    await transaction?.wait();
    console.log("transaction mined");
  };
  return (
    <div
      style={{
        borderWidth: "1px",
      }}
      className="p-6 rounded-md border-gray-200 md:w-1/3 h-min pb-10"
    >
      <p className="text-2xl font-bold">Buy Manraj Singh a Coffee ☕</p>
      <form onSubmit={buyCoffee}>
        <input
          style={{
            borderWidth: "1px",
          }}
          className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
          id="name"
          type="text"
          value=""
          placeholder="John Doe"
        />
        <textarea
          style={{
            borderWidth: "1px",
          }}
          className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
          id="message"
          value=""
          placeholder="Say something nice..."
        />
        <button
          type="submit"
          className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded-full"
        >
          Support 0.01 ETH
        </button>
      </form>
    </div>
  );
};

export default Buy;
