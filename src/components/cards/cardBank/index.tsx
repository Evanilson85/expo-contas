import * as S from './style'
import logo from '../../../assets/lion.png'
export const CardBank = () => {
  return <>
    <S.container>
      <S.div>
        <S.logo source={logo}  transition={1000} />
        <S.subDiv>
          <S.name>Banco inter</S.name>
          <S.nameType>Cartão de Credito </S.nameType>
        </S.subDiv>
      </S.div>
      <S.div>
        <S.name>R$ 2000</S.name>
      </S.div>
    </S.container>
  </>
};
