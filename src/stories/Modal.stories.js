import React, { useContext } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { SignInModal, SignUpModal } from "../components/";
import { ThemeProvider, ThemeContext } from "styled-components";
import { defaultTheme } from "../utils";

const Theme = ({ children }) => {
  useContext(ThemeContext);
  return children;
};

export default {
  title: "Modals",
  decorators: [
    storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>,
    withKnobs,
    withA11y
  ]
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
