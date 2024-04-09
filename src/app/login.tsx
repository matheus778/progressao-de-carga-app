import { Link } from "expo-router";
import { Button, H2, Image, View, YStack } from "tamagui";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import LottieView from "lottie-react-native";

export default function Login() {
  return (
    <View
      f={1} bg={'#F9F9F9'}
      ai={'center'}
      jc={"center"}
    >
      <View w={'90%'} gap={'$7'} ai={'center'}>
        <H2
          width={300}
          alignSelf="flex-start"
          lineHeight={"$9"}
          color={'#0A3D3F'}>
          Olá, Seja Bem Vindo(a)
        </H2>

        <LottieView
          autoPlay
          style={{
            width: 300,
            height: 300,
          }}
          source={require('@/assets/animation-home.json')}
        >

        </LottieView>
        <YStack gap={'$3'} w={'100%'}>
          <Button
            bg={'#0E5447'}
            color={'#E5EDCC'}
            size={'$5'}
            icon={<FontAwesome name='google' color={'#E5EDCC'} size={32} />}
          >

            Login com a sua conta Google
          </Button>

          <Link href={'/register'} asChild>
            <Button
              variant="outlined"
              size={'$5'}
              borderColor={'#0E5447'}
              color={'#0E5447'}
            >
              Entrar sem login
            </Button>
          </Link>

        </YStack>
      </View>
    </View>
  )
}

export { Login };