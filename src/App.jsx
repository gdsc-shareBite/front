import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Main from "./pages/Main";
import UsageHistory from "./pages/Usage-history"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },{
        path:"usage-history",
        element: <UsageHistory />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
