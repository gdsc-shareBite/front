import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

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
      <List>
        <Post />
        <Post />
        <Post />
      </List>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  padding: 50px 30px 50px;
`;

const List = styled.div`
  margin: auto;
`;
