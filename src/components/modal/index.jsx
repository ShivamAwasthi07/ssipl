import React from "react";
import { Dialog, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Body, Footer, Header, Title } from "./styles";
import { COLORS } from "../../assets/colors";

const CustomModal = ({
  open,
  onClose,
  onCancel,
  onDone,
  title = "Title",
  content = null,
  negativeTitle = "Cancel",
  positiveTitle = "Done",
  logo,
  width = "md",
  onDelete = null,
  footerView = true,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={width} fullWidth>
      <Header className="theme-gradient">
        <div>
          {logo && <img src={logo} alt="Logo" style={{ height: "40px" }} />}
        </div>
        <Title>{title}</Title>
        <IconButton
          edge="end"
          color="white"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Header>
      <Body>{!!content && content}</Body>
      {footerView && (
        <Footer>
          {onDelete && (
            <Button
              variant="text"
              style={{ color: COLORS.error }}
              onClick={onDelete}
            >
              DELETE
            </Button>
          )}
          <Button
            variant="text"
            style={{ color: COLORS.error }}
            onClick={onCancel}
          >
            {negativeTitle}
          </Button>
          <Button variant="text" color="info" onClick={onDone}>
            {positiveTitle}
          </Button>
        </Footer>
      )}
    </Dialog>
  );
};

export default CustomModal;
