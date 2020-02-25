import React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { typeScale, primaryFont } from "../utils";
import { SignUp, CloseIcon, SignIn } from "../assets";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { EmailInput, PasswordInput } from "./TextFields";

const getAnimation = showModal => {
  return {
    config: config.slow,
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`
  };
};

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${primaryFont};
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
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

export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ModalWrapper>
        <SignUp />
        <ModalHeader>Sign Up</ModalHeader>
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

export const SignInModal = ({ showModal, setShowModal }) => (
  <animated.div style={useSpring(getAnimation(showModal))}>
    <ModalWrapper
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <div>
        <ModalHeader>Sign In</ModalHeader>
        <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
        <PasswordInput label="Password" />
        <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
          Sign Up
        </SecondaryButton>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
      <SignIn />
      <CloseModalButton onClick={() => setShowModal(false)}>
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  </animated.div>
);
