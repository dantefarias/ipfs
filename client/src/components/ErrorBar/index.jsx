import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

const ErrorBar = ({ handleOnClose, message }) => {
  return (
    <Snackbar
      open={true}
      onClose={handleOnClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
    >
      <Alert
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
        onClose={handleOnClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorBar;
