import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* dayjs 설정 */
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

export default function UserHistory({history, setHistorys}) {
  const {id, state, title, imgSrc, date, name} = history;

  //취소시 history 삭제 함수
  const handleRemoveHistory = () => {
    //취소시 재확인
    if (window.confirm("Are you sure you want to cancel it?")) {
      setHistorys((prev)=>{
        return prev.filter(history=>history.id !==id);
      });
      alert("Deleted.");
    } else {
      alert("It has been canceled.");
    }
  }

  const handleStateName = (state) => {
    switch(state){
      case "RESERVATING":
        return "Reserved";
      case "PROGRESSING":
        return "Accepted";
      case "COMPLETED":
        return "Completed";
      default:
        return "";
    }
  }

  return <>
    <HistoryBox>
        <HistoryImg src="" alt="-"/>
        <Contents>
          <DetailWrapper>
            <HistoryDate>{date}</HistoryDate>
            <HistoryState>{handleStateName(state)}</HistoryState>
          </DetailWrapper>
          <TitleWrapper>
            <HistoryTitleLink to={`/posts/`}>{title}</HistoryTitleLink>
          </TitleWrapper>
            {state === "RESERVATING" &&
              <BtnWrapper>
                <CancelBtn onClick={handleRemoveHistory}>Cancel</CancelBtn>
              </BtnWrapper>}
            {state === "PROGRESSING" &&
              <BtnWrapper>
                <CancelBtn onClick={handleRemoveHistory}>Cancel</CancelBtn>
              </BtnWrapper>}
            {state === "COMPLETED" && <></>}
            
        </Contents>
    </HistoryBox>
  </>;
}

const HistoryBox = styled.div`
  width: 75vw;
  height: 110px;
  background-color: #ffffff;
  border-radius: 30px;
  margin: 10px 0;
  display: flex;
  justify-content:start;
  align-items: center;
  box-shadow: 1px 3px 3px 3px #ececec;
`;
const Contents = styled.div`
  display:flex;
  flex-direction: column;
  
  margin: 10px 20px;
`;
const DetailWrapper = styled.div`
`;
const HistoryDate = styled.span`
font-size: 12px;
color: #5d5d5d;
margin-bottom: 8px;
`;

const HistoryState = styled(HistoryDate)`
margin-left: 8px;
`;

const TitleWrapper = styled.div`
display: flex;
align-items: center;
`;

const HistoryTitleLink = styled(Link)`
  width: 40vw;
  font-size: 16px;
  margin-bottom: 10px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`;
const HistoryImg = styled.img`
  height: 80px;
  width: 80px;
  background-color: #ababab;
  border-radius: 10px;
  margin-left: 20px;
`;

const BtnWrapper = styled.div`
width: 300px;
`;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 10px 0 0;
  font-weight: 400;
  background-color: #f0f0f0;
  border: 0px solid white;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 2px #ebebeb;
  transition: background-color 0.2s ease-in ;
  &:hover{
    background-color: #dedede;
  }`;

const CancelBtn = styled(Btn)`
  color: white;
  background-color: #555657;
  border: 0px solid white;
  &:hover{
    background-color: #777777;
  }
`;