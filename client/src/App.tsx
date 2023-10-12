import abi from "./contract/Coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { State, WindowWithEthereum } from "./types";
import Hero from "./components/Hero";

function App() {
  const [state, setState] = useState<State>({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x548a7b8dE9133E77B02C7B79c7Db344cCc4F8DaE";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window as WindowWithEthereum;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);
  console.log(state);
  return (
    <>
      <Hero imageUrl="https://cdn.buymeacoffee.com/uploads/cover_images/2021/09/03e03f39271bd786d700028c19b80f69.jpg@1950w_0e.webp" />
      <h1 className="underline">Get Coffee !</h1>
      <p className="underline text-xl first-letter:capitalize">tailwind test</p>
      <Buy state={state} />
      <Memos state={state} />
    </>
  );
}

export default App;
