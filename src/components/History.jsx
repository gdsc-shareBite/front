import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* dayjs 설정 */
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

function History({history, setHistorys}) {
  const {id, state, title, imgSrc, date, name} = history;
  
  //history 진행 상태 변경 함수
  const handleChangeState = (newState) => {
    const newHistory = {
      state:newState,
      date:dayjs(new Date()).format('MM/DD hh:mm:ss'),
      id,title,imgSrc,name,
    };
    setHistorys((prev)=>{
      return prev.map(
        (oldHistory)=>
        oldHistory.id === newHistory.id ? newHistory : oldHistory
        )});
  }

  //취소시 history 삭제 함수
  const handleRemoveHistory = () => {
    setHistorys((prev)=>{
      return prev.filter(history=>history.id !==id);
    });
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
            <UserName>{"- "+name}</UserName>
          </TitleWrapper>
            {state === "RESERVATING" &&
              <BtnWrapper>
                <AcceptBtn onClick={() => handleChangeState("PROGRESSING")}>Accept</AcceptBtn>
                <DeclineBtn onClick={handleRemoveHistory}>Decline</DeclineBtn>
              </BtnWrapper>}
            {state === "PROGRESSING" &&
              <BtnWrapper>
                <AcceptBtn onClick={() => handleChangeState("COMPLETED")}>Confirm</AcceptBtn>
                <DeclineBtn onClick={handleRemoveHistory}>Not Visited</DeclineBtn>
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

const UserName = styled(HistoryDate)`
margin-left: 20px;
`;

const HistoryTitleLink = styled(Link)`
  font-size: 16px;
  margin-bottom: 10px;
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
  }
  
`;

const AcceptBtn = styled(Btn)``;
const DeclineBtn = styled(Btn)`
  color: white;
  background-color: #555657;
  border: 0px solid white;
  &:hover{
    background-color: #777777;
  }
`;


export default History;