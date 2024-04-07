import { H3, Separator, Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { FlatList, SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus } from '@tamagui/lucide-icons';
import { Link } from "expo-router";
import { CardHome } from "@/components/CardHome";
import { registerWorkoutStorage, workoutStorage } from "@/localStorage";
import { useEffect } from "react";
import { useWorkout, useTheme, useRegisterWorkout } from '@/hooks';

export default function Home() {
  const { theme } = useTheme();
  const { workout, setWorkout } = useWorkout();
  const { setRegisterWorkout } = useRegisterWorkout();

  useEffect(() => {
      const getWorkouts = async() => {
      const workouts = await workoutStorage.get()
      const registerWorkout = await registerWorkoutStorage.get();

      setWorkout(workouts.reverse());
      setRegisterWorkout(registerWorkout);
    }
    getWorkouts();
  }, [])

  return (
    <View bg={theme.bg} f={1}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <H3 color={theme.textColor} mt={'$4'}>Seus Treinos</H3>
        <Separator borderColor={theme.textColor} />

        {workout?.length > 0 ? (
          <FlatList
            style={{ maxHeight: '60%'}}
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