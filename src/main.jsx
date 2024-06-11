import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/main.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterPage from "./pages/CounterPage.jsx";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CounterPage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
  {
    path: "/*",
    element: (
      <div className="flex justify-center items-center h-screen text-3xl">
        404 NOT FOUND!
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
