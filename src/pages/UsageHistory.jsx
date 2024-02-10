import React, { useEffect, useState } from "react";
import {styled,} from "styled-components";
import History from "../components/History";
import axios from "axios";

/* 
1) state props에 따라 보여주는 버튼이 다름 <<
2) 수락->진행 중 / 거절->history 삭제
3) 확정->거래완료 / not visited->history 삭제
*/
export default function UsageHistory() {

  /* 예약신청: "RESERVATING"  진행중:"PROGRESSING" 완료:"COMPLETED "*/
  const data = [
    {
      id:1,
      state: "RESERVATING",
      title:"this is title",
      imgSrc:"--",
      date:"1/1",
    },{
      id:2,
      state: "RESERVATING",
      title:"hi",
      imgSrc:"--",
      date:"1/2",
    },{
      id:3,
      state: "PROGRESSING",
      title:"빵",
      imgSrc:"--",
      date:"1/3",
    },{
      id:4,
      state: "COMPLETED",
      title:"케이크",
      imgSrc:"--",
      date:"1/4",
    },{
      id:5,
      state: "COMPLETED",
      title:"도넛",
      imgSrc:"--",
      date:"1/5",
    },
  ];

  const [historys, setHistorys] = useState(data);
  
  useEffect(() => {
    // Fetch usage history data from the server
    async function fetchHistorys() {
      try {
        const response = await axios.get('/api/usage-history');
        setHistorys(response.data);
      } catch (error) {
        console.error('Error fetching usage history:', error);
      }
    }

    fetchHistorys();
  }, []);

  return <>
    <Wrapper>
      <Title>History</Title>
      
      <Container>
        <Subtitle>예약 신청</Subtitle>
        <ReservationBox>
          {historys.map((history)=> history.state === "RESERVATING" &&
          <History history={history} setHistorys={setHistorys}/>)}
        </ReservationBox>
        <Hr />

        <Subtitle>진행 중</Subtitle>
        <ProgressBox>
          {historys.map((history)=> history.state === "PROGRESSING" &&
          <History history={history} setHistorys={setHistorys}/>)}
          </ProgressBox>
        <Hr />

        <Subtitle>거래 완료</Subtitle>
        <CompletionBox>
          {historys.map((history)=> history.state === "COMPLETED" &&
          <History history={history}/>)}
          </CompletionBox>
        
      </Container>
      
    </Wrapper>
  </>;
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Hr = styled.hr`
  width: 90vw;
`;
const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 60px;
`;
const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 0 15px;
`;
const Container = styled.div`
  margin: 20px 50px 0 50px;
  background-color:#f3f3f3;
  border-radius: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  Hr{
    width: 82vw;
  }
`;

const ReservationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProgressBox = styled(ReservationBox)``;
const CompletionBox = styled(ReservationBox)``;
