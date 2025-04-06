import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>    
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />      
        <Stack.Screen name="+not-found" />
        <Stack.Screen 
        name="components/login" 
        options={{ title: "Login Screen" }} 
      />
       <Stack.Screen 
        name="components/useeffect" 
        options={{ title: "useEffect Screen" }} 
      />
       <Stack.Screen 
        name="components/usestate" 
        options={{ title: "useState Screen" }} 
      />
       <Stack.Screen 
        name="components/hooks" 
        options={{ title: "Hooks Screen" }} 
      />
       <Stack.Screen 
        name="components/register" 
        options={{ title: "Register Screen" }} 
      />
       <Stack.Screen 
        name="components/crud" 
        options={{ title: "CRUD Screen" }} 
      />
       <Stack.Screen 
        name="components/quiz" 
        options={{ title: "Quiz screen" }} 
      />
       <Stack.Screen 
        name="screens/exercise_8/login-and-registration" 
        options={{ title: "Forms" }} 
      />
      <Stack.Screen 
        name="screens/exercise_8/register" 
        options={{ title: "Registration Screen" }} 
      />
      <Stack.Screen 
        name="screens/exercise_8/login" 
        options={{ title: "Login Screen" }} 
      />
      <Stack.Screen 
        name="screens/exercise_9/login-and-registration" 
        options={{ title: "Forms" }} 
      />
      <Stack.Screen 
        name="screens/exercise_9/register" 
        options={{ title: "Registration Screen" }} 
      />
      <Stack.Screen 
        name="screens/exercise_9/login" 
        options={{ title: "Login Screen" }} 
      />
      <Stack.Screen 
        name="screens/dashboard/App" 
        options={{ title: "Dashboard",
          headerShown: false,}} 
      />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}


