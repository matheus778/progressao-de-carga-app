import { Button, H3, Paragraph, Separator, Text, View } from "tamagui";
import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Plus, Edit3 } from '@tamagui/lucide-icons';
import { Link } from "expo-router";

export default function Home() {
  return (
    <View bg={'#F9F9F9'} f={1}>
      <SafeAreaView style={{ backgroundColor: '#0A3D3F' }}>
        <Header />
      </SafeAreaView>

      <View height={'100%'} w={'90%'} alignSelf="center">
        <H3 color={'#0E5447'} mt={'$4'}>Seus Treinos</H3>
        <Separator borderColor={'#0E5447'} />
        <View
          mt={'$5'}
          borderRadius={'$2'}
          width={'100%'}
          flexDirection="row"
          backgroundColor={'#F4F5E2'}
          borderColor={'#0E5447'}
          borderWidth={4}
          paddingBottom={'$2'}
          paddingTop={'$2'}
          alignItems="center"
          justifyContent="space-around"
        >
          <View jc={'center'} ai={'center'}>
            <Text
              wordWrap="break-word"
              maxWidth={200}
              color={'#0E5447'}
              fontSize={18}
              fontWeight={'900'}
            >
              Costas e biceps
            </Text>
            <Text color={'#686c69'} mt={2} fontSize={16}>5 exercicios</Text>
          </View>

          <Button
            bg={'#0E5447'}
            color={'#E5EDCC'}
            icon={<Edit3 size={32} color={'#E5EDCC'} />}
          >
            Registrar
          </Button>

        </View>
        <Link href={'/addWorkout'} asChild>
          <CustomButton mt={50} icon={Plus}>Adicionar Treino</CustomButton>
        </Link>
      </View>
    </View>
  )
}