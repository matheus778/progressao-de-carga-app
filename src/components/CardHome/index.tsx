import { IExercises } from "@/interfaces/IWorkout";
import { Edit3 } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, Text, View } from "tamagui";
import { useTheme } from '@/hooks';

interface CardHomeProps {
  id: string;
  nameTraining?: string;
  exercises?: IExercises[];
}

export function CardHome({ id, nameTraining, exercises }: CardHomeProps) {
  const { theme } = useTheme(); 

  return (
    <View
      mt={'$4'}
      borderRadius={'$1'}
      width={'100%'}
      flexDirection="row"
      backgroundColor={theme.bgCard}
      borderColor={theme.bgBorder}
      borderWidth={2}
      paddingVertical={'$2'}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={'$2'}
    >
      <View jc={'center'} ai={'flex-start'}>
        <Text
          wordWrap="break-word"
          maxWidth={200}
          color={theme.textColor}
          fontSize={18}
          fontWeight={'900'}
        >
          {nameTraining}
        </Text>
        <Text color={theme.textColor} fontWeight={'200'} mt={2} fontSize={16}>{exercises?.length} exercicios</Text>
      </View>

      <Link href={`/registerWorkout/${id}`} asChild>
        <Button
          bg={theme.primary}
          color={'#E5EDCC'}
          icon={<Edit3 size={32} color={'#E5EDCC'} />}
        >
          Registrar
        </Button>
      </Link>
    </View>
  )
}