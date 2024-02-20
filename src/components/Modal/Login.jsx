import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


export default function Login({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here
  };
  return (
    <Overlay>
      <ModalWrap onClose={handleClose}>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <CloseButton onClick={handleClose}><i class="fa-solid fa-xmark"></i></CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          {!isLogin && <Input type="password" placeholder="Confirm Password" required />}
          <Button onClick={handleClose} type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </Form>
        <p onClick={toggleForm}>{isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}</p>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 700px;
  height: 550px;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 10px;
  i{
    font-size: 30px;
    color: #6c6c6c;
  }
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;
const Form = styled.form`
  background-color: #ffffff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  margin: 10px;
  font-size: 18px;
  &::placeholder{
    color: #7d7d7d;
  }
`;


const Button = styled.button`
  width: 400px;
  height: 50px;
  font-size: 14px;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  background-color: ${(props)=>props.theme.green};
  border-radius: 10px;
  color: white;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #6f8460;
  }
`;