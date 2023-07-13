import styled, { css } from "styled-components/native";

interface Props {
  row: boolean;
}

interface PropsColor {
  color: "spending" | "input";
  theme: any;
}

export const div = styled.View<Props>`
  margin: 10px 0;
  height: 70px;
  align-items: center;
  flex-direction: ${({ row }: any) => (row ? "row" : "column")};
  border-color: ${(props: any) => props.theme.COLORS.ROW};
  border-bottom-width: 2px;
  border-top-color: transparent;
  border-style: solid;

  ${({ between }: any) =>
    between &&
    css`
      justify-content: ${between};
    `}
`;

export const Container = styled.View`
  min-height: 100px;
  background-color: ${(props: any) => props.theme.COLORS.WHITE};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const title = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: ${({ size }: any) => (size === "small" ? "15px" : "10px")};
`;

export const containerTitles = styled.View`
  margin: 0 15px;
`;

export const titleName = styled.Text``;

export const subTitleName = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${({ color, theme }: PropsColor) =>
    color === "input" ? theme.COLORS.DEFAULT : theme.COLORS.RED};
  font-size: 15px;
  margin: 0 0 0 10px;
`;

export const valueNumber = styled.Text``;

export const divContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
