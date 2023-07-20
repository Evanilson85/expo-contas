import * as S from './style'
import  { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";

interface PROPS {
  isOpenIndex: number
}

export const BottomSheetApp = ({ isOpenIndex }: PROPS) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true)

  const sections = [
    {
      data: [
        'teste 1',
        'teste 12',
        'teste 13',
        'teste 14',
      ],
      title: 'Section 23'
    }
  ]
  // const sectionds = useMemo(() => Array(1).fill(0).map((_, index) => ({ title: `Section ${index}`, data: Array(10).fill(0).map((_, index) => `Item ${index}`),})), []);
  const snapPoints = useMemo(() => ["25%", "50%"], []);


  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    // console.log("teste", index, isOpen);
    if(index != 1) {
      console.log("1", isOpen);
      setIsOpen(true)
      return
    }
    console.log("2", isOpen);
    setIsOpen(false)
  }, []);
  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderSectionHeader = useCallback(
    ({ section }: any) => (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    ),
    []
  );
  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  
  return (
    <S.container activeModal={isOpen}>
      {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}
      <BottomSheet
        ref={sheetRef}
        index={isOpenIndex}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enablePanDownToClose
      >
        <BottomSheetSectionList
          sections={sections}
          keyExtractor={(id) => id}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </S.container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    opacity: 1,
    backgroundColor: 'gray',
  },
  contentContainer: {
    backgroundColor: "white",
  },
  sectionHeaderContainer: {
    backgroundColor: "white",
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
