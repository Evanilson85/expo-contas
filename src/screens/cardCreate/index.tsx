import * as S from './style'
import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import { Dimensions, Alert, FlatList, Text, View, TouchableNativeFeedback } from "react-native";

import { HeaderStack } from '../../components/headerStack'
import { CardBank } from '../../components/cards/cardBank'
import { ContainerCard } from '../../components/cards/containerCard'
import { List } from './list';

import { AppNavigatorRoutesProps } from '../../routes/Stack.routes'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { createContextSaveCard } from '../../context'

import { ICARDS } from '../../@interfaces'

import Add from '../../assets/tabs/addWhite.svg'

const { width } = Dimensions.get("window");

export const CardCreateScreen = () => {

  const teste = [
    {
      id: '#1',
      name: 'Evanilson',
      color: '#5b259f',
      type: 'credito',
      maturity: '21',
      value: '2.322,20',
      expense: '1.200,00'
    },
    {
      id: '#2',
      name: 'Laura Freitas',
      color: '#259f44',
      type: 'credito',
      maturity: '21',
      value: '322,20',
      expense: '1.200,00'
    },
    {
      id: '#3',
      name: 'Maya',
      color: '#25379f',
      type: 'credito',
      maturity: '21',
      value: '1.002,20',
      expense: '1.200,00'
    },
    {
      id: '#4',
      name: 'Mia',
      color: '#db1414',
      type: 'credito',
      maturity: '21',
      value: '12,20',
      expense: '1.200,00'
    },
  ]

  const { getCard } = useContext(createContextSaveCard)
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [cardsBack, setCardsBack] = useState<ICARDS[]>([])
  const [show, setShow] = useState(teste[0])
  const viewabilityConfigCallbackPairs = useRef(({ viewableItems }: any) => {
    setShow(teste[viewableItems[0].index])
  });

  useEffect(() => {
     console.log(show)
  }, [show])

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

  const renderPlace = ({ item }: any) => (<S.buttonCard>
    <ContainerCard name={item.name} color={item.color} />
  </S.buttonCard>
  ) 

  return (
    <>
      <HeaderStack title='Gerenciar cartões' />
      <S.container>
        <View style={{ height: 230 }}>
          {
            teste.length > 1 ? 
              <FlatList
                data={teste}
                renderItem={renderPlace}
                keyExtractor={item => String(item.id)}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                scrollEventThrottle={16}
                decelerationRate='fast'
                snapToOffsets={[...Array(teste.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
                onViewableItemsChanged={viewabilityConfigCallbackPairs?.current}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
              /> : <S.buttonCard activeOpacity={.7}>
                <ContainerCard name={show.name} amountOne color='#5b259f' /> 
              </S.buttonCard> 
          }
        </View>
        <List name={show.name} type={show.type} expense={show.expense} maturity={show.maturity} value={show.value} currentValue='200,00'/>
        <S.SubContainer>
          {/* {cardsBack.map(({name, typeCard, value, icon }) => (
            <CardBank border nameBank={name} type={typeCard} value={value} key={name} nameIcon={icon?.iconName} />
          ))}
          {cardsBack.length < 1 && (
            <S.div>
              <S.text>
                Nenhum Cartão cadastrado
              </S.text>
            </S.div>
          )} */}
          <S.buttonCreateCard onPress={handleOpenCardCreateScreen}>
            <S.textButton>
              <Add />
            </S.textButton>
          </S.buttonCreateCard>
        </S.SubContainer>
      </S.container>
    </>
  )
}