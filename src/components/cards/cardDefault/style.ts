import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const value = width * 0.8 - 10;

export const container = styled.View`
  height: 200px;
  border-radius: 10px;
  background-color: #d3d3d3;
  padding: 20px;
  justify-content: space-between;
  margin: 20px auto;
  width: 100%;
`;

export const div = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const divCol = styled.View``;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 20px;
  color: #2e1560;
`;

export const subText = styled.Text`
  /* font-family: "Roboto_700Bold"; */
  font-family: "Roboto_400Regular";
  font-size: 10px;
  color: #fff;
`;
