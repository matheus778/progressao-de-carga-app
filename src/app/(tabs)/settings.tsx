
import { useTheme } from "@/hooks";
import { Lightbulb, Moon, Sun } from "@tamagui/lucide-icons";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ListItem, Switch, Text, View, YGroup } from "tamagui";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
  isChecked ? toggleTheme('dark') : toggleTheme('light');
  isChecked ? setStatusBarStyle('light') : setStatusBarStyle('dark')
  }, [isChecked])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <View f={1} mt={'$9'} alignSelf="center">
        <Text fontSize={18}
          w={'90%'}
          alignSelf="flex-start"
          color={theme.textColor}
          fontWeight={'900'}
          mb={'$4'}
        >
          Configurações
        </Text>

        <YGroup alignSelf="center" bordered width={240} size="$4" w={'90%'} gap={5}>
          <YGroup.Item>
            <ListItem
              borderWidth={1}
              borderColor={theme.bgBorder}
              bg={theme.bgCard}
              icon={Lightbulb}
              color={theme.textColor}
              width={'100%'}
              title={<Text color={theme.textColor}>tema claro e escuro</Text>}
              subTitle={<Text color={theme.textColor}>altere entre tema claro e escuro</Text>}
            >

              <View mt={'$2'} fd={'row'} ai={'center'} gap={'$2'}>
                <Sun color={theme.textColor} />
                <Switch size="$4" checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} >
                  <Switch.Thumb bg={theme.primary} animation="bouncy" />
                </Switch>
                <Moon color={theme.textColor} />
              </View>
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </View>
    </SafeAreaView>
  )
}