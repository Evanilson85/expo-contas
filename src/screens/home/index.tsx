import * as S from './style'
import { Balances } from '../../components/balances';
import { Header } from "../../components/header";
import { Faturas } from '../../components/faturas';
import { History } from '../../components/history';

export const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.SubContainer>
            <Balances />
        </S.SubContainer>
        <S.SubContainer>
          <Faturas />
        </S.SubContainer>
        <S.SubContainer>
          <History />
        </S.SubContainer>
      </S.Container>
    </>
  );
}

