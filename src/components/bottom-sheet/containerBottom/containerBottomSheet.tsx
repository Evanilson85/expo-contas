import React, { useCallback, useMemo, useRef, useContext } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import * as S from './style'
import { List } from '../../../screens/cardCreate/list';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createContextSaveCard } from '../../../context'


export const ContainerBottomSheet = ({ children, open, onclose, data }: any) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['100%', '100%'], []);
  const { deleteCards } = useContext(createContextSaveCard)
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const handleSelectClose = () => {
    onclose(-1)
    bottomSheetRef.current?.close()
  }

  return (
    <S.container color={open == 1 ? '#4e4b4b' : '#000'}>
      {children}
        <BottomSheet
          ref={bottomSheetRef}
          index={open}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose 
          onClose={() => handleSelectClose()}
          style={{ padding: 20, backgroundColor: '#fff'}}
        >
          <List name={data.name} type={data.typeCard} expense={data.expense} maturity={data.maturity} value={data.value} currentValue='20000'/>
          <S.div row>
            <S.button color='#f87171' onPress={() => deleteCards(data)}>
                <MaterialCommunityIcons name="delete" size={34} color="#ffffff" />
              <S.text>
                Deletar
              </S.text>
            </S.button>
            <S.button color='#86efac'>
                <Feather name="check" size={34} color="#ffffff" />
              <S.text>
                 Salvar
              </S.text>
            </S.button>
          </S.div>
        </BottomSheet>
    </S.container>
  );
};