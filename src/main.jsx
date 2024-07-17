import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DessertsProvider from "./contexts/DessertsContext.jsx";
import MediaQueriesProvider from "./contexts/MediaQueriesContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MediaQueriesProvider>
      <DessertsProvider>
        <App />
      </DessertsProvider>
    </MediaQueriesProvider>
  </React.StrictMode>,
);
