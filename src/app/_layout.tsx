import { ThemeProvider } from '@/context/themeContext';
import { WorkoutProvider } from '@/context/workoutContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider>
      <WorkoutProvider>
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
          <Stack.Screen name='registerWorkout/[id]' options={{
            title: 'Registrar Treino', headerTitleStyle: { color: '#0A3D3F' },
          }} />

        </Stack>
      </WorkoutProvider>
    </ThemeProvider>
  )
}