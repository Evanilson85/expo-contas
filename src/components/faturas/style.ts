import styled, { css } from "styled-components/native";

interface Props {
  row: boolean;
}

export const div = styled.View<Props>`
  margin: 10px 0;
  height: 70px;
  align-items: center;
  flex-direction: ${({ row }: any) => (row ? "row" : "column")};
  ${({ between }: any) =>
    between &&
    css`
      justify-content: ${between};
    `}
`;

export const logo = styled.Image`
  margin: 0 10px 0 0;
`;

export const Container = styled.View`
  min-height: 100px;
  background-color: ${(props: any) => props.theme.COLORS.WHITE};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const button = styled.TouchableOpacity`
  /* background-color: red; */
`;

export const title = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: 15px;
`;

export const containerTitles = styled.View`
  margin: 0 15px;
`;

export const titleName = styled.Text``;

export const subTitleName = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.GRAY_300};
  font-size: 10px;
`;

export const valueNumber = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.RED};
  font-size: 15px;
`;
