import { H3, Separator, Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { Alert, FlatList, SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus } from '@tamagui/lucide-icons';
import { Link } from "expo-router";
import { useTheme } from "@/hooks";
import { CardHome } from "@/components/CardHome";
import { workoutStorage } from "@/localStorage";
import { useEffect } from "react";
import { useWorkout } from '@/hooks';

export default function Home() {
  const { theme } = useTheme();
  const { workout, setWorkout } = useWorkout();
  useEffect(() => {
    const getWorkouts = async () => {
      const workouts = await workoutStorage.get()
      setWorkout(workouts)
    }
    getWorkouts();
  }, [])

  return (
    <View bg={theme.bg} f={1}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <H3 color={'#0E5447'} mt={'$4'}>Seus Treinos</H3>
        <Separator borderColor={'#0E5447'} />

        {workout?.length > 0 ? (
          <FlatList
            style={{ maxHeight: '60%' }}
            data={workout}
            renderItem={({ item, index }) =>
              <CardHome
                nameTraining={item.nameWorkout} 
                key={index}
                id={item.id}
                exercises={item.exercises} 
              />}
          />
        ) : <NoWorkout />}

        <Link href={'/addWorkout'} asChild>
          <CustomButton mt={10} icon={Plus}>Adicionar Treino</CustomButton>
        </Link>
      </View>
    </View>
  )
}

const NoWorkout = () => {
  return (
    <View>
      <Text>Nenhum treino para registrar, começe adicionando um novo treino a sua lista.</Text>
    </View>
  )
}