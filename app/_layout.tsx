import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function Layout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

    return (
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="intro" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="detail_trip" options={{ headerShown: false }} />
          <Stack.Screen name="detail_article" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    );
}
