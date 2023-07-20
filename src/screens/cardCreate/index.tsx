import * as S from './style'
import { HeaderStack } from '../../components/headerStack'
import { CardBank } from '../../components/cards/cardBank'
import { BottomSheetApp } from '../../components/bottom-sheet'

import { AppNavigatorRoutesProps } from '../../routes/Stack.routes'
import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native'

import { useState } from 'react'

export const CardCreateScreen = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  
  const handleOpenCardCreateScreen = () => {
      navigation.navigate('FormCreateCard');
  }
  const [statusModal, setStatusModal] = useState(-1)

  const handleChangeModal = () => {
    handleOpenCardCreateScreen()
    // setStatusModal((state) => state === 1 ? -1 : 1)
  }

  return (
    <>
         <HeaderStack title='Gerenciar cartões' />
        <S.container>
          <S.SubContainer>
            <CardBank border />
            <CardBank border/>
            <CardBank border/>
            <CardBank border/>

            <S.buttonCreate onPress={handleChangeModal}>
              <S.textButton>
                Criar
              </S.textButton>
            </S.buttonCreate>
          </S.SubContainer>
        </S.container>
        {/* {statusModal === 1 && <BottomSheetApp isOpenIndex={statusModal} />}  */}
    </>
    // <S.tes>
    //   <View style={{ flex: 1}}>
    //   </View>
    //   {/* <S.container>
    //   </S.container> */}
    // </S.tes>
  )
}