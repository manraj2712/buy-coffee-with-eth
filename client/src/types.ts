export type State = {
  provider: any;
  signer: any;
  contract: any;
};

export type WindowWithEthereum = typeof window & {
  ethereum: any;
};

export type Memo = {
    name: string;
    message: string;
    timestamp: bigint;
    from: string;
};