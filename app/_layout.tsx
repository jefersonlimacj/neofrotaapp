import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import SplashScreen from "./splashscreen";

export default function RootLayout() {
  const [loaded] = useFonts({
    Icone: require("@/assets/fonts/MaterialSymbolsRounded-Light.ttf"),
    IconeFill: require("@/assets/fonts/MaterialSymbolsRounded-Fill.ttf"),
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade", animationDuration: 120 }}>
      <Stack.Screen
        name="login"
        options={{ headerShown: false, animation: "fade", animationDuration: 1000 }}
      />
    </Stack>
  );
}
