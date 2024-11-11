import { createConfig, http } from "wagmi";
import { Chain } from "@rainbow-me/rainbowkit";

import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  optimismSepolia,
} from "wagmi/chains";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";

import {
  metaMaskWallet,
  // rainbowWallet,
  // walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { injected } from "wagmi/connectors";
import { uxuyWallet, uxuyWalletConnector } from "./wallets/uxuyWallet";
import WebApp from "@twa-dev/sdk";

const chains: readonly [Chain, ...Chain[]] = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  optimismSepolia,
];

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      // @ts-ignore
      wallets: [
        uxuyWallet,
        ...(!WebApp.initData
          ? [
              metaMaskWallet,
              // rainbowWallet,
              // walletConnectWallet,
            ]
          : []),
      ],
    },
  ],
  {
    appName: "test demo",
    projectId: "YOUR_PROJECT_ID",
  }
);

export const config = createConfig({
  // use rainbowkit wallets
  connectors,

  // only use wagmin connectors
  // connectors:[uxuyWalletConnector, injected()],
  chains: chains,
  // https://wagmi.sh/react/api/transports
  transports: {
    // [mainnet.id]: http("<YOUR_RPC_URL>"),
    // [polygon.id]: http("<YOUR_RPC_URL>"),
    // [optimism.id]: http("<YOUR_RPC_URL>"),
    // [arbitrum.id]: http("<YOUR_RPC_URL>"),
    // [base.id]: http("<YOUR_RPC_URL>"),
    // [optimismSepolia.id]: http(optimismSepolia.rpcUrls.default.http[0]),
  },
});
