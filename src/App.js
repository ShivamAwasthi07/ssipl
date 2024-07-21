import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { globalStyles, theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
