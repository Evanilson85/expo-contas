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

import { ActivityIndicator, MD2Colors  } from 'react-native-paper';
import { InputValueMoney } from '../../../components/form/inputValueMoney'

interface PARAMSJSON {
  iconName: string
  name: string
}

export const FormCreateCard = () => {
  
  const buttonSheet = useRef<BottomSheet>(null)
  // const snapPoints = useMemo(() => ["25%", "40%"], []);
  const snapPoints = useMemo(() => ["25%", "40%", "60%"], []);
  const [open, setOpen] = useState(-1)
  const [openBank, setOpenBank] = useState(false)

  const [valueSelect, setValueSelect] = useState('')
  const [valueSelectIcon, setValueSelectIcon] = useState<PARAMSJSON[]>([])

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

  const openModalSelect = () => {
    setOpenBank(false)
    handleSelectOpen()
  }

  const openModalIcon = () => {
    setOpenBank(true)
    handleSelectOpen()
  }

  const selectIconDefault = (iconName: string, name: string): void => {
    const json = [{ iconName, name }]
    setValueSelectIcon(json)
    handleSelectClose()
  }
  
  const openModalSelected = (iconName: string, name: string): void => {
    openModalIcon()
    const json = [{ iconName, name }]
    setValueSelectIcon(json)
  }

  return <>
    <HeaderStack title='Cartão' />
    <View style={styles.container}>
      <S.form>
        <Input  labelName='Nome do cartão' />
        <S.grupContainer >
          <TouchableWithoutFeedback onPress={openModalSelect}  >
            <View style={{ height: 60, flex: 1}}>
              <Select labelName='Selecione o tipo' edite editable={false} value={valueSelect} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback >
            <View style={{ height: 60, flex: 1}}>
              <Day labelName='Vencimento' keyboardType='numeric' maxLength={2} />
            </View>
          </TouchableWithoutFeedback>
        </S.grupContainer>
        <S.div>
          {valueSelectIcon.length > 0 ? valueSelectIcon.map(({ iconName, name }) => (
            <SelectBanks handleClick={() => openModalSelected(iconName, name)} key={iconName} iconName={iconName} name={name} />
          )): 
          <S.row>
            <S.iconBackgroud onPress={openModalIcon}>
              <AntDesign name="plus" size={24} color="#474646" />
            </S.iconBackgroud>
              <S.label>
                Adicionar icone (Opcional)
              </S.label>
          </S.row>
          }
        </S.div>
        {/* <ValueAll placeholder='Valor' keyboardType='numeric'/>  */}
        <InputValueMoney />
        <S.buttonCreate>
          <S.textButton>
            Salvar
             {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}
          </S.textButton>
        </S.buttonCreate> 
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
        {openBank ? 
          banksJson.map(({ iconName, name }) => (
            <SelectBanks handleClick={() => selectIconDefault(iconName, name)} key={iconName} iconName={iconName} name={name} />
          )) : 
          <BottomSheetSectionList
            sections={sections}
            keyExtractor={({ id }) => id}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
          /> 
        }
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