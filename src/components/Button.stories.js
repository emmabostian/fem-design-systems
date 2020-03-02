import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { action } from "@storybook/addon-actions";
import { select, boolean } from "@storybook/addon-knobs";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";

const Theme = ({ children }) => {
  useContext(ThemeContext);
  return children;
};

export default {
  title: "Buttons"
};

export const Primary = () => (
  <Theme>
    <p style={{ fontFamily: "Arial" }}>Default primary button</p>
    <PrimaryButton style={{ marginBottom: "50px" }} onClick={action("clicked")}>
      Primary button
    </PrimaryButton>
    <br />
    <p style={{ fontFamily: "Arial" }}>Primary button with modifiers</p>
    <PrimaryButton
      modifiers={[
        select("Size", ["small", "large"]),
        select("Status", ["warning", "error", "success"])
      ]}
      disabled={boolean("Disabled", false)}
      onClick={action("clicked")}
    >
      Primary button
    </PrimaryButton>
  </Theme>
);

export const Secondary = () => (
  <Theme>
    <p style={{ fontFamily: "Arial" }}>Default secondary button</p>
    <SecondaryButton
      style={{ marginBottom: "50px" }}
      onClick={action("clicked")}
    >
      Secondary button
    </SecondaryButton>
    <br />
    <p style={{ fontFamily: "Arial" }}>Secondary button with modifiers</p>
    <SecondaryButton
      modifiers={[
        select("Size", ["small", "large"]),
        select("Status", ["warning", "error", "success"])
      ]}
      disabled={boolean("Disabled", false)}
      onClick={action("clicked")}
    >
      Secondary button
    </SecondaryButton>
  </Theme>
);

export const Tertiary = () => (
  <Theme>
    <p style={{ fontFamily: "Arial" }}>Default tertiary button</p>
    <TertiaryButton
      style={{ marginBottom: "50px" }}
      onClick={action("clicked")}
    >
      Tertiary button
    </TertiaryButton>
    <br />
    <p style={{ fontFamily: "Arial" }}>Tertiary button with modifiers</p>
    <TertiaryButton
      modifiers={[
        select("Size", ["small", "large"]),
        select("Status", ["warning", "error", "success"])
      ]}
      disabled={boolean("Disabled", false)}
      onClick={action("clicked")}
    >
      Tertiary button
    </TertiaryButton>
  </Theme>
);
