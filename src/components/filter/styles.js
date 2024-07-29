import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../assets/colors";

export const StyledFilterButton = styled(Button)(({ theme }) => ({
  color: COLORS.theme,
  borderColor: COLORS.theme_secondary,
  "&:hover": {
      backgroundColor: COLORS.theme_secondary, // Define your hover color
      borderColor: COLORS.theme_secondary,
  },
}));
