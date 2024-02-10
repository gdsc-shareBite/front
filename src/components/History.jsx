import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



function History({history, setHistorys}) {
  const {id, state, title, imgSrc, date,} = history;

  const makeNewHistory = (newState) => {
    const newHistory = {
      state:newState,
      id,title,imgSrc,date
    };
    setHistorys((prev)=>{
      return prev.map(
        (oldHistory)=>
        oldHistory.id === newHistory.id ? newHistory : oldHistory
        )});
  }
  const removeHistory = () => {
    setHistorys((prev)=>{
      return prev.filter(history=>history.id !==id);
    });
  }

  const handleAccept = () =>{
    makeNewHistory("PROGRESSING");
    
  }
  const handleDecline = () =>{
    removeHistory();
  }

  const handleConfirm = () => {
   makeNewHistory("COMPLETED");
  }
  const handleDoNotVisit = ()=>{
    removeHistory();
  }

  return <>
    <HistoryBox>
        <HistoryImg src="" alt="-"/>
        <Contents>
          <HistoryDate>{date}</HistoryDate>
          <Link to={`/posts/`}>{title}</Link>
          {state === "RESERVATING" &&
            <BtnWrapper>
              <AcceptBtn onClick={() => handleAccept()}>Accept</AcceptBtn>
              <DeclineBtn onClick={() => handleDecline()}>Decline</DeclineBtn>
            </BtnWrapper>}
          {state === "PROGRESSING" &&
            <BtnWrapper>
              <AcceptBtn onClick={() => handleConfirm()}>Confirm</AcceptBtn>
              <DeclineBtn onClick={() => handleDoNotVisit()}>Not Visited</DeclineBtn>
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
const HistoryDate = styled.span`
font-size: 12px;
color: #5d5d5d;
margin-bottom: 8px;
`;
const HistoryTitle = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
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