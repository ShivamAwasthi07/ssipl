import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import { Provider } from "react-redux";
import { store } from "./services/store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
