import * as S from './style'
import { TextInputProps } from 'react-native-paper';

interface Props extends TextInputProps {
  labelName: string
}

export const Day = ({labelName, ...props }: Props) => {
  return <>
    <S.day 
      label={<S.textInput>{labelName}</S.textInput>} 
      {...props} 
    />
  </>
}