import { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { createStorageCard, getStorageCard } from '../storage' 
import { ICARDS } from '../@interfaces'

interface IUPros {
  // cards: IUCard[],
  create: (params: ICARDS) => void,
  getCard: () => void
}

export const createContextSaveCard = createContext<IUPros>({} as IUPros)

export const SaveCardProvider: any = ({ children }: any) => {

  // const [cards, setCards] = useState<IUCard[]>([])
  
  async function create(params: ICARDS) {
    try {
      await createStorageCard(params)
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

  return (
    <createContextSaveCard.Provider value={{create, getCard}}>
      { children }
    </createContextSaveCard.Provider>
  )
}
