import { DialogActions, DialogContent } from "@mui/material";
import { styled } from "@mui/system";

export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  color: "white",
});

export const Title = styled("div")({
  flexGrow: 1,
  textAlign: "center",
  fontWeight: "light",
  fontSize: "22px",
  letterSpacing: "0.2px",
});

export const Body = styled(DialogContent)({
  padding: "16px",
});

export const Footer = styled(DialogActions)({
  padding: "16px",
  display: "flex",
  // justifyContent: "space-between",
});
