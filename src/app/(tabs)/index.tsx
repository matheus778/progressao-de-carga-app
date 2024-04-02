import { Button, H3, Paragraph, Separator, Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { FlatList, SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus, Edit3 } from '@tamagui/lucide-icons';
import { Link } from "expo-router";
import { useTheme } from "@/context/themeContext";
import { CardHome } from "@/components/CardHome";
import { workoutStorage } from "@/localStorage";
import { useState, useEffect } from "react";
import { IWorkout } from '@/interfaces/IWorkout';

export default function Home() {
  const { theme } = useTheme();

  const [data, setData] = useState<IWorkout[] | []>([]);
  
  useEffect(() => {
    const getWorkouts = async () => {  
      const workouts = await workoutStorage.get()
      setData(workouts)
    }
    getWorkouts();
  },[])

  return (
    <View bg={theme.bg} f={1}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <H3 color={'#0E5447'} mt={'$4'}>Seus Treinos</H3>
        <Separator borderColor={'#0E5447'} />


        {data?.length > 0 ? (
          <FlatList
          style={{ maxHeight: '60%' }}
          data={data}
          renderItem={({ item, index }) => <CardHome nameTraining={item.nameWorkout} key={index} exercises={item.exercises} />}
        />
        ):''}

        <Link href={'/addWorkout'} asChild>
        <CustomButton mt={10} icon={Plus}>Adicionar Treino</CustomButton>
        </Link>
      </View>
    </View>
  )
}