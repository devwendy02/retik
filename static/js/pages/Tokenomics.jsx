import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import token from "../Images/token.png";

export default function Tokenomics() {
  const matches = useMediaQuery("(max-width:950px)");
  const matches1 = useMediaQuery("(max-width:1390px)");

  return (
    <>
      <Typography
        mt={15}
        sx={{
          fontFamily: "'Poppins'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: matches ? "30px" : "40px",
          lineHeight: "122.2%",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        What is
        <span
          style={{
            background: "transparent",
            backgroundImage:
              "linear-gradient(90deg, rgba(253,143,245,1) 10%, rgba(216,189,132,1) 60%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}
          Retik?
        </span>
      </Typography>
      <Container maxWidth="lg">
        <Typography
          mt={2}
          px={!matches && 10}
          sx={{
            fontWeight: 400,
            fontFamily: "'Poppins'",
            fontSize: "16px",
            lineHeight: "27px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          RETIK stands as a dynamic DeFi token built upon the Ethereum mainnet,
          adhering to the ERC20 standard. With a total supply of 1 billion
          (1,000,000,000), RETIK powers the Retik Finance ecosystem, driving
          decentralized transactions and fueling the innovative financial
          solutions that define our platform's essence.
        </Typography>
      </Container>
      <Box py={matches ? 5 : 10} position="relative" zIndex={1} id="tokenomics">
        <Container maxWidth="lg">
          <Box position="relative" zIndex={1} px={!matches && 8}>
            <Typography
              mb={matches ? 8 : 18}
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
                {" "}
                Tokenomics
              </span>
            </Typography>
            {/* <Typography
            mb={10}
            sx={{
              fontWeight: 400,
              fontFamily: "'Poppins'",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#BDBDCB",
              textAlign: "center",
            }}
          >
            Retik is a BEP-20 token deployed on BNB Chain mainnet. The total
            supply of $AIRB tokens is 1 billion (1,000,000,000).
          </Typography> */}
            <img src={token} width="100%" alt="" />
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box
            mt={15}
            mx={!matches && 12}
            sx={{
              border: "1px solid #4B4C59",
              borderRadius: "18px",
              background: "#1C1D23",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Grid container spacing={0}>
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
                  pl={matches ? 0 : 3}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches1 ? "22px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  1,000,000,000
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  pl={matches ? 0 : 3}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "14px" : "16px",
                    color: "#A1A1A4",
                    textAlign: "left",
                  }}
                >
                  Total Tokens
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
                  400,000,000
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
                  Presale
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
                  240,000,000
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
                  Ecosystem
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2.5}
                px={matches && 2}
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
                    textAlign: matches ? "left" : "center",
                  }}
                >
                  120,000,000
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
                  Liquidity & Listings
                  {!matches && <br />} Reserves
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
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
                  60,000,000
                </Typography>
                <Typography
                  mb={matches ? 2 : 7}
                  pl={matches ? 0 : 4}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: matches1 ? "14px" : "16px",
                    color: "#A1A1A4",
                    textAlign: "left",
                  }}
                >
                  Team
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
                  60,000,000
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
                  MM, Incentives
                  {!matches && <br />} KOL's
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
                  50,000,000
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
                  Cashback Reserve
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
                  40,000,000
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
                  Marketing, Acquisitions,{!matches && <br />}
                  Partnerships
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
                  30,000,000
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
                  Partners & Advisors
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
