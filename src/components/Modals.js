import React from "react";
import styled from "styled-components";
import { paragraph, header3 } from "../utils";
import { PrimaryButton } from "./Buttons";
import { SignUp, CloseIcon } from "../assets";
import { useSpring, animated, config } from "react-spring";

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  ${header3}
`;

const SignUpText = styled.p`
  ${paragraph}
  max-width: 70%;
  text-align: center;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-100%)`,
    config: config.slow
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <SignUp />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton onClick={() => setShowModal(false)}>
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
