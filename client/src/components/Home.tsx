import Buy from "./Buy";
import Description from "./Description";
import Hero from "./Hero";
import Navbar from "./Navbar";
import RecentSupporters from "./RecentSupporters";
import { State, WindowWithEthereum } from "../types";
import abi from "../contract/Coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import StateContext from "../context/StateContext";

const Home = () => {
  const [state, setState] = useState<State>({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
      const contractABI = abi.abi;

      try {
        const { ethereum } = window as WindowWithEthereum;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          console.log(account);

          ethereum.on("accountsChanged", (accounts: any) => {
            window.location.reload();
            console.log(accounts);
          });

          ethereum.on("chainChanged", (chainId: any) => {
            console.log(chainId === "0xaa36a7" ? "sepolia" : "other");

            if (chainId === "0xaa36a7") {
              window.location.reload();
            }
          });
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
        } else {
          console.log("Please install MetaMask!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);


  return (
    <StateContext.Provider value={state}>
      <Navbar  />
      <div className="mb-10">
        <Hero imageUrl="/banner.png" />
        <div className="max-w-[1800px] mr-auto ml-auto">
          <div className="lg:flex px-5 md:px-20 gap-6 mt-16">
            <div className="lg:w-1/3 mb-5 lg:mb-0">
              <Buy />
            </div>
            <div className="lg:w-2/3 lg:order-first">
              <Description />
              <RecentSupporters />
            </div>
          </div>
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default Home;
