import styled from "styled-components/native";

export const container = styled.View`
  min-height: 100px;
  background-color: ${(props: any) => props.theme.COLORS.WHITE};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const containerValue = styled.View`
  border: none;
  /* border-left: 2px solid red; */
  padding: 10px;
  border-color: #234252;
  border-left-width: 4px;
`;

export const textValue = styled.Text`
  color: #000;
  font-size: 24px;
`;
