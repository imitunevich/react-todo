import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { TodoNew } from "./pages/TodoNew/TodoNew";
import { CategoryResultPage } from "./pages/categoryResultPage/CategoryResultPage";
import { TodoApi } from "./api/TodoApi";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos",
    element: <Root />,
  },
  {
    path: "/todos/new",
    element: <TodoNew />,
  },
  {
    path: "/category/:categoryId",
    element: <CategoryResultPage />,
    loader: async ({ params }) => {
      try {
        const category = await TodoApi.getCategoryById(
          params.categoryId as string,
        );
        return category;
      } catch (error) {
        return null;
      }
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

window.bootstrap = bootstrap;
