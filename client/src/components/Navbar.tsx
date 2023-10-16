import { Disclosure } from "@headlessui/react";
import toast from "react-hot-toast";

import { WindowWithEthereum } from "../types";
import abi from "../contract/Coffee.json";
import { ethers } from "ethers";
import { useContext } from "react";
import StateContext from "../context/StateContext";

const notify = () =>
  toast.success("Successfully connected!", {
    position: "bottom-center",
    duration: 4000,
  });

const connectWallet = async () => {
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const contractABI = abi.abi;

  try {
    const { ethereum } = window as WindowWithEthereum;

    if (ethereum) {
      await ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      new ethers.Contract(contractAddress, contractABI, signer);

      window.location.reload();
    } else {
      toast.error("Please install MetaMask!", {
        position: "bottom-center",
        duration: 4000,
      });
    }
  } catch (error) {
    toast.error("Something went wrong!", {
      position: "bottom-center",
      duration: 4000,
    });
  }
};

export default function Navbar() {
  const state = useContext(StateContext);
  return (
    <Disclosure as="nav" className="">
      
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-8"
                    src="/coffee.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 align-middle">
                {!state.provider && !state.contract && !state.signer && (
                  <button
                    onClick={connectWallet}
                    className="hidden sm:flex bg-yellow-400  text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Connect Wallet
                  </button>
                )}
                {state.provider && state.contract && state.signer && (
                  <button
                    onClick={notify}
                    className="hidden sm:flex bg-yellow-400  text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Wallet Connected
                  </button>
                )}
                {!state.provider && !state.contract && !state.signer && (
                  <button
                    onClick={connectWallet}
                    className="flex sm:hidden bg-yellow-400  text-white font-semibold py-1 px-1 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </button>
                )}
                {state.provider && state.contract && state.signer && (
                  <button
                    onClick={notify}
                    className="flex sm:hidden bg-yellow-400  text-white font-semibold py-1 px-1 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
    </Disclosure>
  );
}
