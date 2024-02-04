import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Main from "./pages/Main";
import UsageHistory from "./pages/UsageHistory"
import Post from "./pages/Post";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import ProductDetail from "./pages/ProductDetail";
import MyPage from "./pages/Mypage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset some basic elements */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  /* Add your own styles here */
  a {
    text-decoration: none;
    color : black;
    cursor: pointer;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },{
        path:"usage-history",
        element: <UsageHistory />
      },
      {
        path: "posts",
        element: <Post />,
      },
      {
        path: "posts/:id",
        element: <ProductDetail />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
