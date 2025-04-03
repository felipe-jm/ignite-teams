import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Stack } from "expo-router";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "@/theme";
import { Loading } from "@/components/Loading";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="groups/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="new-group/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="players/index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}
