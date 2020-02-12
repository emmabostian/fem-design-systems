import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

export const ICON_MODIFIERS = {
  small: () => `
    width: 8px;
    height: 8px;
  `,
  large: () => `
    width: 24px;
    height: 24px;
  `,
  inverted: () => `
    > path {
      fill: ${props => props.theme.primaryColor};
    }
  `
};

const Icon = styled.svg`
  fill: none;
  margin-right: 8px;
  width: 16px;
  height: 16px;

  > path {
    fill: ${props => props.theme.textColorOnPrimary};
    transition: fill 0.2s linear;
  }

  &:hover,
  &:focus {
    > path {
      fill: ${props => props.theme.textColorOnPrimary};
    }
  }

  ${applyStyleModifiers(ICON_MODIFIERS)}
`;

export default Icon;
