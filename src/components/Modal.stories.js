import React, { useContext } from "react";
import { SignInModal, SignUpModal } from ".";
import { ThemeContext } from "styled-components";

const Theme = ({ children }) => {
  useContext(ThemeContext);
  return children;
};

export default {
  title: "Modals"
};

export const SignUp = () => (
  <Theme>
    <SignUpModal showModal={true} setShowModal={null} />
  </Theme>
);

export const SignIn = () => (
  <Theme>
    <SignInModal showModal={true} setShowModal={null} />
  </Theme>
);
