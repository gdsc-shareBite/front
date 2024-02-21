import React, { useEffect, useState, useContext } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import { PostContext } from "../store/PostContext";

export default function Map() {
  const [location, setLocation] = useState();
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const { data: posts } = useContext(PostContext);

  const containerStyle = {
    width: "610px",
    height: "758px",
    borderRadius: "20px",
  };

  const myLocationIcon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // 사용자 지정 아이콘 이미지 경로
    scaledSize: new window.google.maps.Size(30, 30), // 아이콘 크기 설정
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15) // 아이콘의 앵커 포인트 설정
  };

  useEffect(() => {
    async function fetchLocation() {
      const { geolocation } = navigator;
      
      // geolocation.getCurrentPosition을 프로미스로 감싸는 부분
      const position = await new Promise((resolve, reject) => {
        geolocation.getCurrentPosition(resolve, reject);
      });

      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setIsLocationLoaded(true);
    }

    fetchLocation();
  }, []);

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return isLoaded && isLocationLoaded && location ? (
    <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
      {posts.map(post => (
        <Marker
          key={post.id}
          position={{ lat: post.coordinate[0], lng: post.coordinate[1] }}
        />
      ))}
           <Marker
        position={location}
        icon={myLocationIcon}
      />
    </GoogleMap>
  ) : (
    <Loading>
      <ScaleLoader
        height={100}
        width={4}
        margin={5}
        style={{ marginBottom: "120px" }}
        color="#36d7b7"
      />
    </Loading>
  );
}

const Loading = styled.div`
  width: 710px;
  height: 858px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
