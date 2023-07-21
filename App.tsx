import { Route } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/themes";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text } from 'react-native'
import { configureFonts, MD2LightTheme, PaperProvider } from 'react-native-paper';

// import {Loading} from '@components/loading'

export default function App() {
  const [loadFont] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  // if(!loadFont) {
  //   console.log('deu ruim', loadFont)
  //   return <Text>Carregando</Text>
  // }
  const baseFont = {
    fontFamily: 'Roboto_400Regular',
  } as const;
  const baseVariants = configureFonts({ config: baseFont });
  const fonts = configureFonts({
    config: {
      ...baseVariants
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={{ fonts }}>
        {loadFont ?   <Route /> : <Text>Carregando</Text>}
      </PaperProvider>
      {/* <Header /> */}
      {/* <Route /> */}
    </ThemeProvider>
  );
}
