import { CustomButton } from "@/components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import { Input, InputProps, Separator, Text, View } from "tamagui";

export default function RecordWorkout() {
  return (
    <View>
      <View
        w={'100%'}
       
        height={120}
        alignItems="flex-start"
        justifyContent="center"
      >
        <View
          width={'90%'}
          alignSelf="center"
        >
          <Text fontSize={18} fontWeight={'900'} mb={'$1'} color={'#0A3D3F'}>Treino de Costas</Text>
          <Text fontSize={18} fontWeight={'900'} mb={'$1'} color={'#0A3D3F'}>Observação: </Text>
          <Text fontSize={18} fontWeight={'900'} color={'#0A3D3F'}>01/02/2024</Text>
        </View>
      </View>
      <Separator bg={'#0A3D3F'}/>
      <View  width={'90%'} alignSelf="center" mt={'$4'}>
        <Text
         color={'#0A3D3F'}
         mb={'$4'}
         fontSize={20}
         fontWeight={'900'}
         >exercicio 1</Text>

        <View gap={'$3'}>
          <View flexDirection="row" alignItems="center" gap={'$5'}>
            <Text color={'#0A3D3F'} fontSize={16} w={110}>Fase</Text>
            <Text color={'#0A3D3F'} fontSize={16} w={80}>Rep</Text>
            <Text color={'#0A3D3F'} fontSize={16} w={80}>Carga</Text>
          </View>
          <View flexDirection="row" alignItems="center" gap={'$5'}>
            <Text fontSize={16} w={110}>Aquecimento</Text>
            <CustomInput />
            <CustomInput />
          </View>

          <View flexDirection="row" alignItems="center" gap={'$5'}>
            <Text color={'#0A3D3F'} fontSize={16} w={110}>Set</Text>
            <CustomInput />
            <CustomInput />
          </View>

          <View flexDirection="row" alignItems="center" gap={'$5'}>
            <Text color={'#0A3D3F'} fontSize={16} w={110}>Superset</Text>
            <CustomInput />
            <CustomInput />
          </View>
        </View>
      </View>

      <View w={'90%'} alignSelf="center" mt={'$4'}>
        <CustomButton icon={<FontAwesome name="save" size={24}/>}>Registrar Treino</CustomButton>
      </View>
    </View>
  )
}

const CustomInput = () => {
  return (
    <Input
      fontWeight={'900'}
      keyboardType="decimal-pad"
      w={80}
      borderWidth={3}
      color={'#0A3D3F'}
      borderColor={'#AFD897'}
      bg={'#F4F5E2'}
      focusStyle={{
        borderColor: '#0E5447'
      }}
      fontSize={18}
    />
  )
}