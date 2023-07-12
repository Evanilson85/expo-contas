import React, { useEffect } from "react";
import { Route } from "./src/routes";
import { Header } from "./src/components/header";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/themes";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text, View } from 'react-native'

export default function App() {
  const [loadFont] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if(!loadFont) {
    console.log('deu ruim', loadFont)
    return <Text>Carregando</Text>
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <Route />
      {/* {loadFont ? <Route /> : <Text>Carregando</Text>} */}
    </ThemeProvider>
  );
}
