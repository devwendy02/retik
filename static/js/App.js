import {
    useContext,
    useState,
    useEffect
} from "react";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import {
    useNetwork
} from "wagmi";
import {
    AppContext
} from "./utils";
import NetworkSwitch from "./NetworkSwitch";
import Footer from "./pages/Footer";
import Tokenomics from "./pages/Tokenomics";
import Contract from "./pages/Contract";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import background from "./Images/background.png";
import homebg from "./Images/homebg.png";
import mbhomebg from "./Images/mbhomebg.svg";

import {
    Box,
    useMediaQuery
} from "@mui/material";

function App() {
    const matches = useMediaQuery("(max-width:950px)");
    const matches1 = useMediaQuery("(min-width:1900px)");
    const {
        account
    } = useContext(AppContext);
    const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);
    const {
        chain
    } = useNetwork();

    useEffect(() => {
        if (account && chain && chain ? .id !== 1) {
            setOpenNetworkSwitch(true);
        }
    }, [chain, account]);
    return ( <
        >
        <
        NetworkSwitch open = {
            openNetworkSwitch
        }
        setOpen = {
            setOpenNetworkSwitch
        }
        /> <
        Box position = "relative"
        zIndex = {
            1
        } >
        <
        img src = {
            matches ? mbhomebg : homebg
        }
        width = {
            matches1 ? "60%" : matches ? "240px" : "65.2%"
        }
        style = {
            {
                right: "0%",
                top: "0%",
                position: "absolute",
                zIndex: 0,
            }
        }
        alt = "" /
        >
        <
        Header / >
        <
        HeroSection / >
        <
        /Box> <
        Box sx = {
            {
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // backgroundAttachment: "fixed",
                // backgroundPosition: "100% 100%",
                margin: 0,
                padding: 0,
            }
        } >
        { /* <Video /> */ } <
        Tokenomics / >
        <
        Contract / >
        <
        Roadmap / >
        <
        Team / >
        <
        /Box> <
        Footer / >
        <
        />
    );
}

export default App;