import * as S from './style'
import { TextInputProps } from 'react-native-paper';

interface Props extends TextInputProps {
  labelName: string
}

// type Props = TextInputProps

export const Input = ({ labelName, ...props}: Props) => {
  return <>
    <S.Input 
        mode="outlined"
        outlineColor='#d3d3d3'
        activeOutlineColor='#474646'
        style={{ fontSize : 16}}
        label={<S.textInput>{labelName}</S.textInput>}
        {...props} 
    />
  </>
}
