import React, { useState } from "react";
import Profile from "./Profile";
import BecomeGiver from "./BecomeGiver";
import styled from "styled-components";
import Input from "../components/Input";

export default function MyPage() {
  // 기본값 Profile
  const [activeSection, setActiveSection] = useState("profile");

  // 현재 섹션을 렌더링
  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "giver":
        return <BecomeGiver />;
      // 기본값 Profile
      default:
        return <Profile />;
    }
  };

  return (
    <Div>
      <Nav>
        <Btn onClick={() => setActiveSection("profile")}>Profile</Btn>
        <Btn onClick={() => setActiveSection("giver")}>Become a Giver!</Btn>
      </Nav>
      {renderSection()}
    </Div>
  );
}
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 100px;
`;
const Div = styled.div`
  display: flex;
  margin-top: 100px;
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
