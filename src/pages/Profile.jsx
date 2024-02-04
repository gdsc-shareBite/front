import React, { useState, useRef } from "react";
import styled from "styled-components";
import trashIcon from "../assets/trashIcon.svg";
import Input from "../components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyPage() {
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileBlob = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);

      reader.onload = () => {
        setImgSrc(reader.result.toString());
      };
    }
  };

  const handleImgClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <MainLabel>Profile</MainLabel>
      <ImgContainer>
        {/* 수정된 컴포넌트 이름 사용 */}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef} // ref 객체 직접 할당
        />
        <img
          src={imgSrc || "https://picpac.kr/common/img/default_profile.png"}
          alt="Profile"
        />
        <ProfileImgEditBtn onClick={handleImgClick}>Update</ProfileImgEditBtn>
        <ProfileImgDelete>
          <img src={trashIcon}></img>
          <span>Remove</span>
        </ProfileImgDelete>
      </ImgContainer>

      {/* input */}
      <InputWrapper>
        <Input
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <Input
          label="Country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <Input
          label="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormatDiv>
            Date Format
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </FormatDiv>
          <FormatDiv>
            Time Format
            <input type="time" />
          </FormatDiv>
        </div>
      </InputWrapper>
      <BtnWrapper>
        <div style={{ gap: "10px", display: "flex" }}>
          <SaveProfile onClick={() => {}}>Save Changes</SaveProfile>
          <CancelProfile onClick={() => {}}>Cancel</CancelProfile>
        </div>
        <DeleteProfile onClick={() => {}}>Delete Account</DeleteProfile>
      </BtnWrapper>
    </div>
  );
}
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 20px 0;
  position: relative;
  gap: 30px;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 2.805px solid #eaeaea;
    filter: brightness(60%);
  }
`;
const MainLabel = styled.h1`
  font-size: 30px;
`;

const ProfileImgEditBtn = styled.button`
  background-color: transparent;
  border-radius: 40px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const ProfileImgDelete = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  > span {
    font-size: 14px;
  }
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;
const SaveProfile = styled.button`
  border-radius: 40px;
  border: none;
  background-color: #0069ff;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 18px;
`;

const CancelProfile = styled.button`
  border-radius: 40px;
  border: 1px solid black;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
`;
const DeleteProfile = styled.button`
  border-radius: 40px;
  border: none;
  background-color: #c84545;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const FormatDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
