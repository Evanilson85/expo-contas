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
  expense: string;
  currentValue: string;
  id: string;
  color: string | "#5b259f";
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
