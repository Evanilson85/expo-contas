import styled from "styled-components/native";

export const container = styled.TouchableOpacity`
  width: 100%;
  /* background-color: ${({ theme }: any) => theme.COLORS.GRAY_100}; */
  min-height: 80px;
  margin: 5px 0;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const logo = styled.Image`
  margin: 0 10px 0 0;
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
