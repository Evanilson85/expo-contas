import { StatusBar } from "expo-status-bar";
import * as S from './style'

import { useNavigation } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons';

interface TITLEPROS {
  title: string
}

export const HeaderStack = ({ title }: TITLEPROS) => {

  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='#2E1560'  translucent animated networkActivityIndicatorVisible={true}  />
      <S.header>
          <S.btnGoBack onPress={goBack}>
            <AntDesign name="arrowleft" size={30} color="#fff" />
          </S.btnGoBack>
          <S.title>
            { title }
          </S.title>
      </S.header>
    </>
  )
}