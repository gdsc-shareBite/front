import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function Date({ label }) {
  return (
    <Wrapper>
      {label}
      <DatePicker />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 5px;
`;
