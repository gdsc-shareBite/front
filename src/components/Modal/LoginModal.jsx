import React, { forwardRef, useRef, createProtal } from "react";
import styled from "styled-components";

const LoginModal = forwardRef(function LoginModal({ props }, ref) {
  const dialog = useRef();

  return createProtal(
    <ModalContainer>
      
    </ModalContainer>,
    document.getElementById("modal")
  );
});

export default LoginModal;

const ModalContainer = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  min-width: fit-content;
  width: 30%;
  height: 40%;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  p {
    margin: 0.5rem 0;
    font-size: 1.2remm;
  }
  form {
    text-align: right;
  }
`;
