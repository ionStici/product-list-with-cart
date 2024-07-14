import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DessertsProvider from "./contexts/DessertsContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DessertsProvider>
      <App />
    </DessertsProvider>
  </React.StrictMode>,
);
