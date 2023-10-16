import { createContext } from "react";
import { State } from "../types";

const StateContext = createContext<State>({
  contract: null,
  provider: null,
  signer: null,
});

export default StateContext;
