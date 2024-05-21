import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import bg_shop from "../Images/bg_shop.png";
import mobilebgshop from "../Images/mobilebgshop.png";
import tweet from "../Images/tweet.png";
import tele from "../Images/tele.png";
import youtube from "../Images/youtube.png";
import { FaRedditAlien } from "react-icons/fa";
import med from "../Images/med.png";

export default function Roadmap() {
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <Box
      mt={-4}
      pb={matches ? 10 : 20}
      position="relative"
      zIndex={1}
      id="roadmap"
    >
      {/* <Box
        sx={{
          width: "0px",
          height: "0px",
          boxShadow: "0px 250px 250px 240px rgb(93,66,118) ",
          borderRadius: "50%",
          position: "absolute",
          top: "3%",
          right: "10%",
        }}
      /> */}
      {/* <Box
        sx={{
          width: "0px",
          height: "0px",
          boxShadow: "0px 320px 300px 300px rgb(126,107,249, 0.35)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "52%",
          left: "10%",
        }}
      />
      <Typography
        mb={2}
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
        Roadmap
      </Typography>
      <Typography
        mb={5}
        px={matches ? 1 : 0}
        sx={{
          fontWeight: 400,
          fontFamily: "'Poppins'",
          fontSize: "18px",
          lineHeight: "27px",
          color: "#BDBDCB",
          textAlign: "center",
        }}
      >
        Detailed action plan of how we are going to reshape the
        {matches ? "" : <br />}
        future of earntertainment.
      </Typography>
      <FeaturedSlider /> */}

      <Container maxWidth="lg">
        <Box
          position="relative"
          zIndex={1}
          sx={{
            backgroundImage: matches
              ? `url(${mobilebgshop})`
              : `url(${bg_shop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            borderRadius: "10px",
            // backgroundAttachment: "fixed",
            // backgroundPosition: "center center",
            margin: 0,
            py: matches ? 5 : 9,
            px: 5,
            mx: !matches && 13,
          }}
        >
          <Typography
            mt={!matches && 5}
            sx={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: matches ? "20px" : "35px",
              lineHeight: "122.2%",
              color: "#FFFFFF",
            }}
          >
            Join The Retik Family
          </Typography>
          <Typography
            mt={2}
            mb={2}
            sx={{
              fontWeight: 400,
              fontFamily: "'Poppins'",
              fontSize: "15px",
              lineHeight: "27px",
              color: "#FFFFFF",
            }}
          >
            "Stay updated and connected with us{!matches && <br />} by joining
            Retik on our social media platforms!
          </Typography>
          <Box mt={4} pb={matches ? 25 : 2} display="flex" alignItems="center">
            <a
              href="https://twitter.com/retikfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={tweet}
                width="32px"
                style={{ marginRight: "10px" }}
                alt=""
              />
            </a>
            <a
              href="https://t.me/retikfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={tele}
                width="32px"
                style={{ marginRight: "10px" }}
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/@retikfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={youtube}
                width="32px"
                style={{ marginRight: "10px" }}
                alt=""
              />
            </a>
            <a
              href="https://medium.com/@retikfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={med}
                width="32px"
                style={{ marginRight: "10px" }}
                alt=""
              />
            </a>
            <a
              href="https://reddit.com/r/retikfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FaRedditAlien style={{ fontSize: "32px", color: "#B57DFE" }} />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
