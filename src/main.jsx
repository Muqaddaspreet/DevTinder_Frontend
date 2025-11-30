import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        {/* All the routing happens relative to this path.*/}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
