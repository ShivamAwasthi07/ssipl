import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { COLORS } from "../../assets/colors";

//if only is loading is provided --> A default loop loader will be shown at the center
//if also, loadIndicator is provided --> then the string text provided there will be shown while loading
//if we provide loadPosition center --> only loader will be shown, else the default text along with loader at provided position

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
    "&:hover": {
      borderColor: COLORS.theme,
      backgroundColor: COLORS.theme_secondary,
    },
  },
  text: {
    color: COLORS.theme,
  },
};

const AppButton = ({
  loadingType = false,
  title = "Click!",
  variant = "contained", //contained, text, outlined
  size = "small", //small, medium, large
  startIcon: StartIcon = undefined,
  endIcon: EndIcon = undefined,
  disabled = false,
  isLoading = false,
  loadPosition, //start, center, end
  loadIndicator,
  onClick,
  fullWidth = false,
  sx = {},
}) => {
  return (
    <Fragment>
      {loadingType ? (
        <LoadingButton
          variant={variant}
          disabled={disabled}
          size={size}
          startIcon={!!StartIcon && StartIcon}
          endIcon={!!EndIcon && EndIcon}
          loading={isLoading}
          loadingPosition={loadPosition}
          loadingIndicator={loadIndicator}
          sx={{ padding: "5px 20px", ...sx, ...styles[variant] }}
          type="button"
          onClick={onClick}
          fullWidth={fullWidth}
        >
          <span>{title}</span>
        </LoadingButton>
      ) : (
        <Button
          variant={variant}
          disabled={disabled}
          size={size}
          startIcon={!!StartIcon && StartIcon}
          endIcon={!!EndIcon && EndIcon}
          type="button"
          onClick={onClick}
          fullWidth={fullWidth}
          sx={{ padding: "5px 20px", ...sx, ...styles[variant] }}
          className={variant === "contained" ? "theme-gradient" : ""}
        >
          {title}
        </Button>
      )}
    </Fragment>
  );
};

export default AppButton;
