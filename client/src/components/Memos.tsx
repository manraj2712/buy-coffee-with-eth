import { Memo, State } from "../types";
import { useState, useEffect } from "react";

const Memos = ({ state }: { state: State }) => {
  const [memos, setMemos] = useState<Memo[]>([]);

  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const newMemos = await contract?.getMemos();
      console.log(typeof newMemos[0].timestamp);
      setMemos(newMemos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <div>
      {memos.map((memo, index) => {
        return (
          <>
            <table>
              <tbody>
                <tr>
                  <td>{memo.name}</td>
                  <td>{memo.message}</td>
                  <td>{String(memo.timestamp)}</td>
                  <td>{memo.from}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default Memos;
