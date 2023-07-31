import * as S from './style'
import { useContext, useCallback, useState } from 'react';
import { CardBank } from '../cardBank'

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../../routes/Stack.routes';

import { createContextSaveCard } from '../../../context';

export const Card = () => {

  const [getCards, setGetCards] = useState([])
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { getCard } = useContext(createContextSaveCard)

  useFocusEffect(useCallback(() => {
    getStorageCardAll()
  }, []))

  async function getStorageCardAll () {
    try {
      const getAll = await getCard() 
      setGetCards(getAll as any)
      console.log(getAll)

    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenCardCreateScreen () {
    navigation.navigate('CardCreateScreen');
  }

  return (
    <>
      <S.container>
        <S.text> Meus Saldos </S.text>
         {getCards.map(({name, typeCard, value, icon }) => (
            <CardBank border nameBank={name} type={typeCard} value={value} key={name} nameIcon={icon?.iconName} />
          ))}
          {getCards.length < 1 && (
            <S.div>
              <S.text>
                Nenhum Cartão cadastrado
              </S.text>
            </S.div>
          )}
      </S.container>   
      <S.createBtn onPress={handleOpenCardCreateScreen}> 
        <S.textBtn>Adicionar Cartão</S.textBtn>
      </S.createBtn> 
    </>
  )
}