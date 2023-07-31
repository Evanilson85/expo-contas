import AsyncStorage from "@react-native-async-storage/async-storage";

import { KeyCards } from "../key";
import { getStorageCard } from "./getCard";

interface IUCard {
  name: string;
  typeCard: string;
  maturity: string;
  icon?: {
    iconName: string;
    name: string;
  };
  value: number;
}

export async function createStorageCard(card: IUCard) {
  try {
    const getCards = await getStorageCard();

    const jsonValue = JSON.stringify([...getCards, card]);

    await AsyncStorage.setItem(KeyCards, jsonValue);
  } catch (error) {
    throw error;
  }
}
