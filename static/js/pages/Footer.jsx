import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { StyledText } from "../components/SmallComponents/AppComponents";

export default function Footer() {
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <Box pb={matches ? 5 : 3} position="relative" zIndex={1} id="about">
      <Box borderTop="1px solid #bdbdbca1" />
      <Container maxWidth="lg">
        <Box
          pt={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mt={3}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: matches ? "24px" : "30px",
                color: "#fff",
                fontFamily: "Poppins",
              }}
            >
              RETIK FINANCE
            </Typography>
          </Box>
          <Typography
            mt={2}
            sx={{
              fontWeight: "400",
              fontSize: matches ? "16px" : "18px",
              color: "#A4A4A7",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            2024© Retik LLC | All Rights Reserved
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: matches ? "16px" : "18px",
              color: "#A4A4A7",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            Beachmont, Kingstown, Reg no: 3178 , Saint Vincent and the
            Grenadines,{" "}
            <a
              href="mailto:support@retik.com"
              style={{ textDecoration: "underline", color: "#A4A4A7" }}
            >
              support@retik.com
            </a>
          </Typography>
          <Box display="flex" my={5}>
            {matches ? (
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <a
                    href="https://retik.com/win-333k"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>Win $333K</StyledText>
                  </a>
                </Box>
                <Box display="flex" justifyContent="center" mt={2}>
                  <a
                    href="https://retik.com/whitepaper.pdf"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>Whitepaper</StyledText>
                  </a>
                  <a
                    href="https://retik.com/how-to-buy"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>How To Buy</StyledText>
                  </a>
                  <a
                    href="https://retik.com/contact-us"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>Contact Us</StyledText>
                  </a>
                </Box>
                <Box display="flex" justifyContent="center" mt={2}>
                  <a
                    href="https://retik.com/privacy-policy"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>Privacy Policy</StyledText>
                  </a>
                  <a
                    href="https://retik.com/terms-and-conditions"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText mr={2}>Terms & Conditions</StyledText>
                  </a>
                  <a
                    href="https://retik.com/cookies"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <StyledText>Cookies</StyledText>
                  </a>
                </Box>
              </Box>
            ) : (
              <>
                <a
                  href="https://retik.com/win-333k"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>Win $333K</StyledText>
                </a>
                <a
                  href="https://retik.com/whitepaper.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>Whitepaper</StyledText>
                </a>
                <a
                  href="https://retik.com/how-to-buy"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>How To Buy</StyledText>
                </a>
                <a
                  href="https://retik.com/contact-us"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>Contact Us</StyledText>
                </a>
                <a
                  href="https://retik.com/privacy-policy"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>Privacy Policy</StyledText>
                </a>
                <a
                  href="https://retik.com/terms-and-conditions"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={3}>Terms & Conditions</StyledText>
                </a>
                <a
                  href="https://retik.com/cookies"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText>Cookies</StyledText>
                </a>
              </>
            )}
          </Box>
          <Box display="flex" alignItems="center" pb={3}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: matches ? "16px" : "18px",
                color: "#A4A4A7",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              Disclaimer: Cryptocurrency may be unregulated in your
              jurisdiction. The value of cryptocurrencies may fluctuate. Profits
              may be subject to capital gains or other taxes applicable in your
              jurisdiction
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
