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
  border-color: ${(props: any) => props.theme.COLORS.DEFAULT};
  padding: 10px;
  border-left-width: 3px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
`;

export const textValue = styled.Text`
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: 30px;
  font-family: "Roboto_700Bold";
`;

export const subValue = styled.Text`
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: 14px;
  font-family: "Roboto_700Bold";
`;

export const btnEye = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  top: -30px; */
`;
