import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App2 from "./App2.jsx";
import "./index.scss";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
