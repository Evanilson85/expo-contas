import * as S from './style'
import Nubank from '../../../assets/bank/nubank.svg'
import Inter from '../../../assets/bank/banco-inter.svg'
// import logo from '../../../assets/lion.png'
export const CardBank = () => {
  return <>
    <S.container>
      <S.div>
        <S.logo>
          <Inter width={40} height={40} />
        </S.logo>
        {/* <S.logo source={logo}  transition={1000} /> */}
        <S.subDiv>
          <S.name>Banco inter</S.name>
          <S.nameType>Cartão de Credito </S.nameType>
        </S.subDiv>
      </S.div>
      <S.div>
        {/* <S.name>Lim disponivel</S.name> */}
        <S.name>R$ 2.000,00</S.name>
      </S.div>
    </S.container>
  </>
};
