import { styled, TextField } from "@mui/material";
import { COLORS } from "../../assets/colors";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: COLORS.faded_black,
    },
    "&:hover fieldset": {
      borderColor: COLORS.faded_black,
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.faded_black,
    },
  },
}));
