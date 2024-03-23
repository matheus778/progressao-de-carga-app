import { Calendar, Cloud, Moon, Star, Sun, Timer } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native";
import { ListItem, Text, View, YGroup } from "tamagui";

export default function Atividade() {
  return (
    <SafeAreaView style={{flex:1}}>

      <View
      mt={'$10'}
      f={1}
      justifyContent="flex-start"
      alignItems="flex-start">

        <Text
          w={'90%'}
          alignSelf="center"
          fontWeight={'900'}
          color={'#0A3D3F'}
          fontSize={18}
        >
          Suas Atividades
        </Text>
        <YGroup alignSelf="center" bordered width={240} size="$4" w={'90%'} gap={5}>
          <YGroup.Item>
            <ListItem hoverTheme icon={Calendar} title="Treino de Costas" subTitle="11/03/2024" />
            <ListItem hoverTheme icon={Calendar} title="Treino de Costas" subTitle="11/03/2024" />
            <ListItem hoverTheme icon={Calendar} title="Treino de Costas" subTitle="11/03/2024" />
          </YGroup.Item>
        </YGroup>
      </View>
    </SafeAreaView>
  )
}