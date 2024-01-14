import React from "react";
import {styled,createGlobalStyle} from "styled-components";
import History from "../components/History";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing:border-box
    }
  body {
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Hr = styled.hr`
  width: 90vw;
`;
const Title = styled.h1`
`;
const Subtitle = styled.h2`
  font-size: 16px;
  margin-left: 10px;
`;
const Container = styled.div`
  margin: 10px 50px;
  background-color:#f8f8f8;
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

function UsageHistory() {
  return <>
  
    <Wrapper>
      <Title>History</Title>
      <Hr />
      <Container>
        <Subtitle>예약 신청</Subtitle>
        <ReservationBox>
          <History postTitle={""}/>
          <History />
        </ReservationBox>
        <Hr />
        <Subtitle>진행 중</Subtitle>
        <ProgressBox>
          
          <History />
        </ProgressBox>
        <Hr />

        <Subtitle>예약 신청</Subtitle>
        <CompletionBox>
          <History />
          <History />
        </CompletionBox>
        
      </Container>
      
    </Wrapper>
  </>;
}

export default UsageHistory;