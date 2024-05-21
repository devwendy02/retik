import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  StyledButton,
  ToastNotify,
} from "../components/SmallComponents/AppComponents";
import Loading from "../components/SmallComponents/loading";
import { AppContext } from "../utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { FaRedditAlien } from "react-icons/fa";
import linktree from "../Images/linktree.png";
import tweet from "../Images/tweet.png";
import tele from "../Images/tele.png";
import youtube from "../Images/youtube.png";
import med from "../Images/med.png";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsRocketTakeoff } from "react-icons/bs";
import {
  preSaleReadFunction,
  preSaleWriteFunction,
} from "../ConnectivityAssets/hooks";
import { formatUnits } from "viem";
import { Padding } from "@mui/icons-material";
import rightArrow from "../next.png";
import arrowIcon from "../Images/right-arrow.png";
import { CountdownMonths } from "./CountdownMonths";

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function HeroSection() {
  const matches = useMediaQuery("(max-width:950px)");
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();
  const [loading, setloading] = useState(false);
  const [holidings, setHoldings] = useState(0);
  const [stagePerholidings, setStagePerholidings] = useState([]);
  const [stagePerRemainTokens, setStagePerRemainTokens] = useState([]);
  const [stagePerUnlockTokens, setStagePerUnlockTokens] = useState([]);
  const [stagePerUnlockedTokens, setStagePerUnlockedTokens] = useState([]);
  const [unlockTokens, setUnlockTokens] = useState(0);
  const [totalNextunlockTokens, setTotalNextunlockTokens] = useState(0);
  const [nextUnlockTokens, setNextUnlockTokens] = useState(0);
  // const [remainTokens, setRemainTokens] = useState(0);
  const [callFunction, setCallFunction] = useState(false);
  const [totalRemainTokens, setTotalRemainTokens] = useState(0);
  const [openBox, setOpenBox] = useState(false);
  // const [openCliambox, setOpenCliambox] = useState(false);
  const [remainBox, setRemainBox] = useState(false);
  const [unlockBox, setUnlockBox] = useState(false);
  const [unlockedBox, setUnlockedBox] = useState(false);
  const [nextUnlockTime, setNextUnlockTime] = useState(null);
  const [stages, setStages] = useState([]);
  const [selectStage, setSelectStage] = useState("");

  const handleOpenBoxClose = () => {
    setOpenBox(false);
  };
  const handleOpenBox = () => {
    setOpenBox(true);
  };
  const handleRemainBoxClose = () => {
    setRemainBox(false);
  };
  const handleOpenRemainBox = () => {
    setRemainBox(true);
  };
  const handleUnlockBoxClose = () => {
    setUnlockBox(false);
  };
  const handleOpenUnlockBox = () => {
    setUnlockBox(true);
  };
  const handleUnlockedBoxClose = () => {
    setUnlockedBox(false);
  };
  const handleOpenUnlockedBox = () => {
    setUnlockedBox(true);
  };
  // const handleCloseClaim = () => {
  //   setOpenCliambox(false);
  // };
  // const handleOpenClaim = () => {
  //   setOpenCliambox(true);
  // };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    if (stages.length === 0) {
      return showAlert("User is not a partcipant!");
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Paragraph = styled(Typography)({
    fontWeight: 400,
    fontFamily: "'Poppins'",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#fff",
  });

  const MianHeading = styled(Typography)({
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: matches ? "30px" : "50px",
    lineHeight: "107%",
    color: "#fff",
  });
  useEffect(() => {
    (async () => {
      try {
        if (account) {
          let currentID = await preSaleReadFunction("currentSale");
          let claimableAmount = 0;
          let claimedAmount = 0;
          let presaleStages = [];
          for (let i = 1; i <= +currentID.toString(); i++) {
            let userClaimData = await preSaleReadFunction("userClaimData", [
              account,
              i,
            ]);
            claimableAmount =
              claimableAmount + +formatUnits(userClaimData[2].toString(), 18);
            let UserExistAmount = +formatUnits(userClaimData[2].toString(), 18);
            if (UserExistAmount > 0) {
              presaleStages.push(i.toString());
            }
          }
          // setRemainTokens(claimableAmount);
          setStages(presaleStages);

          ///////////////////////////////////Find unlock tokens///////////////////////////

          const currentUnixTime = Math.floor(Date.now() / 1000);
          // const currentUnixTime = 1708427816;
          console.log(currentUnixTime, "unixTime");
          let vestingDetails = await preSaleReadFunction("vesting", [
            selectStage
              ? selectStage
              : presaleStages.length > 0
                ? presaleStages[0]
                : "0",
          ]);
          let vestingStartTime = vestingDetails[0].toString();
          let initialClaimPercent = vestingDetails[1].toString();
          let vestingTime = vestingDetails[2].toString();
          let totalClaimCycles = vestingDetails[4].toString();
          let vestingPercentage = vestingDetails[3].toString();
          let calculate_vesting =
            vestingStartTime > 0
              ? (currentUnixTime - vestingStartTime) / vestingTime
              : 0;

          console.log(vestingTime, "vestingTime");
          console.log(vestingStartTime, "vestingStartTime");
          console.log(calculate_vesting, "calculate_vesting");
          if (+calculate_vesting > +totalClaimCycles) {
            calculate_vesting = +totalClaimCycles;
          } else {
            calculate_vesting = +calculate_vesting;
          }
          console.log(Math.floor(calculate_vesting), "calculate");
          let userClaimData = await preSaleReadFunction("userClaimData", [
            account,
            selectStage
              ? selectStage
              : presaleStages.length > 0
                ? presaleStages[0]
                : "0",
          ]);

          let activePercentAmount = +formatUnits(
            userClaimData[6].toString(),
            18
          );
          let claimCount = +formatUnits(userClaimData[5].toString(), 18);
          let vestingAmount = 0;
          if (claimCount === 0) {
            vestingAmount =
              (+formatUnits(userClaimData[2].toString(), 18) *
                vestingPercentage) /
              1000;
          } else {
            vestingAmount = activePercentAmount;
          }

          let amountToFind = Math.floor(calculate_vesting) * vestingAmount;
          let claimedVestingAmount = +formatUnits(
            userClaimData[3].toString(),
            18
          );
          let unlockTokensToBe = amountToFind - claimedVestingAmount;
          let IntialClaimAmount = 0;

          if (claimCount === 0) {
            IntialClaimAmount =
              (initialClaimPercent *
                +formatUnits(userClaimData[2].toString(), 18)) /
              1000;
          }
          let resultUnlockTokens = +unlockTokensToBe + +IntialClaimAmount;
          console.log(+resultUnlockTokens, "unlockTokensToBe");
          ///////////////////////////////next Unlock Tokens/////////////////
          let resultAmount = claimableAmount - unlockTokensToBe;
          if (resultAmount >= vestingAmount) {
            setNextUnlockTokens(vestingAmount);
          } else {
            setNextUnlockTokens(resultAmount);
          }
          ////////////////////////////main code//////////////////////////////

          ////////////////////////////next total//////////////////////////////
          let totalNextUnlock = 0;
          let totalUnlockedToken = 0;
          let resultArray = [];
          let resultUnlockedArray = [];
          for (let i = 1; i <= +currentID.toString(); i++) {
            let vestingDetails = await preSaleReadFunction("vesting", [
              i.toString(),
            ]);
            let vestingStartTime = vestingDetails[0].toString();
            let initialClaimPercent = vestingDetails[1].toString();
            let vestingTime = vestingDetails[2].toString();
            let totalClaimCycles = vestingDetails[4].toString();
            let vestingPercentage = vestingDetails[3].toString();
            let calculate_vesting =
              vestingStartTime > 0
                ? (currentUnixTime - vestingStartTime) / vestingTime
                : 0;

            console.log(vestingTime, "vestingTime");
            console.log(vestingStartTime, "vestingStartTime");
            console.log(calculate_vesting, "calculate_vesting");
            if (+calculate_vesting > +totalClaimCycles) {
              calculate_vesting = +totalClaimCycles;
            } else {
              calculate_vesting = +calculate_vesting;
            }
            let userClaimData = await preSaleReadFunction("userClaimData", [
              account,
              i.toString(),
            ]);
            let claimableStage = +formatUnits(userClaimData[2].toString(), 18);
            let activePercentAmount = +formatUnits(
              userClaimData[6].toString(),
              18
            );
            let claimCount = +formatUnits(userClaimData[5].toString(), 18);
            let vestingAmount = 0;
            if (claimCount === 0) {
              vestingAmount = (claimableStage * vestingPercentage) / 1000;
            } else {
              vestingAmount = activePercentAmount;
            }
            let amountToFind = Math.floor(calculate_vesting) * vestingAmount;
            let claimedVestingAmount = +formatUnits(
              userClaimData[3].toString(),
              18
            );
            let unlockTokensToBe = amountToFind - claimedVestingAmount;
            let IntialClaimAmount = 0;

            if (claimCount === 0) {
              IntialClaimAmount = (initialClaimPercent * claimableStage) / 1000;
            }
            let resultUnlockTokens = +unlockTokensToBe + +IntialClaimAmount;
            let totalUnlockedObj = {
              unlockedTokens: +resultUnlockTokens,
              stage: i.toString(),
            };
            resultUnlockedArray.push(totalUnlockedObj);
            totalUnlockedToken = +totalUnlockedToken + +resultUnlockTokens;
            //////////////////////////next tokens/////////////////////////////
            let resultAmount = claimableStage - unlockTokensToBe;
            console.log(unlockTokensToBe, "unlockTokensToBelop");
            console.log(claimableStage, "claimableAmountlop");

            if (resultAmount >= vestingAmount) {
              totalNextUnlock = totalNextUnlock + vestingAmount;
            } else {
              totalNextUnlock = totalNextUnlock + resultAmount;
            }
            let totalnextUnlockObj = {
              nextUnlock:
                resultAmount >= vestingAmount ? +vestingAmount : resultAmount,
              stage: i.toString(),
            };
            resultArray.push(totalnextUnlockObj);
          }
          console.log([...resultUnlockedArray], "resultUnlockedArray");
          setUnlockTokens(+totalUnlockedToken);
          setTotalNextunlockTokens(totalNextUnlock);
          setStagePerUnlockedTokens([...resultUnlockedArray]);
          setStagePerUnlockTokens([...resultArray]);
          ///////////////////////////////next unlock time/////////////////

          let timeValue = (Math.floor(calculate_vesting) + 1) * vestingTime;
          let actualTime = +vestingStartTime + timeValue;
          console.log(timeValue, actualTime, "timeValue");

          const date = new Date(actualTime * 1000);
          console.log(date, "date");
          setNextUnlockTime(date);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    setCallFunction(false);
  }, [account, callFunction, selectStage]);
  useEffect(() => {
    (async () => {
      try {
        if (account) {
          let currentID = await preSaleReadFunction("currentSale");
          let claimableAmount = 0;
          let claimedAmount = 0;
          let totalTokens = 0;
          let arr = [];
          let remainTokensArray = [];
          for (let i = 1; i <= +currentID.toString(); i++) {
            let userClaimData = await preSaleReadFunction("userClaimData", [
              account,
              i,
            ]);
            claimableAmount =
              claimableAmount + +formatUnits(userClaimData[2].toString(), 18);
            claimedAmount =
              claimedAmount + +formatUnits(userClaimData[4].toString(), 18);
            if (claimableAmount > 0 || claimedAmount > 0) {
              totalTokens = claimableAmount + claimedAmount;
            }

            let obj = {
              holdingAmount:
                +formatUnits(userClaimData[2].toString(), 18) +
                +formatUnits(userClaimData[4].toString(), 18),
              investedAmount: +formatUnits(userClaimData[0].toString(), 6),
              stage: i.toString(),
            };
            arr.push(obj);

            let remainObj = {
              remainingAmount: +formatUnits(userClaimData[2].toString(), 18),
              stage: i.toString(),
            };
            remainTokensArray.push(remainObj);
          }
          console.log([...remainTokensArray], "remainTokensArray");
          console.log(totalTokens, "totalTokens");
          setHoldings(totalTokens);
          setTotalRemainTokens(claimableAmount);
          setStagePerholidings([...arr]);
          setStagePerRemainTokens([...remainTokensArray]);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    setCallFunction(false);
  }, [account, callFunction]);

  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const showAlert = (message, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };
  const claimHandler = async (item) => {
    try {
      console.log(item, "id");
      setloading(true);
      await preSaleWriteFunction("claimAmount", [item.toString()]);
      setSelectStage("");
      setAlertState({
        open: true,
        message: "Calimed successfully!!!",
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      setloading(false);
      const errorMessage = error?.shortMessage;
      showAlert(errorMessage);
    }
  };

  const handleSelectStage = async (item) => {
    try {
      setloading(true);
      await setSelectStage(item);
      setloading(false);
      handleClose();
      setAlertState({
        open: true,
        message: `Your current Presale Stage ${item}`,
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      setloading(false);
      const errorMessage = error?.shortMessage;
      showAlert(errorMessage);
    }
  };
  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
              background: "#000",
              boxShadow: "black 0px 0px 8px 1px",
              borderRadius: "14px",
              p: 2,
            },
          },
        }}
        open={openBox}
        onClose={handleOpenBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box />
            <Typography
              my={1}
              mb={4}
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              Your Holdings
            </Typography>
            <CloseIcon
              onClick={handleOpenBoxClose}
              style={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          {holidings > 0 ? (
            <>
              <Box
                display="flex"
                sx={{
                  border: "1px solid #fff",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box width="33.3%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Stages
                  </Typography>
                </Box>
                <Box width="33.3%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Claimable Tokens
                  </Typography>
                </Box>
                <Box width="33.3%">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Invested Amount
                  </Typography>
                </Box>
              </Box>

              {stagePerholidings.map(
                ({ holdingAmount, investedAmount, stage }, index) => {
                  return (
                    <>
                      <Box
                        key={index}
                        display="flex"
                        sx={{
                          border: "1px solid #fff",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Box width="33.3%" borderRight="1px solid #fff">
                          <Typography
                            p={2}
                            sx={{
                              fontSize: "13px",
                              fontWeight: "400",
                              fontFamily: "Poppins",
                              color: "#fff",
                              lineHeight: "28px",
                            }}
                          >
                            Stage {stage}
                          </Typography>
                        </Box>
                        <Box width="33.3%" borderRight="1px solid #fff">
                          <Typography
                            p={2}
                            sx={{
                              fontSize: "13px",
                              fontWeight: "400",
                              fontFamily: "Poppins",
                              color: "#fff",
                              lineHeight: "28px",
                            }}
                          >
                            {formatNumberWithCommas(
                              parseFloat(holdingAmount).toFixed(0)
                            )}{" "}
                            RETIK
                          </Typography>
                        </Box>
                        <Box width="33.3%">
                          <Typography
                            p={2}
                            sx={{
                              fontSize: "13px",
                              fontWeight: "400",
                              fontFamily: "Poppins",
                              color: "#fff",
                              lineHeight: "28px",
                            }}
                          >
                            $
                            {formatNumberWithCommas(
                              parseFloat(investedAmount).toFixed(0)
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  );
                }
              )}
            </>
          ) : (
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              You have no holdings yet!
            </Typography>
          )}

          {/* {stagePerholidings.map(({ holdingAmount, stage }, index) => {
            return (
              <Typography
                mb={1}
                key={index}
                sx={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "Poppins",
                  color: "#fff",
                  lineHeight: "28px",
                }}
              >
                Stage {stage}: ${holdingAmount} RETIK
              </Typography>
             */}
        </Box>
      </Dialog>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
              background: "#000",
              boxShadow: "black 0px 0px 8px 1px",
              borderRadius: "14px",
              p: 2,
            },
          },
        }}
        open={remainBox}
        onClose={handleRemainBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box />
            <Typography
              my={1}
              mb={4}
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              Your Remaining Tokens
            </Typography>
            <CloseIcon
              onClick={handleRemainBoxClose}
              style={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          {totalRemainTokens > 0 ? (
            <>
              <Box
                display="flex"
                sx={{
                  border: "1px solid #fff",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Stages
                  </Typography>
                </Box>
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Remaining Tokens
                  </Typography>
                </Box>
              </Box>

              {stagePerRemainTokens.map(({ remainingAmount, stage }, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      display="flex"
                      sx={{
                        border: "1px solid #fff",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Box width="50%" borderRight="1px solid #fff">
                        <Typography
                          p={2}
                          sx={{
                            fontSize: "13px",
                            fontWeight: "400",
                            fontFamily: "Poppins",
                            color: "#fff",
                            lineHeight: "28px",
                          }}
                        >
                          Stage {stage}
                        </Typography>
                      </Box>
                      <Box width="50%" borderRight="1px solid #fff">
                        <Typography
                          p={2}
                          sx={{
                            fontSize: "13px",
                            fontWeight: "400",
                            fontFamily: "Poppins",
                            color: "#fff",
                            lineHeight: "28px",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(remainingAmount).toFixed(0)
                          )}{" "}
                          RETIK
                        </Typography>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </>
          ) : (
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              You have no Remaining Tokens to Claim!
            </Typography>
          )}
        </Box>
      </Dialog>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
              background: "#000",
              boxShadow: "black 0px 0px 8px 1px",
              borderRadius: "14px",
              p: 2,
            },
          },
        }}
        open={unlockBox}
        onClose={handleUnlockBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box />
            <Typography
              my={1}
              mb={4}
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              Your Tokens to unlock
            </Typography>
            <CloseIcon
              onClick={handleUnlockBoxClose}
              style={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          {totalNextunlockTokens > 0 ? (
            <>
              <Box
                display="flex"
                sx={{
                  border: "1px solid #fff",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Stages
                  </Typography>
                </Box>
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Tokens to Unlock
                  </Typography>
                </Box>
              </Box>

              {stagePerUnlockTokens.map(({ nextUnlock, stage }, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      display="flex"
                      sx={{
                        border: "1px solid #fff",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Box width="50%" borderRight="1px solid #fff">
                        <Typography
                          p={2}
                          sx={{
                            fontSize: "13px",
                            fontWeight: "400",
                            fontFamily: "Poppins",
                            color: "#fff",
                            lineHeight: "28px",
                          }}
                        >
                          Stage {stage}
                        </Typography>
                      </Box>
                      <Box width="50%" borderRight="1px solid #fff">
                        <Typography
                          p={2}
                          sx={{
                            fontSize: "13px",
                            fontWeight: "400",
                            fontFamily: "Poppins",
                            color: "#fff",
                            lineHeight: "28px",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(nextUnlock).toFixed(0)
                          )}{" "}
                          RETIK
                        </Typography>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </>
          ) : (
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              You have no Tokens to unlock!
            </Typography>
          )}
        </Box>
      </Dialog>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
              background: "#000",
              boxShadow: "black 0px 0px 8px 1px",
              borderRadius: "14px",
              p: 2,
            },
          },
        }}
        open={unlockedBox}
        onClose={handleUnlockedBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box />
            <Typography
              my={1}
              mb={4}
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              Your unlocked Tokens
            </Typography>
            <CloseIcon
              onClick={handleUnlockedBoxClose}
              style={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          {unlockTokens > 0 ? (
            <>
              <Box
                display="flex"
                sx={{
                  border: "1px solid #fff",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    Stages
                  </Typography>
                </Box>
                <Box width="50%" borderRight="1px solid #fff">
                  <Typography
                    p={2}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      lineHeight: "28px",
                    }}
                  >
                    unlocked Tokens
                  </Typography>
                </Box>
              </Box>

              {stagePerUnlockedTokens.map(
                ({ unlockedTokens, stage }, index) => {
                  return (
                    <>
                      <Box
                        key={index}
                        display="flex"
                        sx={{
                          border: "1px solid #fff",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Box width="50%" borderRight="1px solid #fff">
                          <Typography
                            p={2}
                            sx={{
                              fontSize: "13px",
                              fontWeight: "400",
                              fontFamily: "Poppins",
                              color: "#fff",
                              lineHeight: "28px",
                            }}
                          >
                            Stage {stage}
                          </Typography>
                        </Box>
                        <Box width="50%" borderRight="1px solid #fff">
                          <Typography
                            p={2}
                            sx={{
                              fontSize: "13px",
                              fontWeight: "400",
                              fontFamily: "Poppins",
                              color: "#fff",
                              lineHeight: "28px",
                            }}
                          >
                            {formatNumberWithCommas(
                              parseFloat(unlockedTokens).toFixed(0)
                            )}{" "}
                            RETIK
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  );
                }
              )}
            </>
          ) : (
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                lineHeight: "28px",
                textAlign: "center",
              }}
            >
              You have no unlocked Tokens!
            </Typography>
          )}
        </Box>
      </Dialog>
      <Box position="relative" zIndex={1}>
        {/* <Loading loading={loading} setloading={setloading} /> */}
        <ToastNotify alertState={alertState} setAlertState={setAlertState} />
        <Box pb={matches ? 5 : 10}>
          <Container maxWidth="xl">
            <Grid
              container
              spacing={3}
              display="flex"
              alignItems="center"
              px={!matches && 3}
              py={matches ? 5 : 6}
              className="xs-reverse"
            >
              <Grid
                item
                md={6}
                xs={12}
                justifyContent="flex-start"
                alignItems="center"
                display="flex"
                pb={matches && 2}
              >
                <Box>
                  <Box display="flex" alignItems="center" gap={matches ? '10px' : '40px'} justifyContent={matches ? 'center' : 'flex-start'}>
                    <a href="https://stake.retik.com/" target="_blank">
                      <div className="cardBox">
                        <div className="card-animation">
                          <div className="card-content">
                            <h3 className="card-title">Stake</h3>
                            {/* <div className="card-p">Earn rewards by staking Retik tokens</div> */}
                            <img
                              src={arrowIcon}
                              alt=""
                              className="arrow-animation"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://swap.retik.com/" target="_blank">
                      <div className="cardBox">
                        <div className="card-animation">
                          <div className="card-content">
                            <h3 className="card-title">Swap</h3>
                            {/* <div className="card-p">Earn rewards by staking Retik tokens</div> */}
                            <img
                              src={arrowIcon}
                              alt=""
                              className="arrow-animation"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </Box>
                  <Box display="flex" alignItems="center" gap={matches ? '10px' : '40px'} justifyContent={matches ? 'center' : 'flex-start'}>
                    <a href="https://retikcards.com/" target="_blank">
                      <div className="cardBox">
                        <div className="card-animation">
                          <div className="card-content">
                            <h3 className="card-title">Card</h3>
                            {/* <div className="card-p">Earn rewards by staking Retik tokens</div> */}
                            <img
                              src={arrowIcon}
                              alt=""
                              className="arrow-animation"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://retik.com/" target="_blank">
                      <div className="cardBox">
                        <div className="card-animation">
                          <div className="card-content">
                            <h3 className="card-title">Buy</h3>
                            {/* <div className="card-p">Earn rewards by staking Retik tokens</div> */}
                            <img
                              src={arrowIcon}
                              alt=""
                              className="arrow-animation"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </Box>
                  <Hidden mdDown>
                    <Box display="flex" alignItems="center">
                      <a
                        href="https://linktr.ee/retikfinance"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={linktree}
                          width="30px"
                          style={{ marginRight: "15px" }}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://twitter.com/retikfinance"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={tweet}
                          width="30px"
                          style={{ marginRight: "15px" }}
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
                          width="30px"
                          style={{ marginRight: "15px" }}
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
                          width="30px"
                          style={{ marginRight: "15px" }}
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
                          width="30px"
                          style={{ marginRight: "15px" }}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://reddit.com/r/retikfinance"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaRedditAlien
                          style={{ fontSize: "30px", color: "#B57DFE" }}
                        />
                      </a>
                    </Box>
                  </Hidden>
                  {/* <MianHeading mt={matches ? -3 : 3}>
                    Step Into The Future with{" "}
                    <span
                      style={{
                        background: "transparent",
                        backgroundImage:
                          "linear-gradient(90deg, rgba(109,216,212,1) 10%, rgba(243,137,192,1) 60%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Retik Finance
                    </span>{" "}
                  </MianHeading> */}

                  <p className="title-animation">
                    Step Into The Future{" "}<br />with Retik Finance
                  </p>
                  <Paragraph mt={4} pr={matches ? 0 : 2}>
                    Retik Finance innovates in DeFi with it's Futuristic DeFi
                    Debit Cards, Smart Crypto Payment Gateway, AI Powered Peer
                    to Peer (P2P) Lending and Multi Chain Non Custodial Highly
                    Secured DeFi Wallet, aiming to redefine global transactions.
                  </Paragraph>
                  <Box
                    mt={matches ? 4 : 9}
                    display="flex"
                    flexDirection={matches ? "column" : "row"}
                  >
                    <a
                      href="https://retik.com/whitepaper.pdf"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundImage: "linear-gradient(120deg, #6562fa 0%, #B781FF 100%)",
                          fontSize: matches ? "16px" : "20px",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          textTransform: "capitalize",
                          fontFamily: "Poppins",
                          borderRadius: "18px",
                          marginRight: "20px",
                          width: matches ? "100%" : "170px",
                          height: "50px",
                        }}
                      >
                        Whitepaper
                      </Button>
                    </a>
                    <a
                      href="https://retik.com/audit"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundImage: "linear-gradient(120deg, #6562fa 0%, #B781FF 100%)",
                          fontSize: matches ? "16px" : "20px",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          textTransform: "capitalize",
                          fontFamily: "Poppins",
                          borderRadius: "16px",
                          marginRight: "20px",
                          width: matches ? "100%" : "170px",
                          height: "50px",
                          mt: matches && 2,
                        }}
                      >
                        Audit
                      </Button>
                    </a>
                  </Box>
                  <Hidden mdUp>
                    <Box
                      display="flex"
                      alignItems="center"
                      mt={3}
                      justifyContent="center"
                    >
                      <a
                        href="https://linktr.ee/retikfinance"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={linktree}
                          width="30px"
                          style={{ marginRight: "10px" }}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://twitter.com/retikfinance"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={tweet}
                          width="30px"
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
                          width="30px"
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
                          width="30px"
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
                          width="30px"
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
                        <FaRedditAlien
                          style={{ fontSize: "30px", color: "#B57DFE" }}
                        />
                      </a>
                    </Box>
                  </Hidden>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="flex-end"
                width="100%"              >
                <Box
                  pb={5}
                  px={!matches && 5}
                  sx={{
                    width: matches ? "100%" : "80%",
                    background: matches
                      ? "radial-gradient(54.8% 53% at 50% 50%, #151515 0, #15151500 100%), linear-gradient(152.97deg, #fff3, #fff0)"
                      : "transparent",
                    backdropFilter: "blur(30px)",
                    borderRadius: matches ? "16px" : "25px",
                    textAlign: "center",
                    border: matches ? "1px solid #414247" : "1px solid #fff",
                    height: "100%",
                  }}
                  className="md-panel"
                >
                  <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v3&outputCurrency=0x26EbB8213fb8D66156F1Af8908d43f7e3e367C1d" target="_blank" className="panel-buy-btn">
                    <div className="cardBox cardBoxPanel">
                      <div className="card-animation">
                        <div className="card-content">
                          <h3 className="card-title">
                            Buy
                            Retik
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <Typography
                    py={2}
                    sx={{
                      fontSize: matches ? "20px" : "24px",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Claim will be available in
                  </Typography>
                  <CountdownMonths />

                  {/* {!account ? (
                    <></>
                  ) : (
                    <>
                      <Typography
                        pt={1}
                        onClick={handleOpenBox}
                        sx={{
                          fontSize: matches ? "18px" : "22px",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        Total Tokens:{" "}
                        <span
                          style={{
                            textDecoration: "underline",
                            color: "gold",
                            cursor: "pointer",
                          }}
                        >
                          {formatNumberWithCommas(parseFloat(holidings).toFixed(0))}
                        </span>
                      </Typography>
                      <Typography
                        pt={1}
                        pb={2}
                        sx={{
                          fontSize: matches ? "18px" : "22px",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        Unlocked Tokens:{" "}
                        <span
                          onClick={handleOpenUnlockedBox}
                          style={{
                            color: "gold",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(unlockTokens).toFixed(0)
                          )}
                        </span>{" "}
                        RETIK
                      </Typography>
                      <StyledButton
                        onClick={handleClick}
                        style={{
                          height: "40px",
                          borderRadius: "6px",
                          border: "1px solid #fff",
                          backgroundImage: "linear-gradient(-225deg, rgb(172, 50, 228) 0%, rgb(121, 24, 242) 48%, rgb(121 59 159) 100%)",
                          color: "#fff",
                          fontSize: "16px",
                          padding: "2px 12px"
                        }}
                      >
                        Select Stage{" "}
                        <KeyboardArrowDownIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                      </StyledButton>
                    </>
                  )} */}
                  {/* <Menu
                    sx={{
                      mt: 7,
                      top: "-15px",
                    }}
                    PaperProps={{
                      style: {
                        width: "151px",
                        backgroundImage: "linear-gradient(-225deg, rgb(172, 50, 228) 0%, rgb(121, 24, 242) 48%, rgb(121 59 159) 100%)",
                      },
                    }}
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {stages.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          onClick={() => handleSelectStage(item)}
                          className="display-block"
                        >
                          <Typography
                            sx={{
                              mb: 2,
                              color: "#fff",
                              fontSize: "18px",
                              fontWeight: "400",
                            }}
                          >
                            Stage {item}
                          </Typography>

                        </MenuItem>
                      );
                    })}
                  </Menu> */}
                  {/* <Box my={3} display="flex" justifyContent="center">
                    {!account ? (
                      <StyledButton
                        width={matches ? "80%" : "100%"}
                        onClick={async () => open()}
                        style={{
                          backgroundImage: "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
                          color: "#fff",
                          maxWidth: "285px",
                        }}
                      >
                        Connect Wallet
                      </StyledButton>
                    ) : (
                      <>
                        <StyledButton
                          width={matches ? "80%" : "100%"}
                          style={{
                            backgroundImage: "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
                            color: "#fff",
                            maxWidth: "285px",
                            gap: "5px"
                          }}
                          onClick={() => {
                            if (!selectStage) {
                              return showAlert("Please Select Stage First!");
                            }
                            claimHandler(selectStage);
                          }}
                        >
                          <span>Claim</span>
                          <span><img src={rightArrow} style={{
                            marginTop: "10px",
                          }} /></span>
                        </StyledButton>
                      </>
                    )}
                  </Box> */}
                  {/* {!account ? (
                    <></>
                  ) : (
                    <>
                      {nextUnlockTime !== null && (
                        <Typography
                          sx={{
                            fontSize: matches ? "16px" : "22px",
                            fontWeight: "400",
                            fontFamily: "Poppins",
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          Next Unlock on:{" "}
                          {unlockTokens === 0
                            ? "_ _ : _ _ : _ _"
                            : nextUnlockTime.toLocaleString()}
                        </Typography>
                      )}
                    </>
                  )} */}

                  {/* {!account ? (
                    <></>
                  ) : (
                    <>
                      <Typography
                        pt={1}
                        sx={{
                          fontSize: matches ? "18px" : "22px",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        Total Tokens to Unlock:{" "}
                        <span
                          onClick={handleOpenUnlockBox}
                          style={{
                            color: "gold",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(totalNextunlockTokens).toFixed(0)
                          )}
                        </span>{" "}
                        <>RETIK</>
                      </Typography>
                      <Typography
                        pt={4}
                        sx={{
                          fontSize: matches ? "18px" : "22px",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        Remaining to Claim:{" "}
                        <span
                          onClick={handleOpenRemainBox}
                          style={{
                            color: "gold",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(totalRemainTokens).toFixed(0)
                          )}
                        </span>{" "}
                      </Typography>
                    </>
                  )} */}

                  {/* <Typography
                    pt={1}
                    sx={{
                      fontSize: matches ? "18px" : "22px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Tokens to Unlock:{" "}
                    <span
                      style={{
                        color: "gold",
                      }}
                    >
                      {formatNumberWithCommas(
                        parseFloat(nextUnlockTokens).toFixed(0)
                      )}
                    </span>{" "}
                    RETIK
                  </Typography> */}



                  <Box
                    mt={5}
                    px={2}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className="sm-wrap"
                  >
                    <a
                      href="https://medium.com/@retikfinance/retik-finance-retik-token-vesting-schedule-4a876dd483ce"
                      target="_blank"
                      style={{ textDecoration: "none", width: "45%" }}
                      className="trade-btn"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          border: "2px solid #4B4C59",
                          background: "radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: matches ? "14px" : "14px",
                          cursor: "pointer",
                          padding: "4px 3px",
                        }}
                      >
                        <HiOutlineQuestionMarkCircle
                          style={{
                            fontSize: matches ? "15px" : "20px",
                            marginRight: "7px",
                          }}
                        />{" "}
                        Learn About Vesting?
                      </Box>
                    </a>

                    <a
                      href="https://app.uniswap.org/swap?&chain=mainnet&use=v3&outputCurrency=0x26EbB8213fb8D66156F1Af8908d43f7e3e367C1d"
                      target="_blank"
                      style={{ textDecoration: "none", width: "45%" }}
                      className="trade-btn"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          border: "2px solid #4B4C59",
                          background: "radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: matches ? "14px" : "14px",
                          cursor: "pointer",
                          padding: "4px 3px",
                        }}
                      >
                        <BsRocketTakeoff
                          style={{
                            fontSize: matches ? "15px" : "17px",
                            marginRight: "7px",
                          }}
                        />{" "}
                        Trade Retik
                      </Box>
                    </a>
                  </Box>
                </Box>
                {/* <Box
                  sx={{
                    width: "100%",
                    height: matches ? "100%" : "440px",
                    // border: "1px solid #fff",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: "25px",
                    background:
                      "linear-gradient(64.83deg, #30304e 15%, #27283c 60%)",
                  }}
                >
                  <Box
                    px={matches ? 2 : 4}
                    sx={{
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                      background:
                        "linear-gradient(273.16deg, #FF94FFa1 20.63%, #6DD8D4a1 75.15%)",
                    }}
                  >
                    {!account ? (
                      <MianHeading
                        py={7}
                        textAlign="center"
                        style={{
                          fontSize: matches ? "30px" : "40px",
                          lineHeight: matches && "40px",
                        }}
                      >
                        To Check Your Holdings Connect Wallet
                      </MianHeading>
                    ) : (
                      <>
                        <Typography
                          pt={4}
                          textAlign="center"
                          sx={{
                            fontSize: "16px",
                            color: "#1C1D23",
                            fontWeight: "700",
                          }}
                        >
                          {matches
                            ? account.slice(0, 8) + "..." + account.slice(-8)
                            : account}
                        </Typography>
                        <MianHeading
                          textAlign="center"
                          style={{ fontSize: "40px", lineHeight: "62px" }}
                        >
                          Your Holdings
                        </MianHeading>
                        <Typography
                          pb={3}
                          onClick={handleOpenBox}
                          textAlign="center"
                          sx={{
                            fontSize: "36px",
                            color: "#fff",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {formatNumberWithCommas(
                            parseFloat(holidings).toFixed(0)
                          )}{" "}
                          Tokens
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Typography
                    mt={3}
                    sx={{
                      textAlign: "center",
                      fontSize: "24px",
                      color: "#d7d7d7",
                    }}
                  >
                    Join Us For Latest Announcements:
                  </Typography>
                  <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://linktr.ee/retikfinance"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={linktree}
                        width="30px"
                        style={{ marginRight: "15px" }}
                        alt=""
                      />
                    </a>
                    <a
                      href="https://twitter.com/retikfinance"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={tweet}
                        width="30px"
                        style={{ marginRight: "15px" }}
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
                        width="30px"
                        style={{ marginRight: "15px" }}
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
                        width="30px"
                        style={{ marginRight: "15px" }}
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
                        width="30px"
                        style={{ marginRight: "15px" }}
                        alt=""
                      />
                    </a>
                    <a
                      href="https://reddit.com/r/retikfinance"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaRedditAlien
                        style={{ fontSize: "30px", color: "#B57DFE" }}
                      />
                    </a>
                  </Box>
                  <Box
                    mt={!account ? 5 : 4}
                    mb={matches && 4}
                    display="flex"
                    justifyContent="center"
                  >
                    {!account ? (
                      <StyledButton
                        width={matches ? "80%" : "60%"}
                        onClick={async () => open()}
                      >
                        Connect Wallet ➥
                      </StyledButton>
                    ) : (
                      <StyledButton
                        width={matches ? "80%" : "60%"}
                        onClick={handleOpenClaim}
                      >
                        Claim ➥
                      </StyledButton>
                    )}
                  </Box>
                </Box> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
