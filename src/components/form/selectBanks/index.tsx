import Nubank from '../../../assets/bank/nubank.svg'
import Inter from '../../../assets/bank/banco-inter.svg'
import Ame from '../../../assets/bank/ame-logo.svg'
import Digio from '../../../assets/bank/digio-logo.svg'
import MercadoPago from '../../../assets/bank/mercado-pago-logo.svg'

import * as S from './style'

interface PROPS {
  iconName: string
  name: string
}

export const SelectBanks = ({ iconName, name }: PROPS) => {

 

  const render = (name: any) => {
    const json = {
      'Nubank':      <Nubank width={40} height={40} />,
      'Inter':       <Inter width={40} height={40} />,
      'Ame':         <Ame width={40} height={40} />,
      'Digio':       <Digio width={40} height={40} />,
      'MercadoPago': <MercadoPago width={40} height={40} />,
    } as any
    return json[name]
    // return json[name] as any
  }

  return <>
      <S.container>
        <S.buttonSelect>
          <S.containerBank>
            {render(iconName)}
          </S.containerBank>
          <S.text>
            {name}
          </S.text>
        </S.buttonSelect>
        {/* {propsJson.map(({iconName, name}: PROPS) => (
          <S.scrollContainer key={iconName}>
          </S.scrollContainer>
        ))}  */}
        {/* <Inter width={40} height={40} /> */}
      </S.container> 
  </>
}