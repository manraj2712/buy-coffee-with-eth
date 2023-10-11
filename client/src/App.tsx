import abi from "./contract/Coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { State, WindowWithEthereum } from "./types";

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
      <h1>Get Coffee !</h1>
      <Buy state={state} />
      <Memos state={state} />
    </>
  );
}

export default App;
