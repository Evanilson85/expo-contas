import * as S from './style'
import { TextInputProps } from "react-native";

// type Props = TextInputProps
interface Props extends TextInputProps {
  edite?: boolean
  labelName?: string
}

export const Select = ({edite = false, labelName, ...props}: Props) => {
  return (
    <>
      <S.select
        mode="outlined"
        outlineColor='#d3d3d3'
        activeOutlineColor='#a1a0a0'
        style={{ fontSize : 16}}
        label={<S.textInput>{labelName}</S.textInput>}
        {...props} edit={edite}
      />
    </>
  )
}
