import { useState } from 'react'
import * as S from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const History = () => {

    const [arrowPosition, setArrowPosition] = useState(false)

    const teste = [
        {
            id: 1,
            icon: 'spending'
        },
        {
            id: 2,
            icon: 'spending'
        },
        {
            id: 3,
            icon: 'input'
        },
    ]


    return (
        <>
            <S.Container>
                <S.title size='small'>Historico do mês</S.title>
                {
                    teste.map(({ id, icon }) => ( 
                        <S.div row between='space-between' key={id}>
                            <S.div row>
                                <MaterialCommunityIcons name="food" size={35} color="green" />
                                <S.containerTitles>
                                    <S.title size='small'>Alimentação</S.title>
                                </S.containerTitles>
                            </S.div>
                            <S.div between='center'>
                                <S.title>25 jul</S.title>
                                <S.divContainer>
                                    {icon === 'spending' ? <AntDesign name="arrowdown" size={18} color="red" /> :  <AntDesign name="arrowup" size={18} color="#22c55e" />}
                                    <S.subTitleName color={icon}>
                                        R$ 200,00
                                    </S.subTitleName>
                                </S.divContainer>
                            </S.div>
                        </S.div>
                    ))

                }
            </S.Container>
        </>
    )
}