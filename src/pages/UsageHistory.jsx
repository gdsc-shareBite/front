import React, { useEffect, useState } from "react";
import {styled,} from "styled-components";
import History from "../components/History";
import axios from "axios";

export default function UsageHistory() {
  /* 예약신청: "RESERVATING"  진행중:"PROGRESSING" 완료:"COMPLETED "*/
  const data = [
    {
      id:1,
      state: "RESERVATING",
      title:"this is title hahah 길이확인용 길게길게 으어어ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ어어어어어어",
      imgSrc:"--",
      date:"02/11 10:09",
      name:"닉네임"
    },{
      id:2,
      state: "RESERVATING",
      title:"hi",
      imgSrc:"--",
      date:"02/11 10:10",
      name:"선정민",
    },{
      id:6,
      state: "RESERVATING",
      title:"커피",
      imgSrc:"--",
      date:"02/10 10:11",
      name:"정소은",
    },{
      id:3,
      state: "PROGRESSING",
      title:"빵",
      imgSrc:"--",
      date:"02/11 10:12",
      name:"주성천",
    },{
      id:4,
      state: "COMPLETED",
      title:"케이크",
      imgSrc:"--",
      date:"02/11 10:20",
      name:"강조은",
    },{
      id:5,
      state: "COMPLETED",
      title:"도넛",
      imgSrc:"--",
      date:"02/11 10:30",
      name:"닉네임",
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
        <Subtitle>Waiting for acceptance</Subtitle>
        <ReservationBox>
          {historys.map((history)=> history.state === "RESERVATING" &&
          <History history={history} setHistorys={setHistorys}/>)}
        </ReservationBox>
        <Hr />
        <Subtitle>In progress</Subtitle>
        <ProgressBox>
          {historys.map((history)=> history.state === "PROGRESSING" &&
          <History history={history} setHistorys={setHistorys}/>)}
          </ProgressBox>
        <Hr />
        <Subtitle>Completion</Subtitle>
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
  margin: 20px 50px 50px 50px;
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
