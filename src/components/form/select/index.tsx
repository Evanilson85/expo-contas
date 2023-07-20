import * as S from './style'
import { TextInputProps } from "react-native";

// type Props = TextInputProps
interface Props extends TextInputProps {
  edite?: boolean
}

export const Select = ({edite = false, ...props}: Props) => {
  return (
    <>
      <S.select {...props} edit={edite}/>
    </>
  )
}
