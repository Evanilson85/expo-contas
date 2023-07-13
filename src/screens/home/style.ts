import styled from "styled-components/native";

export const Container = styled.ScrollView`
  /* background-color: ${({ theme }: any) => theme.COLORS.DEFAULT}; */
  background-color: ${({ theme }: any) => theme.COLORS.PAGE};
  flex: 1;
  margin-bottom: 60px;
`;
//! ajuste de largura
export const SubContainer = styled.View`
  padding: 0 24px;
  margin-top: -39px;
  position: relative;
  z-index: 133;
  margin-bottom: 30px;
  /* background-color: red; */
`;

export const text = styled.Text`
  color: aqua;
`;
