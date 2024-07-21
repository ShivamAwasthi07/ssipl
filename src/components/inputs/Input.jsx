import React, { Fragment, forwardRef } from "react";
import { CustomTextField } from "./style";
import { InputLabel } from "@mui/material";

const Input = forwardRef(({ label = "", error = {}, ...rest }, ref) => {
  return (
    <Fragment>
      <InputLabel sx={{ fontSize: "12px", fontWeight: "medium" }} error={error}>
        {label}
      </InputLabel>
      <CustomTextField
        margin="normal"
        fullWidth
        inputRef={ref}
        {...rest}
        sx={{ marginTop: "6px", marginBottom: "16px" }}
      />
    </Fragment>
  );
});

export default Input;
