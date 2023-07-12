import { CardBank } from '../cardBank'
import * as S from './style'

export const Card = () => {

const back = [
    {
        id: 1,
        name: ''
    },
    {
        id: 3,
        name: ''
    },
    {
        id: 4,
        name: ''
    },
]

return (
    <>
        <S.container>
            <S.text>
                Meus Saldos 
            </S.text>
            {back.map(({id}) => (
                <CardBank key={id} />
            ))}
        </S.container>   
         <S.createBtn> 
                <S.textBtn>Adicionar Cartão</S.textBtn>
         </S.createBtn> 
    </>
)
}