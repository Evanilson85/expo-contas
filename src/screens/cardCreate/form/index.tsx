import { View, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native'
import * as S from './style'
import { HeaderStack } from '../../../components/headerStack'
import { Input } from '../../../components/form/input'
import { Select } from '../../../components/form/select'
import { Day } from '../../../components/form/day'
import { ValueAll } from '../../../components/form/value'
import Time from '../../../components/form/timer'

import { AntDesign, Entypo } from '@expo/vector-icons';

import { useRef, useMemo, useState, useCallback } from 'react'

import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { SelectBanks } from '../../../components/form/selectBanks'

export const FormCreateCard = () => {
  
  const buttonSheet = useRef<BottomSheet>(null)
  // const snapPoints = useMemo(() => ["25%", "40%"], []);
  const snapPoints = useMemo(() => ["25%", "60%"], []);
  const [open, setOpen] = useState(-1)

  const [valueSelect, setValueSelect] = useState('')
  const [valueSelectIcon, setValueSelectIcon] = useState([ 
    // {
    //   iconName: 'Inter',
    //   name: 'Banco Inter'
    // },
  ])

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


  const handleSelect = ({ name }: any) => {
    setValueSelect(name)
    handleSelectClose() 
  }

  const renderSectionHeader = useCallback(({ section }: any) => (
    <S.sheetHeader>
        <S.sheetHeaderText>Selecione o tipo de Cartão</S.sheetHeaderText>
      </S.sheetHeader>
    ),[]
  );
  
  const renderItem = useCallback(({ item }: any) => (
    <S.sheetItemsSelect key={item.name} onPress={() => handleSelect(item)}> 
      {item.icon}
      <S.sheetItemsText>{item.name}</S.sheetItemsText> 
    </S.sheetItemsSelect>
    ), []
  );

  const sections = [
    {
      data: [
       {
        id: '1',
        name: 'Cartão de Credito',
        icon: <AntDesign name="creditcard" size={24} color="black" />
       },
      { 
        id: '2',
        name:  'Cartão de Debito',
        icon: <Entypo name="credit-card" size={24} color="black" />
       }
      ],
    },
  ]

  const handleSelectOpen = () => {
    const isVisible = Keyboard.isVisible()
    if(isVisible) {
      Keyboard.dismiss()
    }
    setOpen(1)
  }

  const handleSelectClose = () => {
    setOpen(-1)
    buttonSheet.current?.close()
  }


  return <>
    <HeaderStack title='Cartão' />
    <View style={styles.container}>
      <S.form>
        <Input placeholder='Nome do cartão' />
        <S.grupContainer >
          <TouchableWithoutFeedback onPress={handleSelectOpen}  >
            <View style={{ height: 80, flex: 1}}>
              <Select placeholder='Selecione o tipo' edite editable={false} value={valueSelect} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectOpen}  >
            <View style={{ height: 80, flex: 1}}>
              <Day placeholder='Vencimento' keyboardType='numeric' maxLength={2} />
            </View>
          </TouchableWithoutFeedback>
        </S.grupContainer>
        
        <S.div>
          {valueSelectIcon.length > 0 ? valueSelectIcon.map(({ iconName, name }) => (
            <SelectBanks key={iconName} iconName={iconName} name={name} />
          )):  
          <S.iconBackgroud>
            <AntDesign name="plus" size={24} color="#b1aeae" />
          </S.iconBackgroud>}
        </S.div>

        <ValueAll placeholder='Valor' keyboardType='numeric'/> 
        <S.buttonCreate>
          <S.textButton>
            Salvar
          </S.textButton>
        </S.buttonCreate>     
          {/* <Time /> */}
      </S.form> 
    <S.backContainer open={open == 1 ? true : false} onPress={handleSelectClose}>
      <BottomSheet 
        ref={buttonSheet} 
        index={open} 
        snapPoints={snapPoints} 
        enablePanDownToClose 
        onClose={() => handleSelectClose()}
        style={{ backgroundColor: '#fff'}}
        >
           {banksJson.map(({ iconName, name }) => (
            <SelectBanks key={iconName} iconName={iconName} name={name} />
          ))}
        {/* <BottomSheetSectionList
          sections={sections}
          keyExtractor={({ id }) => id}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
        /> */}
      </BottomSheet>

    </S.backContainer>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});