import { Calendar } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native";
import { ListItem, Text, View, YGroup } from "tamagui";
import { useTheme, useRegisterWorkout } from '@/hooks';
import { FlatList } from 'react-native';

export default function Atividade() {
  const { theme } = useTheme();
  const { registerWorkout } = useRegisterWorkout();

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

        {registerWorkout.length > 0 ? (
          <YGroup mt={'$4'} alignSelf="center" h={'100%'} width={240} size="$4" w={'90%'} gap={5}>
            <YGroup.Item>
              <FlatList
                data={registerWorkout.reverse()}
                renderItem={({ item, index }) => (
                  <ListItem
                    mt={'$4'}
                    borderRadius={'$1'}
                    borderWidth={1}
                    borderColor={theme.bgBorder}
                    bg={theme.bgCard}
                    color={theme.textColor}
                    width={'100%'}
                    icon={Calendar}
                    title={<Text color={theme.textColor}>{item.workoutName}</Text>}
                    subTitle={<Text color={theme.textColor}>{item.date}</Text>}
                  />
                )}
              />

            </YGroup.Item>
          </YGroup>
        ) : <NoRegisterWorkout />}

      </View>
    </SafeAreaView>
  )
}

const NoRegisterWorkout = () => {
  return (
    <View w={'90%'} alignSelf="center">
      <Text>Nenhum treino foi salvo até o momento</Text>
    </View>
  )
}