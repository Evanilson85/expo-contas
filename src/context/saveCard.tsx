import { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { createStorageCard, getStorageCard, deleteCard } from '../storage' 
import { ICARDS } from '../@interfaces'

interface IUPros {
  // cards: IUCard[],
  create: (params: ICARDS) => void,
  getCard: () => void
  deleteCards: (params: any) => void
}

export const createContextSaveCard = createContext<IUPros>({} as IUPros)

export const SaveCardProvider: any = ({ children }: any) => {

  // const [cards, setCards] = useState<IUCard[]>([])
  
  async function create(params: ICARDS) {
    try {
      const id = params.name + 'teste'
      await createStorageCard({...params, expense: '', currentValue: '', id: id, color:'#5b259f'})
      alert('criado com sucesso')
    } catch (error) {
      alert('error ao criar')
      throw error
    }
  }

  async function getCard(): Promise<any> {
    try {
      const result = await getStorageCard()
      return result
    } catch (error) {
      alert('error ao listar')
      throw error
    }
  } 

  async function deleteCards(item: any) {
    try {
      const result = await deleteCard(item)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <createContextSaveCard.Provider value={{create, getCard, deleteCards}}>
      { children }
    </createContextSaveCard.Provider>
  )
}
