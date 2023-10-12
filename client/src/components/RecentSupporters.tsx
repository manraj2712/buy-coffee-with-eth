import { State } from "../types";
import Memos from "./Memos";

const RecentSupporters = ({ state }: { state: State }) => {
  return (
    <div className="mt-10">
      <p className="font-semibold text-gray-500 text-base">RECENT SUPPORTERS</p>
      <Memos state={state} />
    </div>
  );
};

export default RecentSupporters;
