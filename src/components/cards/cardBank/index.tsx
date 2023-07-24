import * as S from './style'
import Nubank from '../../../assets/bank/nubank.svg'
import Inter from '../../../assets/bank/banco-inter.svg'
import Ame from '../../../assets/bank/ame-logo.svg'
import Digio from '../../../assets/bank/digio-logo.svg'
import MercadoPago from '../../../assets/bank/mercado-pago-logo.svg'

interface PROPS {
  border?: boolean
  nameIcon?: string
  nameBank: string
  type: string
  value: string | number
}

export const CardBank = ({ border, nameIcon, nameBank, type, value }: PROPS) => {

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
    <S.container border={border}>
      <S.div>
        {nameIcon ? (
          <S.logo>
            {render(nameIcon)}
          </S.logo>
        ):
          <S.logo>
            <S.text>
              {`${nameBank?.split('')[0]}${nameBank?.split('')[1]}`}
            </S.text>
          </S.logo> 
        }
        {/* <S.logo source={logo}  transition={1000} /> */}
        <S.subDiv>
          <S.name>{nameBank}</S.name>
          <S.nameType>{type}</S.nameType>
        </S.subDiv>
      </S.div>
      <S.div>
        {/* <S.name>Lim disponivel</S.name> */}
        <S.name>R$ {value}</S.name>
      </S.div>
    </S.container>
  </>
};
