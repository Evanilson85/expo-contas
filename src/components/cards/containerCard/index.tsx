import * as S from './style'
import Chip from '../../../assets/bank/chip.svg'
import Visa from '../../../assets/bank/visa.svg'

interface PROPS {
  name: string
  amountOne?: boolean
  color: string
}

export const ContainerCard = ({ name, amountOne, color }: PROPS) => {
  return (
    <>
      <S.container amountOne={amountOne ? 'one' : ''} color={color} >
        <S.div>
          <Chip /> 
          <Visa /> 
        </S.div>
        <S.div>
          <S.divCol>
            <S.text>{name}</S.text> 
            <S.subText>Cartão de Credito</S.subText> 
          </S.divCol>
          <S.text> 23 
            <S.subText> venc.</S.subText>  
          </S.text> 
        </S.div>
      </S.container>
    </>
  )
}