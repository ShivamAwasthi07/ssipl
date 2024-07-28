import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { globalStyles, theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
// import Joyride from "react-joyride";
// import { useState } from "react";
const App = () => {
  // const [{ run, steps }, setState] = useState({
  //   run: true,
  //   steps: [
  //     {
  //       target: ".app-tour",
  //       content: "Let's begin our journey",
  //       placement: "center",
  //     },
  //     {
  //       title: "Client Management",
  //       target: ".side-1",
  //       content: "This is Client Management",
  //       placement: "right",
  //     },
  //     {
  //       title: "User Management",
  //       target: ".side-2",
  //       content: "This another awesome feature!",
  //       placement: "right",
  //     },
  //     {
  //       title: "Logout",
  //       target: ".logout-button",
  //       content: "This another awesome feature!",
  //       placement: "top",
  //     },
  //     {
  //       title: "Help",
  //       target: ".help-button",
  //       content: "This another awesome feature!",
  //       placement: "right",
  //     },
  //     {
  //       title: "Settings",
  //       target: ".settings-button",
  //       content: "This another awesome feature!",
  //       placement: "bottom",
  //     },
  //   ],
  // });
  return (
    <div className="app-tour" style={{ height: "100vh" }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {globalStyles}
          {/* <Joyride
          styles={{zIndex: 1000}}
            continuous
            callback={() => {}}
            run={run}
            steps={steps}
            hideCloseButton
            showSkipButton
            showProgress
            scrollToFirstStep
          /> */}
          <BrowserRouter future={{ v7_startTransition: true }}>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
