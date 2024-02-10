import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBar>
      <Link to="/">
        <Title>ShareBite</Title>
      </Link>
      <Nav>
        <Link to="/posts">Post</Link>
        <Link to="/">Register</Link>
        <Link to="/usage-history">History</Link>
        <Link to="/" style={{ marginRight: "40px" }}>
          MyPage
        </Link>
        <Button>LOGIN</Button>
        <Button color="#35314c" textColor="white">
          SIGN UP
        </Button>
      </Nav>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 10%;
  border: 0px;
  background-color: ${(props) => props.color || "#cdcdcd"};
  color: ${(props) => props.textColor || "black"};
  padding: 10px;
  font-weight: bolder;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;
