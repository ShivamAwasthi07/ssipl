import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Router />
    </BrowserRouter>
  );
};

export default App;
