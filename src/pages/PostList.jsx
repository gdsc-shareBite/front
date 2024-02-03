import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import TestImage from "../assets/images/testImage.jpg";

export default function PostList() {
  return (
    <Div>
      <image src={TestImage} />
      <div>Map</div>
      <div>
        <Post />
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: red;
  display: flex;
`;
