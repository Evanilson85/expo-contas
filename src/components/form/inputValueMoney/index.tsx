import { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';

import * as S from './style'

export const InputValueMoney = () => {
  const [value, setValue] = useState<any>(0);

  return (
     <CurrencyInput
      value={value}
      renderTextInput={textInputProps => <S.valueAll {...textInputProps} label={<S.textInput>Valor total</S.textInput>}  />}
    //   renderText
      onChangeValue={setValue}
      placeholder='R$ 0,00'
      prefix="R$  "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // R$ +2.310,46
      }}
    />
  )
}

