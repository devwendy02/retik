import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    createWeb3Modal,
    defaultWagmiConfig
} from "@web3modal/wagmi/react";
import {
    WagmiConfig
} from "wagmi";
import {
    mainnet,
    sepolia
} from "wagmi/chains";
import {
    ConectivityProvider
} from "./utils";
import {
    BrowserRouter
} from "react-router-dom";

// wallet start

const projectId = "896153c0a2dfa7db197ade9f87743726";
const chains = [mainnet];
// const chains = [sepolia];

const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId
});

createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    themeMode: "dark",
});
// wallet end
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <
    React.StrictMode >
    <
    WagmiConfig config = {
        wagmiConfig
    } >
    <
    ConectivityProvider >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /ConectivityProvider> <
    /WagmiConfig> <
    /React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();