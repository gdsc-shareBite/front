import React from "react";
import styled from "styled-components";

const HistoryBox = styled.div`
  width: 75vw;
  height: 110px;
  background-color: #dedede;
  border-radius: 30px;
  margin: 10px 0;
  display: flex;
  justify-content:start;
  align-items: center;
`;
const Contents = styled.div`
  display:flex;
  flex-direction: column;
  
  margin: 10px 20px;
`;
const HistoryTitle = styled.span`
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

const Btn = styled.button`
  height: 30px;
  background-color: #ffffff;
  border: 0px solid white;
  border-radius: 20px;
  transition: background-color 0.2s ease-in ;
  &:hover{
    background-color: #f1f1f1;
  }
`;

const AcceptBtn = styled(Btn)``;
const RejectBtn = styled(Btn)``;


function History({postTitle="title"}) {
  return <>
    <HistoryBox>
        <HistoryImg src="" alt="-"/>
        <Contents>
          <HistoryTitle>{postTitle}</HistoryTitle>
          <AcceptBtn>Accept</AcceptBtn>
        </Contents>
       
    </HistoryBox>
  </>;
}

export default History;