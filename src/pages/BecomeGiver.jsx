import { React, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

export default function BecomeGiver() {
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storePhone, setStorePhone] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);

  // 심사중 !
  const handleSaveClick = () => {
    setIsReviewing(true);
    setTimeout(() => {
      setIsReviewing(false);
      setIsReviewed(true);
    }, 2000);
  };
  return (
    <div>
      <MainLabel>Become a Giver!</MainLabel>
      {!isReviewed ? (
        !isReviewing ? (
          <>
            <InputWrapper>
              <Input
                label="Name of Store"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="Name of Store"
              />
              <Input
                label="Store address"
                type="text"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                placeholder="Store address"
              />
              <Input
                label="Store phone number"
                type="text"
                value={storePhone}
                onChange={(e) => setStorePhone(e.target.value)}
                placeholder="Store phone number"
              />
            </InputWrapper>
            <BtnWrapper>
              <div style={{ gap: "10px", display: "flex" }}>
                <SaveProfile onClick={handleSaveClick}>
                  Save Changes
                </SaveProfile>
                <CancelProfile>Cancel</CancelProfile>
              </div>
              <DeleteProfile>Delete Account</DeleteProfile>
            </BtnWrapper>
          </>
        ) : (
          <div>심사중...</div>
        )
      ) : (
        <div>
          심사가 완료
          <InputWrapper>
            <Input
              label="Name of Store"
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Name of Store"
            />
            <Input
              label="Store address"
              type="text"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
              placeholder="Store address"
            />
            <Input
              label="Store phone number"
              type="text"
              value={storePhone}
              onChange={(e) => setStorePhone(e.target.value)}
              placeholder="Store phone number"
            />
          </InputWrapper>
          <div>ing POST</div>
          <BtnWrapper>
            <div style={{ gap: "10px", display: "flex" }}>
              <SaveProfile onClick={handleSaveClick}>Save Changes</SaveProfile>
              <CancelProfile>Cancel</CancelProfile>
            </div>
            <DeleteProfile>Delete Account</DeleteProfile>
          </BtnWrapper>
        </div>
      )}
    </div>
  );
}

const MainLabel = styled.h1`
  font-size: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  gap: 5px;
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
