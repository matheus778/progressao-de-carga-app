import { IExercises } from "@/interfaces/IWorkout";
import { Edit3 } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, Text, View } from "tamagui";

interface CardHomeProps {
  id: string;
  nameTraining?: string;
  exercises?: IExercises[];
}

export function CardHome({ id, nameTraining, exercises }: CardHomeProps) {
  return (
    <View
      mt={'$4'}
      borderRadius={'$2'}
      width={'100%'}
      flexDirection="row"
      backgroundColor={'#F4F5E2'}
      borderColor={'#0E5447'}
      borderWidth={1}
      paddingVertical={'$2'}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={'$2'}
    >
      <View jc={'center'} ai={'flex-start'}>
        <Text
          wordWrap="break-word"
          maxWidth={200}
          color={'#0E5447'}
          fontSize={18}
          fontWeight={'900'}
        >
          {nameTraining}
        </Text>
        <Text color={'#686c69'} mt={2} fontSize={16}>{exercises?.length} exercicios</Text>
      </View>

      <Link href={`/registerWorkout/${id}`} asChild>
        <Button
          bg={'#0E5447'}
          color={'#E5EDCC'}
          icon={<Edit3 size={32} color={'#E5EDCC'} />}
        >
          Registrar
        </Button>
      </Link>
    </View>
  )
}