import { CardBank } from '../cardBank'
import * as S from './style'
//  const navigation = useNavigation<AppNavigatorRoutesProps>();
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../../routes/Stack.routes';

import { useContext } from 'react';
import { createContextSaveCard } from '../../../context';

export const Card = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { cards } = useContext(createContextSaveCard)
  const handleOpenCardCreateScreen = () => {
    navigation.navigate('CardCreateScreen');
  }

  const back = [
      {
          id: 1,
          name: ''
      },
      {
          id: 3,
          name: ''
      },
      {
          id: 4,
          name: ''
      },
  ]

  return (
    <>
      <S.container>
        <S.text> Meus Saldos </S.text>
        {/* {back.map(({id}) => (
            <CardBank    key={id} />
        ))} */}
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
      </S.container>   
      <S.createBtn onPress={handleOpenCardCreateScreen}> 
        <S.textBtn>Adicionar Cartão</S.textBtn>
      </S.createBtn> 
    </>
  )
}