import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";

const Input = styled.input`
  width: 316px;
  height: 52px;
  background-color: ${props => props.theme.textFieldBackground};
  border: none;
  padding-left: 8px;
  border-radius: 2px;
`;

const Label = styled.label`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Label>{label}</Label>
    <Input type="email" placeholder={placeholder} />
  </div>
);

export const PasswordInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Label>{label}</Label>
    <Input type="password" />
  </div>
);
