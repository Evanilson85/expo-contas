import styled, { css } from "styled-components/native";

export const container = styled.View`
  margin: 20px 10px;
  gap: 5px;
`;

export const div = styled.View`
  margin: 10px 0;
  ${(props: any) => {
    switch (props.row) {
      case "row":
        return css`
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `;
      case "invert":
        return css`
          align-items: flex-end;
        `;
    }
  }}
`;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 10px;
`;

export const h2 = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 20px;
  margin: 0;
  color: ${({ color }: any) => color};
`;
