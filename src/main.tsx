import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

declare global {
  interface Window {
    bootstrap: any;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.bootstrap = bootstrap;
