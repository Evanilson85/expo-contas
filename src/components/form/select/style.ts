import styled from "styled-components/native";

export const select = styled.TextInput`
  margin: 20px 0;
  height: 60px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto_700Bold";
  border: 1px solid #d3d3d3;
  flex: 1;
  margin: 10px 2px;
  color: ${(edit: any) => (edit ? "#000" : "#999")};
`;
