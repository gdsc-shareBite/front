import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

export default function Map() {
  const [location, setLocation] = useState();
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);

  const containerStyle = {
    width: "710px",
    height: "858px",
    borderRadius: "20px",
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
      <></>
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
