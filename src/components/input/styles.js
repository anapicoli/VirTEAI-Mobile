import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 15px;
  margin-top: 25px;
  color: #000000ff;
  background-color: #9CB4D3;
  border-radius: 20px;
  margin-left: 13px;
  margin-bottom: 5px;
  align-self: flex-start;
  padding: 2px 8px;
  font-family: "ComfortaaRegular";
`;

export const StyledTextInput = styled.TextInput`
  color: #A796A6;
  background-color: #ffffff;
  font-size: 15px;
  width: 235px;
  height: 40px;
  border-radius: 20px;
  padding-left: 15px;
  font-family: "ComfortaaRegular";
  border-width: 1px;
  border-color: transparent;
  ${(props) =>
    props.$hasError &&
    css`
      border-color: #cc3333;
    `}
`;

export const ErrorText = styled.Text`
  color: #cc3333;
  font-size: 12px;
  margin-top: 6px;
  min-height: 16px; /* reserva espaço para evitar salto de layout */
  text-align: left;
  font-family: "ComfortaaRegular";
`;
