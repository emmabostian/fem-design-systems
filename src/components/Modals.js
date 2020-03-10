import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { EmailInput, PasswordInput } from "./TextFields";
import { Illustrations, CloseIcon } from "../assets";
import { typeScale, primaryFont } from "../utils";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  font-family: ${primaryFont};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const getAnimation = showModal => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  };
};

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring(getAnimation(showModal));
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for an account!" />
        <ModalHeader>Sign Up</ModalHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};

export const SignInModal = ({ showModal, setShowModal }) => {
  const animation = useSpring(getAnimation(showModal));
  return (
    <animated.div style={animation}>
      <ColumnModalWrapper>
        <div>
          <ModalHeader>Sign In</ModalHeader>
          <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
          <PasswordInput label="Password" />
          <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
            Sign Up
          </SecondaryButton>
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
        <img src={Illustrations.SignIn} alt="Sign in to your account" />
        <CloseModalButton onClick={() => console.log("You closed the modal!")}>
          <CloseIcon />
        </CloseModalButton>
      </ColumnModalWrapper>
    </animated.div>
  );
};
