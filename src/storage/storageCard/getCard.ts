import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyCards } from "../key";

export async function getStorageCard() {
  try {
    const getCard = await AsyncStorage.getItem(KeyCards);

    const isExistCard = getCard ? JSON.parse(getCard) : [];
    // AsyncStorage.clear();
    return isExistCard;
  } catch (error) {
    throw error;
  }
}
