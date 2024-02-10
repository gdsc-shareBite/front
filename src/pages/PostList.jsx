import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import Map from "../components/Map";

export default function PostList() {
  return (
    <Div>
      <Map />
      <List>
        <Post product={{ id: 1 }} />
        <Post product={{ id: 2 }} />
        <Post product={{ id: 3 }} />
      </List>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 30px 50px;
`;

const List = styled.div`
  margin-left: 100px;
`;
