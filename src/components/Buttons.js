import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, primaryFont } from "../utils";

export const BUTTON_MODIFIERS = {
  small: () => `
  padding: 8px 8px;
  font-size: ${typeScale.helperText};
  `,
  large: () => `
  padding: 16px 24px;
  font-size: ${typeScale.header5};
  `,
  warning: ({ theme }) => `
    background-color: ${theme.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${theme.warningColorHover};
    }

    &:active {
      background-color: ${theme.warningColorActive};
    }
  `,
  error: ({ theme }) => `
  background-color: ${theme.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.errorColorHover};
  }

  &:active {
    background-color: ${theme.errorColorActive};
  }
  `,
  success: ({ theme }) => `
  background-color: ${theme.successColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.successColorHover};
  }

  &:active {
    background-color: ${theme.successColorActive};
  }
  `
};

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
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
