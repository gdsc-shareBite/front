import React from "react";
import styled from "styled-components";

export default function Post(Picture, Name, Locate) {
  return (
    <Wrapper>
      <image />
      <h3></h3>
      <p></p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1 solid;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: large;
`;
