import { RegisterWorkoutProvider } from '@/context/RegisterWorkoutContext';
import { UserProvider } from '@/context/UserContext';
import { ThemeProvider } from '@/context/themeContext';
import { WorkoutProvider } from '@/context/workoutContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <UserProvider>

      <ThemeProvider>
        <WorkoutProvider>
          <RegisterWorkoutProvider>
            <Stack>
              <Stack.Screen name='index' options={{ headerShown: false }} />
              <Stack.Screen name='login' options={{ headerShown: false }} />
              <Stack.Screen name='(tabs)' options={{ headerShown: false, title: 'Home' }} />
              <Stack.Screen name='addWorkout'
                options={{
                  title: 'Adicionar Treino',
                  headerTitleStyle: { color: '#0A3D3F' },
                  headerBackTitleVisible: false,
                }} />
              <Stack.Screen name='registerWorkout/[id]' options={{
                title: 'Registrar Treino', headerTitleStyle: { color: '#0A3D3F' },
              }} />

              <Stack.Screen name='registerWorkout/details/[id]'
                options={{
                  title: 'Visualizar Treino', headerTitleStyle: { color: '#0A3D3F' },
                }} />
              <Stack.Screen name='signup' options={{headerShown:false}} />

            </Stack>
          </RegisterWorkoutProvider>
        </WorkoutProvider>
      </ThemeProvider>
    </UserProvider>
  )
}