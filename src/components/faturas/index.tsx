import * as S from './style'
import Nubank from '../../assets/bank/nubank.svg'


export const Faturas = () => {
    return (
        <>
            <S.Container>
                <S.title>Minhas Faturas</S.title>
                <S.button>
                    <S.div row between='space-between'>
                        <S.div row>
                            <Nubank width={40} height={40}/>
                            {/* <S.logo source={logo}  transition={1000} /> */}
                            <S.containerTitles>
                                <S.title>Banco Inter</S.title>
                                <S.subTitleName>Credito</S.subTitleName>
                            </S.containerTitles>
                        </S.div>
                        <S.div between='center'>
                            <S.subTitleName>Fatura Atual</S.subTitleName>
                            <S.valueNumber>-R$ 43,20</S.valueNumber>
                        </S.div>
                    </S.div>
                </S.button>
                <S.button>
                    <S.div row between='space-between'>
                        <S.div row>
                            <Nubank width={40} height={40}/>
                            {/* <S.logo source={logo}  transition={1000} /> */}
                            <S.containerTitles>
                                <S.title>Banco Inter</S.title>
                                <S.subTitleName>Credito</S.subTitleName>
                            </S.containerTitles>
                        </S.div>
                        <S.div between='center'>
                            <S.subTitleName>Fatura Atual</S.subTitleName>
                            <S.valueNumber>-R$ 43,20</S.valueNumber>
                        </S.div>
                    </S.div>
                </S.button>
            </S.Container>
        </>
    )
}