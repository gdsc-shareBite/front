import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #b2b2b2;
  border-radius: 8px;
`;

const Label = styled.label``;
function Input({ label, type, value, onChange, onlyNumbers, placeholder }) {
  function handleChange(e) {
    if (onlyNumbers) {
      const re = /^\d*$/;
      if (re.test(e.target.value)) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  }

  return (
    <Div>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Div>
  );
}

export default Input;
