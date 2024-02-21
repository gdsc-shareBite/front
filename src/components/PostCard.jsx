import React from "react";
import styled from "styled-components";
import TestImage from "../assets/images/testImage.jpg";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PostCard({
  product,
  product: { id, thumbnail, rating, name, location, author, description },
}) {
  const naviagte = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        naviagte(`/posts/${id}`, { state: { product } });
      }}
    >
      <ImageWrapper>
        <Image src={thumbnail} alt="restaurantName" />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{name || "식당이름입니다"}</Title>
        <RatingAndAuthor>
          <FaStar color="#ffc107" />
          <Rating>{rating || "4.8"}</Rating>
          <Author>{author || "James"}</Author>
        </RatingAndAuthor>
        <Detail>{description}</Detail>
        <LocationWrapper>
          <FaMapMarkerAlt color="#2b90d9" />
          <Location>{location || "식당위치입니다."}</Location>
        </LocationWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  box-shadow: 4px 5px 9px 5px rgba(194, 194, 194, 0.78);
  -webkit-box-shadow: 4px 5px 9px 5px rgba(194, 194, 194, 0.78);
  -moz-box-shadow: 4px 5px 9px 5px rgba(194, 194, 194, 0.78);
  border-radius: 15px;
  width: 478px;
  margin-bottom: 30px;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 263px;
  height: 195px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 20px;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
`;

const InfoWrapper = styled.div`
  padding: 10px;
  flex: 1;
`;

const RatingAndAuthor = styled.div`
  display: flex;
  margin: 5px 0;
`;

const Rating = styled.span`
  font-size: 16px;
  color: #ffc107;
  margin-left: 5px;
  padding-bottom: 1px;
`;

const Author = styled.span`
  font-size: 16px;
  color: #333;
  margin-left: 10px;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #666;
  margin: 10px 0 10px;
`;

const LocationWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Location = styled.span`
  font-size: 16px;
  color: #2b90db;
  margin-left: 5px;
  margin-top: auto;
`;
