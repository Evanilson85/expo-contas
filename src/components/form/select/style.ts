import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const select = styled(TextInput)`
  background-color: ${({ theme }: any) => theme.COLORS.Input};
  /* margin: 20px 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto_700Bold";
  border: 1px solid #d3d3d3;
  flex: 1;
  margin: 10px 2px;
  color: ${(edit: any) => (edit ? "#000" : "#999")}; */
`;

export const textInput = styled.TextInput`
  font-size: 14px;
  font-family: "Roboto_700Bold";
`;
