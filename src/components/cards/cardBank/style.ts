import styled, { css } from "styled-components/native";

export const container = styled.TouchableOpacity`
  width: 100%;
  /* background-color: ${({ theme }: any) => theme.COLORS.GRAY_100}; */
  min-height: 80px;
  margin: 5px 0;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;

  ${({ border }: any) =>
    border &&
    css`
      border-color: ${(props: any) => props.theme.COLORS.ROW};
      border-bottom-width: 2px;
      border-style: solid;
    `}/* border-top-color: transparent; */
`;

export const logo = styled.View`
  margin: 0 10px 0 0;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.COLORS.ROW};
`;

export const name = styled.Text`
  font-family: "Roboto_700Bold";
`;

export const nameType = styled.Text`
  font-family: "Roboto_400Regular";
`;

export const div = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const subDiv = styled.View``;

export const btnText = styled.TouchableOpacity``;

export const text = styled.Text`
  text-transform: uppercase;
  font-family: "Roboto_700Bold";
  font-size: 20px;
`;
