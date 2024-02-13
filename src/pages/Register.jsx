import React, { useState } from "react";
import styled from "styled-components";
import CustomDatePicker from "../components/CustomDatePicker";

export default function Register() {
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [manufacturingDate, setManufacturingDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const [selectedTags, setSelectedTags] = useState({});
  const [photos, setPhotos] = useState([]);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  const handleTagClick = (tagName) => {
    setSelectedTags((prevTags) => ({
      ...prevTags,
      [tagName]: !prevTags[tagName],
    }));
  };
  const handlePhotoChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setPhotos(selectedFiles);
  };

  return (
    <div>
      <MainLabel>Please enter the information of the item</MainLabel>
      <div style={{ display: "flex" }}>
        <Wrapper>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
          />
          <PhotoContainer>
            {photos.length === 0 ? (
              <PhotoPlaceholder></PhotoPlaceholder>
            ) : (
              photos.map((photo, index) => (
                <Photo
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index}`}
                />
              ))
            )}
          </PhotoContainer>
          <h1>Title</h1>
          <TitleInput />
          <h1>Description</h1>
          <Textarea />
        </Wrapper>
        <Wrapper>
          <ContentWrapper>
            <h1
              style={{
                marginBottom: "20px",
                fontWeight: "bolder",
                fontSize: "24",
              }}
            >
              Detail
            </h1>
            <DateWrapper>
              <CustomDatePicker
                label="Expiration date"
                selected={expirationDate}
                onChange={(date) => setExpirationDate(date)}
              />

              <CustomDatePicker
                label="Manufacturing date"
                selected={manufacturingDate}
                onChange={(date) => setManufacturingDate(date)}
              />
            </DateWrapper>
            <h2>인원수</h2>
            <CounterWrapper>
              <Button onClick={handleDecrement}>-</Button>
              <CountDisplay>{count}</CountDisplay>
              <Button onClick={handleIncrement}>+</Button>
            </CounterWrapper>
            <div>
              <h2>Tags</h2>
              {[
                "청소/계란",
                "유유/유제품",
                "채소/과일",
                "고기",
                "반찬",
                "베이커리",
                "조리",
                "비조리",
              ].map((tag) => (
                <Tag
                  key={tag}
                  selected={selectedTags[tag]}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag.startsWith("#") ? tag : `#${tag}`}
                </Tag>
              ))}
            </div>
          </ContentWrapper>
          <BtnWrapper>
            <CancelBtn>Cancel</CancelBtn>
            <RegisterBtn>Register</RegisterBtn>
          </BtnWrapper>
        </Wrapper>
      </div>
    </div>
  );
}

const PhotoPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin: 5px;
`;

const MainLabel = styled.div`
  color: #596e5a;
  font-size: larger;
  font-weight: bold;
  margin: 50px 50px 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin: 30px 40px;
  justify-content: space-between;
  > h1 {
    font-size: 24;
    font-weight: bolder;
    margin-top: 20px;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 10px;
  max-width: 200px;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #596e5a;
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const CountDisplay = styled.div`
  min-width: 40px;
  text-align: center;
`;
const Tag = styled.button`
  background-color: ${(props) => (props.selected ? "#a0a0a0" : "transparent")};
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #c0c0c0;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 5px;
`;

const TitleInput = styled.input`
  padding: 16px 14px;
  border: solid 1px#9e9e9e;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px#9e9e9e;
  border-radius: 8px;
  height: 150px;
`;

const CancelBtn = styled.button`
  border-style: none;
  padding: 10px;
  font-weight: bold;
  border-radius: 20px;
`;

const RegisterBtn = styled.button`
  border-style: none;
  padding: 10px;
  font-weight: bold;
  border-radius: 20px;
`;

const BtnWrapper = styled.div`
  bottom: 0;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
