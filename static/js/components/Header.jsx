import React from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "./SmallComponents/Images";

// import { AppContext } from "../utils";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000 !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

const mobileDataarr = [
  // {
  //   name: "About",
  //   // link: "https://retik.com/",
  // },
  {
    name: "Stake",
    link: "https://stake.retik.com",
  },
  {
    name: "Cards",
    link: "https://retikcards.com/",
  },
  {
    name: "Swap",
    link: "https://swap.retik.com/",
  },
  // {
  //   name: "Claim",
  //   link: "http://claim.retik.com/",
  // },
  {
    name: "Dashboard",
    link: "https://retik.com/dashboard",
  },
  {
    name: "Contact Us",
    link: "https://retik.com/contact-us",
  },
];
export default function Header() {
  // const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches = useMediaQuery("(max-width:950px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" alignItems="center" my={5}>
        <a href="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              color: "#fff",
              fontFamily: "Poppins",
            }}
          >
            <span className="logo-animation">RETIK FINANCE</span>
          </Typography>
        </a>
      </Box>
      <List>
        {mobileDataarr.map(({ name, link }, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={index}
          >
            <a smooth href={link} style={{ textDecoration: "none" }}>
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                {name}
              </ListItemText>
            </a>
          </ListItem>
        ))}
      </List>
      <Box mt={3} display="flex" justifyContent="center">
        {/* <ExampleButton /> */}
      </Box>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        height="70px"
        width="100%"
        position="relative"
        zIndex={1}
        py={matches ? 1.5 : 3}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={!matches && 2}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography
                ml={1}
                sx={{
                  fontWeight: "700",
                  fontSize: matches ? "24px" : "27px",
                  color: "#fff",
                  fontFamily: "Poppins",
                }}
              >
                <span className="logo-animation">RETIK FINANCE</span>
              </Typography>
              {/* <img src={logo} width={matches ? "180px" : "220px"} alt="" /> */}
            </a>
            <Box
              display="flex"
              justifyContent={matches ? "end" : "space-between"}
              alignItems="center"
              className="menu-bg"
            >
              <Hidden mdDown>
                <a
                  href="https://stake.retik.com"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className="menu-animation"
                >
                  <StyledText mr={4}>Stake</StyledText>
                </a>
                <a
                  href="https://retikcards.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className="menu-animation"
                >
                  <StyledText mr={4} >Cards</StyledText>
                </a>

                <a
                  href="https://swap.retik.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className="menu-animation"
                >
                  <StyledText mr={4}>Swap</StyledText>
                </a>
                {/* <a
                  href="#claim"
                  style={{ textDecoration: "none" }}
                  className="menu-animation"
                >
                  <StyledText mr={4} style={{MarginRight: "0"}}>Claim</StyledText>
                </a> */}
                <a
                  href="https://retik.com/dashboard/"
                  style={{ textDecoration: "none" }}
                  className="menu-animation"
                >
                  <StyledText mr={4}>Dashboard</StyledText>
                </a>

                <a
                  href="https://retik.com/contact-us"
                  style={{ textDecoration: "none" }}
                  className="menu-animation"
                >
                  <StyledText mr={4}>Contact Us</StyledText>
                </a>
                {/* <ExampleButton /> */}
              </Hidden>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "30px",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
