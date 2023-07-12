import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.PAGE};
  padding: 0 24px;
`;

export const text = styled.Text`
  color: aqua;
`;
