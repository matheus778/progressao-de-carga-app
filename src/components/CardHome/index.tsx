import { Edit3 } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, Text, View } from "tamagui";

interface exercisesProps {
  type?:string;
  rep?:number;
  weight?:number;
}

interface CardHomeProps {
  nameTraining?:string;
  exercises?: exercisesProps[];
}

export function CardHome({nameTraining, exercises}:CardHomeProps) {
  return( 
    <View
    mt={'$5'}
    borderRadius={'$2'}
    width={'100%'}
    flexDirection="row"
    backgroundColor={'#F4F5E2'}
    borderColor={'#0E5447'}
    borderWidth={4}
    paddingBottom={'$2'}
    paddingTop={'$2'}
    alignItems="center"
    justifyContent="space-around"
  >
    <View jc={'center'} ai={'center'}>
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

    <Link href={'/recordWorkout'} asChild>
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