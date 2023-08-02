import styled, { css } from "styled-components/native";
import { CardBank } from "../../components/cards/cardBank";

export const div = styled.View`
  flex: 1;
  /* background-color: #000; */
  /* opacity: 1; */
  align-items: center;
  margin: 50px 0;
`;

export const text = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 14px;
  color: ${({ theme }: any) => theme.COLORS.GRAY_400};
`;

export const container = styled.View`
  /* background-color: ${({ theme }: any) => theme.COLORS.PAGE}; */
  background-color: ${({ theme }: any) => theme.COLORS.WHITE};
  flex: 1;
  padding: 0 20px;
  /* padding: 0 24px; */
`;

export const SubContainer = styled.View`
  align-items: center;
  margin: 20px;
`;

export const containerCardBack = styled(CardBank)`
  background: red !important;
  border-color: ${(props: any) => props.theme.COLORS.ROW};
  border-bottom-width: 2px;
  border-top-color: transparent;
  border-style: solid;
`;

export const CardCreate = styled.TouchableOpacity`
  /* background-color: #bbf7d0; */
  background-color: ${(props: any) => props.theme.COLORS.CardDEFAULT};
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const textButton = styled.Text`
  font-family: "Roboto_700Bold";
  color: ${(props: any) => props.theme.COLORS.BUTTONDEFAULTTEXT};
`;

export const buttonCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: transparent;
  height: auto;
  margin: 10px 0;
`;

export const buttonCreateCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #5b259f;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
