import styled from "styled-components/native";

export const container = styled.View`
  min-height: 40px;
  width: 100%;
  margin: 30px 0 10px;

  border-top-width: 2px;
  border-color: ${(props: any) => props.theme.COLORS.ROW};
  border-bottom-color: transparent;
  border-style: solid;

  padding: 20px 0 5px;
`;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: 15px;
`;

export const createBtn = styled.TouchableOpacity`
  background-color: #bbf7d0;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const textBtn = styled.Text`
  color: #065f46;
  font-family: "Roboto_700Bold";
`;
