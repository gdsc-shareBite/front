import React from "react";
import styled from "styled-components";
import TestImage from "../assets/images/testImage.jpg";

export default function Post({ Photo, Name, Locate }) {
  return (
    <Wrapper>
      <Image src={TestImage} alt="restaurantName" />
      <Title>{Name || "식당이름입니다~"}</Title>
      <p>{Locate || "식당위치입니다."}</p>
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

const Image = styled.image`
  width: 263px;
  height: 195px;
  flex-shrink: 0;
  object-fit: cover;
`;
