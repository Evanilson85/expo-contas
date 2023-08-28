import styled, { css } from "styled-components/native";

export const container = styled.View`
  background-color: ${(props: any) => props.color};
  flex: 1;
  padding: 0;
`;

export const div = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 90px;
  margin: 0 auto;
  left: 40%;
  gap: 40px;
  ${({ row }: any) => css`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    left: 0;
  `}
`;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  margin: 0 0 0 10px;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  text-align: center;
`;

export const button = styled.TouchableOpacity`
  background-color: ${({ color }: any) => color};
  height: 44px;
  /* width: 64px; */
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  flex: 1;
`;
