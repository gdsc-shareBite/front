import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBar>
      <div>
        <Title>ShareBite</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </FooterBar>
  );
}

const FooterBar = styled.footer`
  background-color: #f1f1f1;
  padding: 20px 30px 20px;
  margin-top: auto;
  display: flex;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 20px;
`;
