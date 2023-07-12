import styled, { css } from "styled-components/native";
import { StatusBar } from "react-native";

const heightStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export const Container = styled.View`
  background-color: ${(props: any) => props.theme.COLORS.DEFAULT};
  height: 150px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Math.round(heightStatusBar)}px;
`;

export const text = styled.Text`
  margin: 0 10px;
  /* color: ${(props: any) => props.theme.COLORS.WHITE}; */
  font-family: "Roboto_700Bold";
  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const h2 = styled.Text`
  margin: 0 10px;
  font-size: 14px;
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.WHITE};
`;

export const Logo = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 5px;
`;

export const div = styled.View`
  display: flex;
  flex-direction: row;
`;

export const sub = styled.View`
  display: flex;
`;

export const btnNotification = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;

export const textBtn = styled.Text`
  font-size: 14px;
  font-family: "Roboto_400Regular";
  color: ${(props: any) => props.theme.COLORS.WHITE};
`;
