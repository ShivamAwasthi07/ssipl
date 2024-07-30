import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

//if only is loading is provided --> A default loop loader will be shown at the center
//if also, loadIndicator is provided --> then the string text provided there will be shown while loading
//if we provide loadPosition center --> only loader will be shown, else the default text along with loader at provided position

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
          sx={{ padding: "5px 30px" }}
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
        >
          {title}
        </Button>
      )}
    </Fragment>
  );
};

export default AppButton;
