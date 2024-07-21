import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const SettingPopup = ({ open, onClose, onDone }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="settings-dialog-title"
    >
      <DialogTitle id="settings-dialog-title">Log Out</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to logout?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={() => {}} color="error">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingPopup;
