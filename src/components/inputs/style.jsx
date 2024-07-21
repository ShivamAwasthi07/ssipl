import { styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e2e2e2",
    },
    "&:hover fieldset": {
      borderColor: "#c2c2c2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6f6f6f",
    },
  },
}));
