import { useState } from 'react'
import { Ionicons  } from '@expo/vector-icons';
import { Card } from '../cards/card';
import * as S from './style'

export const Balances = () => {

    const [eye, setEye] = useState(false)

    const handleChange = () => {
        setEye((state) => !state)
    } 

    return (
        <S.container>
            <S.containerValue>
                <S.textValue>R$ 2000</S.textValue>
                <S.btnEye onPress={handleChange}>
                    {eye ? <Ionicons name="eye-off-outline" size={34} color="#7C7C8A" /> :   <Ionicons name="eye-outline" size={34} color="#7C7C8A" />}
                </S.btnEye>
            </S.containerValue>
            <Card />
        </S.container>
    );
};