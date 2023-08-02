import { View, Text } from 'react-native'
import * as S from './style'

interface PROPS {
  name: string
  type: string
  maturity: string
  value: string
  expense: string 
  currentValue: string
}

export const List = ({ name, type, maturity, value, expense = '1.000,20', currentValue = '300,00'} :PROPS) => {
  return(
    <S.container>
      <S.div row='row'>
        <S.div>
          <S.text>Nome:</S.text>
          <S.h2 color='#1e293b'>{name}</S.h2>
        </S.div>
        <S.div row='invert'>
          <S.text>Tipo:</S.text>
          <S.h2 color='#1e293b'>{type}</S.h2>
        </S.div>
      </S.div>

      <S.div>
        <S.text>
          Vencimento:
        </S.text>
        <S.h2 color='#1e293b'>{maturity}</S.h2>
      </S.div>

      <S.div row='row'>
        <S.div>
          <S.text>Valor:</S.text>
          <S.h2 color='#22c55e'>R$ {value}</S.h2>
        </S.div>
        <S.div row='invert'>
          <S.text>Despesa:</S.text>
            <S.h2 color='#ef4444'>R$ {expense}</S.h2>
        </S.div>
      </S.div>
      <S.div>
        <S.text>
          Saldo Atual:
        </S.text>
         <S.h2 color='#0ea5e9'>R$ {currentValue}</S.h2>
      </S.div>
    </S.container>  
  )
}