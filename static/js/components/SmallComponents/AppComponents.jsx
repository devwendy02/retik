import { Alert, Box, Snackbar } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#000",
          background:
            "linear-gradient(273.16deg, #FF94FF 20.63%, #6DD8D4 75.15%)",
          fontSize: "18px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          fontFamily: "Poppins",
          borderRadius: "12px",
          width: props.width,
          height: "50px",
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "linear-gradient(273.16deg, #FF94FF 20.63%, #6DD8D4 75.15%)",
            color: "#000",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#fff ",
          fontSize: { xs: "14px", md: "16px" },
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTextBold({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
