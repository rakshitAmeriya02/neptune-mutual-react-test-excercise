import { InjectedConnector } from "@web3-react/injected-connector";

export const supportedNetworkIds = [97]; //[1, 3, 4, 5, 42, 97]

export const injected = new InjectedConnector({
  supportedChainIds: supportedNetworkIds,
});

export const isValidNetwork = (chainId?: number) =>
  supportedNetworkIds.includes(chainId!);
