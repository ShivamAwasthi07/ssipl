import { TableContainer, TableHead, TableRow, styled } from "@mui/material";
import { COLORS } from "../../assets/colors";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: COLORS.theme_secondary,
  "& .MuiTableCell-root": {
    color: COLORS.text,
    fontWeight: "medium",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  cursor: "pointer",
}));

export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 16px",
  color: COLORS.theme,
  width: "90%",
  position: "relative",
  left: "50%",
  translate: "-50%",
  borderRadius: "12px",
  zIndex: 1,
});

export const Title = styled("div")({
  flexGrow: 1,
  fontWeight: "light",
  fontSize: "17px",
  letterSpacing: "0.2px",
});
