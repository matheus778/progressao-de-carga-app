import { Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus } from '@tamagui/lucide-icons';
import { Link } from "expo-router";

export default function Home() {
  return (
    <View bg={'#F9F9F9'} f={1}>
      <SafeAreaView style={{ backgroundColor: '#0A3D3F' }}>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <Link href={'/addWorkout'} asChild>
          <CustomButton mt={50} icon={Plus}>Adicionar Treino</CustomButton>
        </Link>
      </View>
    </View>
  )
}