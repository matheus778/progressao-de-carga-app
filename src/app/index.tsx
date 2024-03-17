import { tamaguiConfig } from '../../tamagui.config';
import { TamaguiProvider } from 'tamagui';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Login } from './login';
import Home from './(tabs)/index'
import { StatusBar } from 'expo-status-bar';
import { Redirect } from 'expo-router'


export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }


  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style='light'/>
      <Redirect href={'/(tabs)/'}/>
    </TamaguiProvider>
  );
}