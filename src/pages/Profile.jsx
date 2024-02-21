import React, { useState, useRef } from "react";
import styled from "styled-components";
import trashIcon from "../assets/trashIcon.svg";
import Input from "../components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { color } from "framer-motion";

export default function MyPage() {
  const [imgSrc, setImgSrc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    country: "",
    address: "",
    birthDate: new Date(),
  });
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

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <MainLabel>Profile</MainLabel>
      <ImgContainer>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
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
      {isEditing ? (
        <>
          <InputWrapper>
            <InputLabel>Name</InputLabel>
            <InputInfo
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
            <InputLabel>Country</InputLabel>
            <InputInfo
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
            />
            <InputLabel>Address</InputLabel>
            <InputInfo
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
            <InputLabel>Birth Date</InputLabel>
            <DatePicker
              selected={profile.birthDate}
              onChange={(date) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  birthDate: date,
                }))
              }
            />
          </InputWrapper>
        </>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <Div>
            <InputLabel>Name</InputLabel>
            {profile.name}
          </Div>
          <Div>
            <InputLabel>Country</InputLabel>
            {profile.country}
          </Div>
          <Div>
            <InputLabel>Address</InputLabel>
            {profile.address}
          </Div>
          <Div>
            <InputLabel>Birth Date</InputLabel>
            {profile.birthDate.toLocaleDateString()}
          </Div>
        </div>
      )}

      <BtnWrapper>
        <div style={{ gap: "10px", display: "flex" }}>
          {isEditing ? (
            <>
              <SaveProfile onClick={handleSaveChanges}>
                Save Changes
              </SaveProfile>
              <CancelProfile onClick={handleCancel}>Cancel</CancelProfile>
            </>
          ) : (
            <EditProfile onClick={handleEdit}>Edit Profile</EditProfile>
          )}
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
  margin: 10px 0 10px 0;
  position: relative;
  gap: 30px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 60px;
    border: 2.805px solid #eaeaea;
    filter: brightness(60%);
  }
`;
const MainLabel = styled.h1`
  font-size: 24px;
  color: #596e5a;
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
  margin-top: 15px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 100%;
  gap: 5px;
`;
const SaveProfile = styled.button`
  border-radius: 40px;
  border: none;
  background-color: #bccba4;
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
  background-color: #596e5a;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const FormatDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditProfile = styled.button`
  border-radius: 40px;
  border: none;
  background-color: #bccba4;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 18px;
`;

const InputInfo = styled.input`
  margin-bottom: 20px;
  border: 1px solid #bccba4;
  border-radius: 10px;
  height: 25px;
`;

const InputLabel = styled.label`
  color: #596e5a;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
