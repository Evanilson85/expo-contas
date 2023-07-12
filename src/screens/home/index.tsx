import * as S from './style'
import { Balances } from '../../components/cards/balances';
import { Header } from "../../components/header";
import { View } from 'react-native';
export const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.SubContainer>
          <Balances />
      </S.SubContainer>
    </S.Container>
  );
}

