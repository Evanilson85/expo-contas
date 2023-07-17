import styled, { css } from "styled-components/native";
import { StatusBar } from "react-native";

const heightStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export const header = styled.View`
  height: 120px;
  padding: 20px 20px 0;
  padding-top: ${Math.round(heightStatusBar)}px;
  background-color: ${(props: any) => props.theme.COLORS.DEFAULT};
`;

export const btnGoBack = styled.TouchableOpacity`
  position: relative;
  top: 34px;
  z-index: 3;
`;

export const title = styled.Text`
  text-align: center;
  position: relative;
  font-size: 18px;
  font-family: "Roboto_700Bold";
  margin-top: 5px;
  ${({ theme }: any) => css`
    /* font-size: ${theme.FONT_SIZE.XL}px; */
    color: ${theme.COLORS.WHITE};
  `};
`;
