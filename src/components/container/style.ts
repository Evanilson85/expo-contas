import styled from "styled-components/native";

export const Container = styled.View`
  min-height: 100px;
  background-color: ${(props: any) => props.theme.COLORS.WHITE};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;
