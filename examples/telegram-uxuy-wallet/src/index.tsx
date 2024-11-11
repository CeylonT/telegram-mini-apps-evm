import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "./wagmi";
import { AuthenticationProvider } from "./adapter/authenticationAdapter";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RainbowKitProvider coolMode>
            <App />
          </RainbowKitProvider>
        </AuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
