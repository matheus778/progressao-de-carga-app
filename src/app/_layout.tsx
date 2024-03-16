import { Stack } from 'expo-router';

export default function Layout() {
  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='register' options={{headerShown: false}}/>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      <Stack.Screen name='addWorkout'
      options={{
        title:'Adicionar Treino',
        headerTitleStyle: {color:'#0A3D3F'} ,
        headerBackTitleVisible:false,
      }} />
    </Stack>
  )
}