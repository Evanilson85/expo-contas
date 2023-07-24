import * as S from './style'
import { useState, useContext } from 'react'

import { HeaderStack } from '../../components/headerStack'
import { CardBank } from '../../components/cards/cardBank'

import { AppNavigatorRoutesProps } from '../../routes/Stack.routes'
import { useNavigation } from '@react-navigation/native';

import { createContextSaveCard } from '../../context'

export const CardCreateScreen = () => {
  
  const { cards } = useContext(createContextSaveCard)
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [cardsBack, setCardsBack] = useState([])

  const handleOpenCardCreateScreen = () => {
    navigation.navigate('FormCreateCard');
  }


  const banksJson = [
    {
      iconName: 'Inter',
      name: 'Banco Inter'
    },
    {
      iconName: 'Nubank',
      name: 'Nubank'
    },
    {
      iconName: 'Ame',
      name: 'Ame',
    },
    {
      iconName: 'Digio',
      name: 'Digio'
    },
    {
      iconName: 'MercadoPago',
      name: 'Mercado Pago'
    },
  ]


  return (
    <>
         <HeaderStack title='Gerenciar cartões' />
        <S.container>
          <S.SubContainer>
            {cards.map(({name, typeCard, value, icon }) => (
              <CardBank border nameBank={name} type={typeCard} value={value} key={name} nameIcon={icon?.iconName} />
            ))}
            {cards.length < 1 && (
              <S.div>
                <S.text>
                  Nenhum Cartão cadastrado
                </S.text>
              </S.div>
            )}
            {/* <CardBank border/>
            <CardBank border/>
            <CardBank border/> */}

            <S.buttonCreate onPress={handleOpenCardCreateScreen}>
              <S.textButton>
                Criar
              </S.textButton>
            </S.buttonCreate>
          </S.SubContainer>
        </S.container>
    </>
  )
}