import { StatusBar } from "expo-status-bar";
import * as S from './style'
import logo from '../../assets/lion.png'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/Stack.routes";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Header = () => {

  const navigation = useNavigation<AppNavigatorRoutesProps>();
    
  const handleOpenNotification = () => {
    navigation.navigate('Notification');
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='#22c55e'  translucent animated networkActivityIndicatorVisible={true}  />
      <S.Container>
        <S.div>
          {/* <S.Logo source={logo} placeholder={blurhash} transition={1000} /> */}
          <S.sub>
             <S.h2>Bem vindo</S.h2>
             <S.text>Evanilson</S.text>
          </S.sub>
        </S.div>
        <S.btnNotification>
          <S.textBtn onPress={handleOpenNotification}>
            <Ionicons name="md-notifications" size={24} color="#fff" />
          </S.textBtn>
        </S.btnNotification>
      </S.Container>
    </>
  )
}


