import { Link } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { Button, H2, Input, View, YStack } from "tamagui";

export default function Register() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View f={1} ai={'center'} jc={'center'}>
        <View width={'90%'} height={250} justifyContent="space-between">
          <H2 color={'#0A3D3F'}>Como Você Gostaria de Ser Chamado ?</H2>


          <YStack gap={'$3'}>
            <Input
              placeholder="Digite seu nome..."
              size={'$5'}
              borderWidth={4}
              color={'#0A3D3F'}
              borderColor={'#AFD897'}
              bg={'#F4F5E2'}
              focusStyle={{
                borderColor: '#0E5447'
              }}
            />

            <Link href={'/(tabs)'} asChild>
              <Button
                bg={'#0E5447'}
                color={"#E5EDCC"}
                size={'$5'}
              >
                Continuar
              </Button>
            </Link>
          </YStack>

        </View>
      </View>
    </KeyboardAvoidingView>
  )
}