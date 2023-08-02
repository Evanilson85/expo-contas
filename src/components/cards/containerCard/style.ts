import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const value = width * 0.8 - 10;

export const container = styled.View`
  height: 200px;
  border-radius: 10px;
  background-color: ${({ color }: any) => color};
  padding: 20px;
  justify-content: space-between;
  ${(props: any) => {
    switch (props.amountOne) {
      case "one":
        return css`
          margin: 20px auto;
          width: 100%;
        `;
      default:
        return css`
          width: ${Math.round(value)}px;
          margin: 20px 5px;
        `;
    }
  }}
`;

export const div = styled.View`
  /* background-color: red; */
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const divCol = styled.View``;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  /* font-family: "Roboto_400Regular"; */
  font-size: 20px;
  color: #fff;
`;

export const subText = styled.Text`
  /* font-family: "Roboto_700Bold"; */
  font-family: "Roboto_400Regular";
  font-size: 10px;
  color: #fff;
`;
