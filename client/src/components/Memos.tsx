import { Memo, State } from "../types";
import { useState, useEffect } from "react";

const Memos = ({ state }: { state: State }) => {
  const [memos, setMemos] = useState<Memo[]>([]);

  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const newMemos = await contract?.getMemos();
      setMemos(newMemos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <div>
      {memos.map((memo, index) => {
        return (
          <div
            style={{ borderWidth: "1px" }}
            className="rounded-md border-gray-200 p-4 flex mt-5"
            key={index}
          >
            <img
              className="object-cover w-10 h-10"
              src="https://cdn.buymeacoffee.com/uploads/profile_pictures/default/FF813F/AF.png@200w_0e.webp"
            ></img>
            <p className="ml-3 align-middle my-auto">
              <span className="font-bold text-black text-sm">
                {memo.name}
              </span>
              <span className="font-normal text-gray-700">
                {" "}
                bought a coffee
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Memos;