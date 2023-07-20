import styled from "styled-components/native";

interface PROPS {
  activeModal: boolean;
}

export const container = styled.View<PROPS>`
  flex: 1;
  padding: 0;
  background-color: gray;
  /* opacity: 0.2; */
  opacity: ${({ activeModal }: PROPS) => (activeModal ? 0 : 2)};
`;
