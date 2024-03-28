import { Button, H3, Paragraph, Separator, Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { FlatList, SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus, Edit3 } from '@tamagui/lucide-icons';
import { Link } from "expo-router";
import { useTheme } from "@/context/themeContext";
import { CardHome } from "@/components/CardHome";

export default function Home() {
  const { theme } = useTheme();

  const data =
   [
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        }
      ]
    },

    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
    {
      nameTraining:'Treino de costas',
      exercises:[
        {
          type:'',
          rep: 0,
          weight:0
        },
      ]
    },
   ]

  return (
    <View bg={theme.bg} f={1}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <H3 color={'#0E5447'} mt={'$4'}>Seus Treinos</H3>
        <Separator borderColor={'#0E5447'} />
        
        <FlatList 
        style={{maxHeight:'60%'}}
        data={data}
        renderItem={({item})=><CardHome nameTraining={item.nameTraining} exercises={item.exercises}/>}
        />

        <Link href={'/addWorkout'} asChild>
          <CustomButton mt={10} icon={Plus}>Adicionar Treino</CustomButton>
        </Link>
      </View>
    </View>
  )
}