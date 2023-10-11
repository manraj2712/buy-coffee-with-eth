import { FormEvent } from "react";
import { State } from "../types";
import { ethers } from "ethers";

const Buy = ({ state }: { state: State }) => {
  const buyCoffee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contract } = state;

    const name = document.querySelector<HTMLInputElement>("#name")?.value;
    const message = document.querySelector<HTMLInputElement>("#message")?.value;
    console.log(name, message);
    const amount = { value: ethers.parseEther("0.01") };
    const transaction = await contract?.buyMeACoffee(name, message, amount);
    await transaction?.wait();
    console.log("transaction mined");
  };
  return (
    <div>
      <form onSubmit={buyCoffee}>
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="message" placeholder="message" />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default Buy;
