import { createContext, useState, useEffect } from 'react'

interface IUPros {
  cards: IUCard[],
  teste: (params: IUCard) => void
}

interface IUCard {
  name: string
  typeCard: string
  maturity: string 
  icon?: any
  value:  number
}


export const createContextSaveCard = createContext<IUPros>({} as IUPros)

export const SaveCardProvider: any = ({ children }: any) => {

  const [cards, setCards] = useState<IUCard[]>([])
  
  useEffect(() => {
    console.log(cards, 'useEffect')
  }, [cards])

  const create = (params: IUCard) => {
    // setCards((state) => [...state, params])
    const t = [...cards, params]
    setCards(t)
    console.log(cards, t)
  }

  return (
    <createContextSaveCard.Provider value={{cards , teste : create}}>
      { children }
    </createContextSaveCard.Provider>
  )
}
