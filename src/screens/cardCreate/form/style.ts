import styled, { css } from "styled-components/native";

export const form = styled.View`
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 2;
  gap: 15px;
`;

export const grupContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;

export const buttonCreate = styled.TouchableOpacity`
  background-color: #bbf7d0;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const textButton = styled.Text`
  font-family: "Roboto_700Bold";
`;

export const sheetHeader = styled.View`
  /* background-color: red; */
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const sheetHeaderText = styled.Text`
  font-size: 18px;
  font-family: "Roboto_700Bold";
`;

export const sheetItemsSelect = styled.TouchableOpacity`
  height: 50px;
  padding: 0 10px;
  margin: 10px 0 0;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const sheetItemsText = styled.Text`
  font-size: 15px;
  font-family: "Roboto_400Regular";
`;

export const backContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 1;
  align-items: center;
  ${({ open }: any) =>
    open &&
    css`
      background-color: black;
      opacity: 0.7;
      z-index: 30;
    `}
`;

export const div = styled.View`
  margin: 0px 0 0px;
`;

export const row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const iconBackgroud = styled.TouchableOpacity`
  /* border: 2px dashed #d3d3d3; */
  border: 2px dashed #474646;
  border-radius: 50px;
  height: 45px;
  align-items: center;
  justify-content: center;
  width: 45px;
`;

export const label = styled.Text`
  font-size: 14px;
  font-family: "Roboto_700Bold";
  color: #474646;
`;
