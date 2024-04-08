import { useRegisterWorkout, useTheme } from "@/hooks";
import { Calendar, NotepadTextDashed } from "@tamagui/lucide-icons";
import { H3, ScrollView, Text, View } from "tamagui";
import { useLocalSearchParams } from 'expo-router';
import { useState } from "react";

export default function Details() {
  const { theme } = useTheme();
  const { registerWorkout } = useRegisterWorkout();
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(registerWorkout[Number(id)]);

  return (
    <ScrollView f={1} bg={theme.bg}>
      <View width={'90%'} alignSelf="center" mb={'$4'} gap={'$2'}>
        <H3 mt={'$2'} color={theme.textColor}>{data.workoutName}</H3>
        <Text color={theme.textColor} fontSize={16}><Calendar /> {data.date}</Text>
        <Text color={theme.textColor} fontSize={16}><NotepadTextDashed /> Observação: {data.comment == ''? 'N/A':data.comment} </Text>
      </View>

      {data.data.map((el, index) => (
        <View mb={'$5'} key={index} width={'90%'} alignSelf="center" mt={'$4'}>
          <Text
            color={theme.textColor}
            mb={'$4'}
            fontSize={20}
            fontWeight={'900'}
          >{el.nameExercise}</Text>

          <View gap={'$3'}>
            <View flexDirection="row" alignItems="center" gap={'$5'}>
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={110}>Fase</Text>
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={80}>Rep</Text>
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={80}>Carga</Text>
            </View>
            <View flexDirection="row" alignItems="center" gap={'$5'} paddingVertical={'$2'}
              backgroundColor={'$green4Light'}
            >
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={110}>Aquecimento</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.warming.rep}</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.warming.weight}</Text>
            </View>

            <View flexDirection="row" alignItems="center" gap={'$5'} paddingVertical={'$2'}
              backgroundColor={'$yellow4Light'}
            >
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={110}>Set</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.set.rep}</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.set.weight}</Text>
            </View>

            <View flexDirection="row" alignItems="center" gap={'$5'} paddingVertical={'$2'}
              backgroundColor={'$red4Light'}
            >
              <Text color={theme.textColor} fontWeight={'900'} fontSize={16} w={110}>Superset</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.superSet.rep}</Text>
              <Text color={theme.textColor} fontSize={16} w={80}>{el.superSet.weight}</Text>
            </View>
          </View>
        </View>
      ))}

    </ScrollView>
  )
}