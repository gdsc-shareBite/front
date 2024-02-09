import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import Map from "../components/Map";

export default function PostList() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const position = { lat: 53.54992, lng: 10.006788 };

  return (
    <Div>
      {/* <APIProvider apiKey={apiKey}>
        <Map
          zoom={3}
          center={{ lat: 22.54992, lng: 0 }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider> */}
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
