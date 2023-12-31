import { FormEvent, useContext, useState } from "react";
import { WindowWithEthereum } from "../types";
import { ethers } from "ethers";
import SelectCoffeeSize from "./SelectCoffeeSize";
import toast from "react-hot-toast";
import StateContext from "../context/StateContext";

const executeTransaction = async (
  contract: any,
  amount: { value: bigint },
  name: string,
  message: string
) => {
  try {
    const transaction = await contract?.buyMeACoffee(name, message, amount);
    await transaction?.wait();
    return true;
  } catch (error) {
    return false;
  }
};

const Buy = () => {
  const state = useContext(StateContext);
  const { ethereum } = window as WindowWithEthereum;
  const buyCoffee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector<HTMLInputElement>("#name")?.value;
    const message = document.querySelector<HTMLInputElement>("#message")?.value;
    const amount = { value: ethers.parseEther(`${size * 0.001}`) };

    if (ethereum?.chainId !== "0xaa36a7") {
      return toast.error("Please connect to the Sepolia network", {
        position: "bottom-center",
        duration: 4000,
      });
    }

    if (!name || !message)
      return toast.error("Please fill in all the fields", {
        position: "bottom-center",
        duration: 4000,
      });

    toast
      .promise(
        executeTransaction(contract, amount, name!, message!),
        {
          loading: "Transaction under process..",
          success: "Successfully bought a coffee!",
          error: "Error buying a coffee!",
        },
        {
          position: "bottom-center",
        }
      )
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  const [size, setSize] = useState(1);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        borderWidth: "1px",
      }}
      className="p-6 rounded-md border-gray-200 h-min pb-10"
    >
      <p className="text-2xl font-bold">
        Buy <span className="text-gray-500">Manraj Singh</span> a Coffee
      </p>
      <SelectCoffeeSize onSizeChange={setSize} />
      <form onSubmit={buyCoffee}>
        <input
          style={{
            borderWidth: "1px",
          }}
          className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
        <textarea
          style={{
            borderWidth: "1px",
          }}
          className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something nice..."
        />
        <button
          type="submit"
          className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded-full disabled:bg-gray-100 disabled:text-gray-400"
          disabled={
            (!state.contract && !state.signer && !state.provider) ||
            ethereum?.chainId !== "0xaa36a7"
          }
        >
          {`${
            !state.contract && !state.signer && !state.provider
              ? "Connect to MetaMask"
              : ethereum?.chainId !== "0xaa36a7"
              ? "Connect to Sepolia Chain"
              : `Support ${size * 0.001} ETH`
          } `}
        </button>
      </form>
    </div>
  );
};

export default Buy;
