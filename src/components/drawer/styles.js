import styled from "styled-components/native";

export const DrawerContainer = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px 16px 12px 16px;
  background-color: #cadaed;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  margin-bottom: 8px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-family: "MarmeladRegular";
  color: #22304a;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 8px;
`;

export const Footer = styled.View`
  padding: 16px;
  border-top-width: 1px;
  border-top-color: #e0e0e0;
`;
