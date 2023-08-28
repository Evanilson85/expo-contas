import * as S from './style'
import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import { Dimensions, Alert, FlatList, Text, View,  } from "react-native";

import { HeaderStack } from '../../components/headerStack'
import { CardBank } from '../../components/cards/cardBank'
import { ContainerCard } from '../../components/cards/containerCard'
import { List } from './list';
import { CardDefault } from '../../components/cards/cardDefault';

import { ContainerBottomSheet } from '../../components/bottom-sheet/containerBottom/containerBottomSheet';

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
  const [showIndex, setShowIndex] = useState<number>(0)
  const [open, setOpen] = useState(-1)

  const viewabilityConfigCallbackPairs = useRef((item: any) => {
    const { viewableItems } = item
    // cardsBack[viewableItems[0].index passando o meu objto completo da minha lista ex: setShow([cardsBack[viewableItems[0].index]]) 
    setShowIndex(viewableItems[0].index)
  });

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

  const handleCard = () => {
    setOpen(1)
  }

  const closeModal = () => {
    setOpen(-1)
  }

  const renderPlace = ({ item }: any) => (<S.buttonCard onPress={handleCard}>
    <ContainerCard name={item.name} color={open == 1 ? '#1e293b' : item.color} />
  </S.buttonCard>
  ) 

  return (
    <>
      <HeaderStack title='Gerenciar cartões' />
      <ContainerBottomSheet open={open} onclose={closeModal} data={cardsBack.length > 0 ? cardsBack[showIndex]: ''}> 
        <S.container color={open == 1 ? '#4e4b4b' : '#fff'}>
          {cardsBack.length > 0 ?
           <View style={{ height: 230 }}>
            {cardsBack.length > 1 ? 
              <FlatList
                data={cardsBack}
                renderItem={renderPlace}
                keyExtractor={item => String(item.id)}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                scrollEventThrottle={16}
                decelerationRate='fast'
                snapToOffsets={[...Array(cardsBack.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
                onViewableItemsChanged={viewabilityConfigCallbackPairs?.current}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
              /> : <S.buttonCard onPress={handleCard}>
                <ContainerCard name={cardsBack[showIndex]?.name} amountOne color='#5b259f' /> 
              </S.buttonCard> 
            }
          </View> : <CardDefault />
        }
          {cardsBack.length > 0 && <List name={cardsBack[showIndex]?.name} type={cardsBack[showIndex]?.typeCard} expense={cardsBack[showIndex]?.expense} maturity={cardsBack[showIndex]?.maturity} value={'200'} currentValue='100.22'/>}

          <S.SubContainer>
            {cardsBack.length < 1 && (
              <S.div>
                <S.text>
                  Nenhum Cartão cadastrado
                </S.text>
              </S.div>
            )}
            <S.buttonCreateCard onPress={handleOpenCardCreateScreen}>
              <S.textButton>
                <Add />
              </S.textButton>
            </S.buttonCreateCard>
          </S.SubContainer>

        </S.container>
      </ContainerBottomSheet>
    </>
  )
}