import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastNotify } from "../components/SmallComponents/AppComponents";
import { useState } from "react";

export default function Contract() {
  const matches = useMediaQuery("(max-width:950px)");
  const matches1 = useMediaQuery("(max-width:1488px)");
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />

      <Box py={5} position="relative" zIndex={1} id="contract">
        {/* <Box
          sx={{
            width: "0px",
            height: "0px",
            boxShadow: "0px 250px 250px 240px rgb(125,83,72) ",
            borderRadius: "50%",
            position: "absolute",
            top: matches ? "5%" : "30%",
            left: "10%",
          }}
        /> */}
        <Container maxWidth="xl">
          <Typography
            position="relative"
            zIndex={1}
            mb={2}
            sx={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: matches ? "30px" : "50px",
              lineHeight: "122.2%",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <span
              style={{
                background: "transparent",
                backgroundImage:
                  "linear-gradient(90deg, rgba(253,143,245,1) 10%, rgba(216,189,132,1) 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Token
            </span>{" "}
            Contract
          </Typography>
          <Typography
            position="relative"
            zIndex={1}
            mb={5}
            sx={{
              fontWeight: 400,
              fontFamily: "'Poppins'",
              fontSize: matches ? "16px" : "18px",
              lineHeight: "27px",
              color: "#BDBDCB",
              textAlign: "center",
            }}
          >
            Use the contract information below to add the RETIK token to your
            wallet.
          </Typography>

          <Box
            mt={5}
            mx={!matches && 12}
            sx={{
              border: "1px solid #4B4C59",
              borderRadius: "17px",
              background: "#1C1D23",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Grid container spacing={0} position="relative" zIndex={1}>
              <Grid
                item
                xs={12}
                md={4.5}
                px={2}
                borderRight={!matches && "2px solid #F389C0"}
                borderBottom={matches && "2px solid #F389C0"}
              >
                <Typography
                  mt={matches ? 2 : 7}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches1 ? "22px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "12px" : "16px",
                    color: "#A1A1A4",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {matches
                    ? "0x26EbB8213....e3e367C1d"
                    : "0x26EbB8213fb8D66156F1Af8908d43f7e3e367C1d"}
                  <CopyToClipboard
                    text={"0x26EbB8213fb8D66156F1Af8908d43f7e3e367C1d"}
                    onCopy={() => {
                      setAlertState({
                        open: true,
                        message: `Contract Address Copied.`,
                        severity: "success",
                      });
                    }}
                  >
                    <ContentCopyIcon
                      style={{ marginLeft: "10px", color: "#fff" }}
                    />
                  </CopyToClipboard>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2.5}
                borderRight={!matches && "2px solid #F389C0"}
                borderBottom={matches && "2px solid #F389C0"}
                px={matches && 2}
              >
                <Typography
                  mt={matches ? 2 : 7}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches1 ? "22px" : "30px",
                    color: "#FFFFFF",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  Decimal
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  pl={matches ? 0 : 2}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "14px" : "16px",
                    color: "#A1A1A4",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  18
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2.5}
                borderRight={!matches && "2px solid #F389C0"}
                borderBottom={matches && "2px solid #F389C0"}
                px={matches && 2}
              >
                <Typography
                  mt={matches ? 2 : 7}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches1 ? "22px" : "30px",
                    color: "#FFFFFF",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  Network
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  pl={matches ? 0 : 2}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "14px" : "16px",
                    color: "#A1A1A4",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  Ethereum Chain {!matches && <br />}
                  (ERC20)
                </Typography>
              </Grid>
              <Grid item xs={12} md={2.5} px={matches && 2}>
                <Typography
                  mt={matches ? 2 : 7}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches1 ? "22px" : "30px",
                    color: "#FFFFFF",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  Token Symbol
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  pl={matches ? 0 : 2}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "14px" : "16px",
                    color: "#A1A1A4",
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  RETIK
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Typography
            position="relative"
            zIndex={1}
            my={2}
            sx={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              color: "#F389C0",
              textAlign: "center",
            }}
          >
            Please note that you should not send any tokens to this address, as
            doing so may result in the permanent loss of the tokens.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
