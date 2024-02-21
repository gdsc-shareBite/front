import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const ReservationModal = forwardRef(function ReservationModal({ setIsReserved }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      setIsReserved(true);
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <ModalContainer ref={dialog}>
      <p>예약 성공!</p>
      <form method="dialog">
        <Button onClick={() => ref.current.close()}>Close</Button>
      </form>
    </ModalContainer>,
    document.getElementById("modal")
  );
});

export default ReservationModal;

const ModalContainer = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  min-width: fit-content;
  width: 30%;
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

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  background: #35314c;
  cursor: pointer;
`;
