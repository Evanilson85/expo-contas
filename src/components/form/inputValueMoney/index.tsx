import { useState } from 'react';
import CurrencyInput, { CurrencyInputProps } from 'react-native-currency-input';

import * as S from './style'

export const InputValueMoney = ({...props}: CurrencyInputProps) => {
  const [value, setValue] = useState<any>(0);

  return (
     <CurrencyInput
      // value={value}
      renderTextInput={textInputProps => <S.valueAll {...textInputProps} label={<S.textInput>Valor total</S.textInput>}  />}
    //   renderText
      {...props}
      // onChangeValue={setValue}
      placeholder='R$ 0,00'
      prefix="R$  "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      onChangeText={(formattedValue) => {
        return formattedValue // R$ +2.310,46
      }}
    />
  )
}

