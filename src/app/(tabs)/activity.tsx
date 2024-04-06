import { Calendar } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native";
import { ListItem, Text, View, YGroup } from "tamagui";
import { useTheme } from '@/hooks';

export default function Atividade() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <View
        mt={'$10'}
        f={1}
        justifyContent="flex-start"
        alignItems="flex-start">

        <Text
          w={'90%'}
          alignSelf="center"
          fontWeight={'900'}
          color={theme.textColor}
          fontSize={18}
        >
          Suas Atividades
        </Text>
        <YGroup mt={'$4'} alignSelf="center" bordered width={240} size="$4" w={'90%'} gap={5}>
          <YGroup.Item>
            <ListItem
              borderRadius={'$1'}
              borderWidth={1}
              borderColor={theme.bgBorder}
              bg={theme.bgCard}
              color={theme.textColor}
              width={'100%'}
              icon={Calendar}
              title={<Text color={theme.textColor}>treino de costas</Text>}
              subTitle={<Text color={theme.textColor}>11/03/2000</Text>}
            />

          </YGroup.Item>
        </YGroup>
      </View>
    </SafeAreaView>
  )
}