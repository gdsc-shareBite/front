import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const CustomDatePicker = ({ label, selected, onChange }) => {
  return (
    <StyledDatePickerWrapper>
      {label}
      <DatePicker selected={selected} onChange={onChange} />
    </StyledDatePickerWrapper>
  );
};

export default CustomDatePicker;
const StyledDatePickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;


  .react-datepicker {
    background-color: #fefefe;
    border: 1px solid #ddd;

  .react-datepicker__header {
    background-color: #f0f0f0;
  }
`;
