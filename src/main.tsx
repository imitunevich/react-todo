import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { TodoNew } from "./pages/TodoNew/TodoNew";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/todos",
    element: <App />,
  },
  {
    path: "/todos/new",
    element: <TodoNew />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

window.bootstrap = bootstrap;
