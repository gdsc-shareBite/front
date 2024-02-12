import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function Root() {
  return (
    <StyledRoot>
      <Header />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  width: 100%;
  /* max-width: 1536px; */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
