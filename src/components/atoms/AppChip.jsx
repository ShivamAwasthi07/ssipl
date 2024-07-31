import { Chip } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/colors";
import { ICONS } from "../../assets/icons";

const styles = {
  outlined: {
    color: COLORS.theme,
    borderColor: COLORS.theme_secondary,
    "&:hover": {
      borderColor: COLORS.theme_secondary,
      backgroundColor: COLORS.theme_secondary,
    },
  },
  contained: {
    color: COLORS.white_text,
    backgroundColor: COLORS.theme,
  },
};

const AppChip = ({
  sx = {},
  label = "",
  onDelete = undefined,
  onClick = undefined,
  variant = "outlined",
}) => {
  return (
    <Chip
      label={label}
      onDelete={onDelete}
      onClick={onClick}
      variant={variant}
      sx={{ ...sx, ...styles[variant] }}
      className={variant === "contained" ? "theme-gradient" : ""}
      deleteIcon={onDelete && ICONS.close}
    />
  );
};

export default AppChip;
