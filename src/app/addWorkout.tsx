import { CustomButton } from "@/components/CustomButton";
import { Input, Text, View } from "tamagui";
import { Plus } from '@tamagui/lucide-icons';
import { KeyboardAvoidingView } from "react-native";

export default function addWorkout() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
      }}

      behavior="padding"
    >

      <View w={'90%'}>
        <Text
          fontSize={16}
          fontWeight={'900'}
          color={'#0E5447'}
        >
          Nome do Treino
        </Text>
        <Input
          placeholder="Ex: Costas e Biceps..."
          mt={'$2'}
          size={'$5'}
          borderWidth={3}
          color={'#0A3D3F'}
          borderColor={'#AFD897'}
          bg={'#F4F5E2'}
          focusStyle={{
            borderColor: '#0E5447'
          }} />
      </View>

      <View w={'90%'} mt={'$4'}>
        <Text
          fontSize={16}
          fontWeight={'900'}
          color={'#0E5447'}>
          Exercicio 1:
        </Text>

        <Input
          placeholder="Ex: Remada Curvada"
          mt={'$2'}
          size={'$5'}
          borderWidth={3}
          color={'#0A3D3F'}
          borderColor={'#AFD897'}
          bg={'#F4F5E2'}
          focusStyle={{
            borderColor: '#0E5447'
          }} />

        <CustomButton
          mt={'$3'}
          variant="outlined"
          size={'$5'}
          borderWidth={3}
          borderColor={'#0E5447'}
          bg={'#F4F5E2'}
          color={'#0E5447'}
          icon={<Plus color={'#0E5447'} size={24} />}
        >
          Adicionar Exercicio
        </CustomButton>
      </View>

      <View w={'90%'} mt={'$4'}>
        <Text
          fontSize={16}
          fontWeight={'900'}
          color={'#0E5447'}
        >
          Observação:
        </Text>

        <Input
        placeholder="Digite uma observação caso necessario."
          mt={'$2'}
          size={'$5'}
          borderWidth={3}
          color={'#0A3D3F'}
          borderColor={'#AFD897'}
          bg={'#F4F5E2'}
          focusStyle={{
            borderColor: '#0E5447'
          }}
        />
        <CustomButton mt={'$3'}>Adicionar Treino</CustomButton>
      </View>
    </KeyboardAvoidingView>
  )
}