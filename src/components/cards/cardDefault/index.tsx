import * as S from './style'
import Chip from '../../../assets/bank/chip.svg'
import Visa from '../../../assets/bank/sad.svg'

export const CardDefault = () => {
  return (
    <>
      <S.container >
        <S.div>
          <Chip /> 
          <Visa /> 
        </S.div>
        <S.div>
          <S.divCol>
            <S.text>Nenhum cartão cadastrado</S.text> 
            <S.subText></S.subText> 
          </S.divCol>
          {/* <S.text> 
            <S.subText> venc.</S.subText>  
          </S.text>  */}
        </S.div>
      </S.container>
    </>
  )
}