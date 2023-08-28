import { KeyCards } from "../key";
import { getStorageCard } from "./getCard";
import { createStorageCard } from "./create";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const deleteCard = async ({ id }: any) => {
  try {
    const item = await getStorageCard();
    const filter = item.filter((item: any) => item.id !== id);
    // const save = await createStorageCard({ ...filter });

    const jsonValue = JSON.stringify(filter);

    await AsyncStorage.setItem(KeyCards, jsonValue);

    console.log("Cartão apagado com sucesso");
  } catch (error) {}
};
