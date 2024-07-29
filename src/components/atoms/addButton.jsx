import React from "react";
import { ICONS } from "../../assets/icons";
import { COLORS } from "../../assets/colors";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: COLORS.text,
  borderColor: COLORS.faded_black,
  "&:hover": {
    borderColor: COLORS.faded_black,
    backgroundColor: COLORS.faded_black,
  },
}));

const AddButton = ({ onClick }) => {
  return (
    <StyledButton
      type="button"
      variant="outlined"
      onClick={onClick}
      startIcon={ICONS.add}
    >
      Add
    </StyledButton>
  );
};

export default AddButton;
