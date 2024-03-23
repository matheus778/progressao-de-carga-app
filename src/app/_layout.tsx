import { ThemeProvider } from '@/context/themeContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='login' options={{ headerShown: false }} />
        <Stack.Screen name='register' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='addWorkout'
          options={{
            title: 'Adicionar Treino',
            headerTitleStyle: { color: '#0A3D3F' },
            headerBackTitleVisible: false,
          }} />
        <Stack.Screen name='recordWorkout' options={{
          title: 'Registrar Treino', headerTitleStyle: { color: '#0A3D3F' },
        }} />

      </Stack>
    </ThemeProvider>
  )
}