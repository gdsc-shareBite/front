import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Main from "./pages/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
