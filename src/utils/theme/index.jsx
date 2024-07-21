import { GlobalStyles } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Jost, Arial, sans-serif",
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        fontFamily: "Jost, Arial, sans-serif",
      },
    }}
  />
);

export { theme, globalStyles };
