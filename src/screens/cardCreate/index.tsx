import * as S from './style'
import { useState, useContext, useCallback } from 'react'

import { HeaderStack } from '../../components/headerStack'
import { CardBank } from '../../components/cards/cardBank'

import { AppNavigatorRoutesProps } from '../../routes/Stack.routes'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { createContextSaveCard } from '../../context'
import { Alert } from 'react-native'

export const CardCreateScreen = () => {
  
  const { getCard } = useContext(createContextSaveCard)
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [cardsBack, setCardsBack] = useState([])

  const handleOpenCardCreateScreen = () => {
    navigation.navigate('FormCreateCard');
  }

  useFocusEffect(useCallback(() => {
    getCardSave()
  },[]))

  async function getCardSave () {
    try {
      const result = await getCard()
      setCardsBack(result as any)
    } catch (error) {
      Alert.alert('Error ao carregar')
    }
  }

  return (
    <>
        <HeaderStack title='Gerenciar cartões' />
        <S.container>
          <S.SubContainer>
            {cardsBack.map(({name, typeCard, value, icon }) => (
              <CardBank border nameBank={name} type={typeCard} value={value} key={name} nameIcon={icon?.iconName} />
            ))}
            {cardsBack.length < 1 && (
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