import StateContext from "../context/StateContext";
import { Memo } from "../types";
import { useState, useEffect, useContext } from "react";

const Memos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const { contract } = useContext(StateContext);

  useEffect(() => {
    const memosMessage = async () => {
      const newMemos = await contract?.getMemos();
      setMemos(newMemos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <div>
      {memos.length == 0 ? (
        <div
          style={{ borderWidth: "1px" }}
          className="rounded-md border-gray-200 p-4 mt-5"
        >
          <div className="flex">
            <img
              className="object-cover w-10 h-10"
              src="https://cdn.buymeacoffee.com/uploads/profile_pictures/default/FF813F/AF.png@200w_0e.webp"
            ></img>
            <div className="ml-3">
              <p className="align-middle my-auto">
                <span className="font-bold text-black text-sm">
                  Connect Wallet
                </span>
                <span className="font-normal text-gray-700">
                  {", "}
                  Connect to your preferred wallet to see our supporters.
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        memos.map((memo, index) => {
          return (
            <div
              style={{ borderWidth: "1px" }}
              className="rounded-md border-gray-200 p-4 mt-5"
              key={index}
            >
              <div className="flex">
                <img
                  className="object-cover w-10 h-10"
                  src="https://cdn.buymeacoffee.com/uploads/profile_pictures/default/FF813F/AF.png@200w_0e.webp"
                ></img>
                <div className="ml-3">
                  <p className="align-middle my-auto">
                    <span className="font-bold text-black text-sm">
                      {memo.name}
                    </span>
                    <span className="font-normal text-gray-700">
                      {" "}
                      bought a coffee
                    </span>
                  </p>
                  <div
                    style={{
                      borderWidth: "1px",
                    }}
                    className="mt-3 bg-orange-500 rounded-md border-orange-500 bg-opacity-5 p-4 max-w-[70%]"
                  >
                    <p>{memo.message}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Memos;
