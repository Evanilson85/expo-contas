import { View, StyleSheet } from 'react-native'
import Add from '../../assets/tabs/addWhite.svg'

export const ButtonTab = () => {
  return (
    <>
      <View style={style.container}>
        <Add />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#8462B7',
    borderRadius: 50,
    height: 30,
    width: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: -0
  }
})