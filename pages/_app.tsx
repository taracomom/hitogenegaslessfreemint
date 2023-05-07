import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet()
      ]}
      sdkOptions={{ 
        gasless: {
          openzeppelin: { 
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/054945c0-4288-4751-9041-ce86fdbf5360/runs/webhook/ee26014d-2b60-4b89-9e50-e9448cc13600/7KzCRuf4Rw6yVMsCYSPYjw"
          }
        }
      }}
    >  
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
