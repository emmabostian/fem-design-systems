import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { helperText, header5, paragraph } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    ${helperText}
    padding: 8px 8px;
  `,
  large: () => `
    ${header5}
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${props => props.theme.warningColor};
    color: ${props => props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props => props.theme.warningColorHover};
    }

    &:active {
      background-color: ${props => props.theme.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${props => props.theme.errorColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.errorColorHover};
  }

  &:active {
    background-color: ${props => props.theme.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${props => props.theme.successColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.successColorHover};
  }

  &:active {
    background-color: ${props => props.theme.successColorActive};
  }
  `
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  ${paragraph}
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  background: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
