import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const valueAll = styled(TextInput).attrs({
  mode: "outlined",
  outlineColor: "#d3d3d3",
  activeOutlineColor: "#474646",
})`
  background-color: ${({ theme }: any) => theme.COLORS.Input};
`;

export const textInput = styled.TextInput`
  font-size: 14px;
  padding: 20px;
  font-family: "Roboto_700Bold";
`;
