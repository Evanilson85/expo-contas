import styled from "styled-components/native";

export const container = styled.View`
  /* background-color: red; */
  flex: 1;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`;

export const div = styled.View`
  flex-direction: row;
  /* width: 100%; */
`;

export const button = styled.TouchableOpacity`
  width: 120px;
  height: 80px;
  margin: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

export const text = styled.Text`
  font-size: 20px;
  color: #2e1560;
  font-family: "Roboto_700Bold";
`;
