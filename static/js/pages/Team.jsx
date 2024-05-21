import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { StyledButton } from "../components/SmallComponents/AppComponents";
import team1 from "../Images/team1.png";
import bg from "../Images/bg.png";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const team = [
  {
    image: team1,
    name: "Jason Samith",
    title: "Softwear Engineer",
    icon: (
      <BsTwitter style={{ fontSize: "28px", padding: "20px", color: "#fff" }} />
    ),
    icon1: (
      <AiFillInstagram
        style={{
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "20px",
          color: "#fff",
        }}
      />
    ),
  },
  {
    image: team1,
    name: "Jason Samith",
    title: "Softwear Engineer",
    icon: (
      <BsTwitter style={{ fontSize: "28px", padding: "20px", color: "#fff" }} />
    ),
    icon1: (
      <AiFillInstagram
        style={{
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "20px",
          color: "#fff",
        }}
      />
    ),
  },
  {
    image: team1,
    name: "Jason Samith",
    title: "Softwear Engineer",
    icon: (
      <BsTwitter style={{ fontSize: "28px", padding: "20px", color: "#fff" }} />
    ),
    icon1: (
      <AiFillInstagram
        style={{
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "20px",
          color: "#fff",
        }}
      />
    ),
  },
  {
    image: team1,
    name: "Jason Samith",
    title: "Softwear Engineer",
    icon: (
      <BsTwitter style={{ fontSize: "28px", padding: "20px", color: "#fff" }} />
    ),
    icon1: (
      <AiFillInstagram
        style={{
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "20px",
          color: "#fff",
        }}
      />
    ),
  },
];
export default function Team() {
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <Box
      pb={5}
      position="relative"
      zIndex={1}
      id="team"
      // mt={10}
      // sx={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%",
      //   backgroundAttachment: "fixed",
      //   // backgroundPosition: "center center",
      //   margin: 0,
      //   padding: 0,
      // }}
    >
      <Container maxWidth="lg">
        {/* <Box display="flex" justifyContent="center">
          <Box
            sx={{
              width: matches ? "80%" : "86%",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              background: "#2A2B30",
              p: matches ? 3 : 6,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: matches ? "25px" : "36px",
                  lineHeight: "122.2%",
                  color: "#FFFFFF",
                }}
              >
                Retik in detail
              </Typography>
              <Typography
                mt={2}
                mb={4}
                sx={{
                  fontWeight: 400,
                  fontFamily: "'Poppins'",
                  fontSize: matches ? "16px" : "18px",
                  lineHeight: "27px",
                  color: "#fff",
                }}
              >
                Below are several significant documents that provide an in-depth
                explanation of the Retik Ecosystem.
              </Typography>
              <Box
                display="flex"
                flexDirection={matches ? "column" : "row"}
                justifyContent={matches ? "center" : "space-between"}
                alignItems="center"
              >
                <Link
                  to="https://retik.com/audit"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    width: matches ? "100%" : "30%",
                  }}
                >
                  <StyledButton
                    width="100%"
                    style={{
                      background:
                        "radial-gradient(145.24% 943.2% at 7.91% 50%, #54BDCB 0%, #3789F9 40%)",
                      color: "#fff",
                    }}
                  >
                    Audit
                  </StyledButton>
                </a>
                <Link
                  to="https://retik.com/kyc"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    width: matches ? "100%" : "30%",
                  }}
                >
                  <StyledButton
                    width="100%"
                    style={{
                      background:
                        "radial-gradient(145.24% 943.2% at 7.91% 50%, #3759FD 0%, #A782FF 40%)",
                      marginTop: matches ? "20px" : "0px",
                      color: "#fff",
                    }}
                  >
                    KYC
                  </StyledButton>
                </a>
                <Link
                  to="https://retik.com/whitepaper.pdf"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    width: matches ? "100%" : "30%",
                  }}
                >
                  <StyledButton
                    width="100%"
                    style={{
                      background:
                        "radial-gradient(145.24% 943.2% at 7.91% 50%, #FF96FA 0%, #FFBBA6 40%)",
                      marginTop: matches ? "20px" : "0px",
                      color: "#fff",
                    }}
                  >
                    Whitepaper
                  </StyledButton>
                </a>
              </Box>
            </Box>
          </Box>
        </Box> */}

        {/* <Typography
          pt={matches ? 46 : 20}
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
          Team & Advisors
        </Typography>
        <Typography
          mt={2}
          mb={5}
          px={matches ? 1 : 0}
          sx={{
            fontWeight: 400,
            fontFamily: "'Poppins'",
            fontSize: "18px",
            lineHeight: "27px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          It's not just about the people behind the project,
          {matches ? "" : <br />}
          it's about the people in front and their experience and knowledge
        </Typography> */}
      </Container>
      {/* <Container maxWidth="xl">
        <Grid container spacing={7} mt={5} pb={matches ? 10 : 30}>
          {team.map(({ title, name, image, icon, icon1 }, i) => {
            return (
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    background: "#1C1D23",
                  }}
                >
                  <img
                    src={image}
                    width={"100%"}
                    style={{
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                    alt=""
                  />
                  <Typography
                    my={2}
                    px={2}
                    sx={{
                      fontFamily: "'Poppins'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "122.2%",
                      color: "#FFFFFF",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    px={2}
                    sx={{
                      fontWeight: 400,
                      fontFamily: "'Poppins'",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#BDBDCB",
                    }}
                  >
                    {title}
                  </Typography>
                  {icon}
                  {icon1}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container> */}
    </Box>
  );
}
