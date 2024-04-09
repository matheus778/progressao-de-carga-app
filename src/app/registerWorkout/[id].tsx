import { CustomButton } from "@/components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import { Input, InputProps, ScrollView, Separator, Text, View } from "tamagui";
import { useRegisterWorkout, useWorkout } from '@/hooks';
import { useEffect, useState } from "react";
import { IWorkout } from "@/interfaces/IWorkout";
import { IRegisterWorkout, IRegisterWorkout_Data } from "@/interfaces/IRegisterWorkout";
import { getDate } from '@/utils/getDate';
import { useLocalSearchParams } from 'expo-router';
import { registerWorkoutStorage } from "@/localStorage";
import { Alert, KeyboardAvoidingView } from "react-native";

let registerData: IRegisterWorkout_Data[] = [];

export default function RegisterWorkout() {
  const { workout } = useWorkout();
  const [register, setRegister] = useState<IWorkout>({} as IWorkout);
  const { id } = useLocalSearchParams()
  const { setRegisterWorkout } = useRegisterWorkout();

  useEffect(() => {
    const searchIndex = workout.findIndex(el => el.id == id);
    setRegister(workout[searchIndex]);
  }, []);

  useEffect(() => {
    if (register.exercises !== undefined) {
      if (register.exercises.length > 0) { //preenche o array com os dados de registro do treino
        for (let i = 0; i < register.exercises.length; i++) {
          registerData[i] = {
            nameExercise: register.exercises[i].name,
            warming: { rep: 0, weight: 0 },
            set: { rep: 0, weight: 0 },
            superSet: { rep: 0, weight: 0 },
          }
        };
      }
    }
  }, [register])

  type InputType = 'rep' | 'weight';
  type PhaseType = 'warming' | 'set' | 'superSet';

  const handleRegisterInput =
    (type: InputType, phase: PhaseType, index: number, text: string) => {
      registerData[index][phase][type] = Number(text);
    }

  const handleFormSubmit = () => {
    const finishHandleFormSubmit = async () => {
      const searchIndex = workout.findIndex(el => el.id == id);
      const data: IRegisterWorkout = {
        idWorkout: id as string,
        workoutName: workout[searchIndex].nameWorkout,
        date: getDate(),
        data: registerData,
        comment: workout[searchIndex].comment
      }

      const getRegisterWorkout = await registerWorkoutStorage.get();
      if (getRegisterWorkout) {
        const newData = [...getRegisterWorkout, data];
        await registerWorkoutStorage.set(newData);
        setRegisterWorkout(newData);
        return;
      }

      await registerWorkoutStorage.set(data);
      setRegisterWorkout([data])
    }

    Alert.alert('Deseja registrar esse treino ?',
      '',
      [
        {
          text: 'Confirmar',
          style: 'default',
          onPress: finishHandleFormSubmit
        },

        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    );
  }


  return (
    <KeyboardAvoidingView behavior="position">

      <ScrollView>

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
            <Text fontSize={18} fontWeight={'900'} mb={'$1'} color={'#0A3D3F'}>{register.nameWorkout}</Text>
            <Text fontSize={18} fontWeight={'900'} mb={'$1'} color={'#0A3D3F'}>Observação: {register.comment}</Text>
            <Text fontSize={18} fontWeight={'900'} color={'#0A3D3F'}>{getDate()}</Text>
          </View>
        </View>
        <Separator bg={'#0A3D3F'} />

        {register.exercises && register.exercises.map((exercise, index) => (
          <View key={index} width={'90%'} alignSelf="center" mt={'$4'}>
            <Text
              color={'#0A3D3F'}
              mb={'$4'}
              fontSize={20}
              fontWeight={'900'}
            >{`${index + 1} - ${exercise.name}`}</Text>

            <View gap={'$3'}>
              <View flexDirection="row" alignItems="center" gap={'$5'}>
                <Text color={'#0A3D3F'} fontSize={16} w={110}>Fase</Text>
                <Text color={'#0A3D3F'} fontSize={16} w={80}>Rep</Text>
                <Text color={'#0A3D3F'} fontSize={16} w={80}>Carga</Text>
              </View>
              <View flexDirection="row" alignItems="center" gap={'$5'}>
                <Text fontSize={16} w={110}>Aquecimento</Text>
                <CustomInput onChangeText={(text) => handleRegisterInput('rep', 'warming', index, text)} />
                <CustomInput onChangeText={(text) => handleRegisterInput('weight', 'warming', index, text)} />
              </View>

              <View flexDirection="row" alignItems="center" gap={'$5'}>
                <Text color={'#0A3D3F'} fontSize={16} w={110}>Set</Text>
                <CustomInput onChangeText={(text) => handleRegisterInput('rep', 'set', index, text)} />
                <CustomInput onChangeText={(text) => handleRegisterInput('weight', 'set', index, text)} />
              </View>

              <View flexDirection="row" alignItems="center" gap={'$5'}>
                <Text color={'#0A3D3F'} fontSize={16} w={110}>Superset</Text>
                <CustomInput onChangeText={(text) => handleRegisterInput('rep', 'superSet', index, text)} />
                <CustomInput onChangeText={(text) => handleRegisterInput('weight', 'superSet', index, text)} />
              </View>
            </View>
            <Separator mt={'$5'} bg={'#0A3D3F'} />
          </View>
        ))}

        <View w={'90%'} alignSelf="center" mt={'$4'}>
          <CustomButton onPress={handleFormSubmit} mb={'$5'} icon={<FontAwesome name="save" size={24} />}>Registrar Treino</CustomButton>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const CustomInput = (props: InputProps) => {
  return (
    <Input
      {...props}
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