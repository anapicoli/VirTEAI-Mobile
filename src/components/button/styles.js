import styled, { css } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 15px;
  width: 160px;
  height: 42px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$variant === "submit"
      ? css`
          background-color: #22304a;
        `
      : css`
          background-color: #9cb4d3;
        `}
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Title = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: "MarmeladRegular";
  font-size: 16px;
`;
