import { useContext } from "react";
import Memos from "./Memos";
import StateContext from "../context/StateContext";

const RecentSupporters = () => {
  const state = useContext(StateContext);
  return (
    <div className="mt-10">
      <p className="font-semibold text-gray-500 text-base">RECENT SUPPORTERS</p>
      <Memos state={state} />
    </div>
  );
};

export default RecentSupporters;
