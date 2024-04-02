import { CustomButton } from "@/components/CustomButton";
import { Button, Input, ListItem, ScrollView, Text, View } from "tamagui";
import { Plus, Trash } from '@tamagui/lucide-icons';
import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { workoutStorage } from '@/localStorage';
import { IWorkout, IExercises } from '@/interfaces/IWorkout';
import uuid from 'react-native-uuid';

export default function addWorkout() {
  const workout: IWorkout = {
    nameWorkout: '',
    exercises: [],
    comment: ''
  };

  const [nameWorkout, setNameWorkout] = useState('');
  const [comment, setComment] = useState('');
  const [exercisesList, setExercisesList] = useState<IExercises[]>([]);
  const [currentExercise, setCurrentExercise] = useState('')

  const addExercisesInList = (): void => {
    const newExercise = {
      id: String(uuid.v4()),
      name: currentExercise
    };

    console.log(newExercise)
    setExercisesList([...exercisesList, newExercise]);
    setCurrentExercise('');
  }

  const deleteExerciseInList = (id: number): void => {
    let deleteExercise = [...exercisesList];
    deleteExercise.splice(id, 1)

    setExercisesList([...deleteExercise])
  }

  const handleFormSubmit = async () => {
    workout.nameWorkout = nameWorkout;
    workout.exercises = [...exercisesList];
    workout.comment = comment;
    // workoutStorage.delete();
    // return
    const getWorkout:IWorkout[] | [] = await workoutStorage.get();
    if(getWorkout) {
      const newData = [...getWorkout, workout];
      await workoutStorage.set(newData);
      return;
    }
    await workoutStorage.set(workout);
  }

  return (
    <ScrollView f={1} automaticallyAdjustsScrollIndicatorInsets>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9F9F9',
        }}

        behavior="padding"
      >
        <View w={'90%'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Nome do Treino
          </Text>
          <Input
            onChangeText={(text) => setNameWorkout(text)}
            placeholder="Ex: Costas e Biceps..."
            mt={'$2'}
            size={'$5'}
            borderWidth={3}
            color={'#0A3D3F'}
            borderColor={'#AFD897'}
            bg={'#F4F5E2'}
            focusStyle={{
              borderColor: '#0E5447'
            }} />
        </View>

        <View w={'90%'} mt={'$4'}>


          <View mt={'$4'}>
            <View
              flexDirection="row"
              gap={'$2'}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontSize={16}
                fontWeight={'900'}
                color={'#0E5447'}>
                Exercicios:
              </Text>

            </View>

            <View>
              {exercisesList.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    gap={'$5'}
                    justifyContent="space-between"
                    alignItems="center">
                    <Text
                      color={'#0E5447'}
                      fontSize={16}
                    >
                      {index + 1} - {item.name}
                    </Text>
                    <Button
                      onPress={() => deleteExerciseInList(index)}
                      color={'$red4Light'}
                      size={'$4'}
                      fontWeight={'900'}
                      scaleIcon={1.4}
                      icon={<Trash color={'$red4Light'} />} bg={'$red10Dark'}>Apagar</Button>
                  </ListItem>
                );
              })}

            </View>

            <Input
              value={currentExercise}
              onChangeText={(text) => setCurrentExercise(text)}
              placeholder="Ex: Remada Curvada"
              mt={'$2'}
              size={'$5'}
              borderWidth={3}
              color={'#0A3D3F'}
              borderColor={'#AFD897'}
              bg={'#F4F5E2'}
              focusStyle={{
                borderColor: '#0E5447'
              }} />
          </View>


          <CustomButton
            onPress={addExercisesInList}
            mt={'$3'}
            variant="outlined"
            size={'$5'}
            borderWidth={3}
            borderColor={'#0E5447'}
            bg={'#F4F5E2'}
            color={'#0E5447'}
            icon={<Plus color={'#0E5447'} size={24} />}
          >
            Adicionar a lista de exercicios
          </CustomButton>
        </View>

        <View w={'90%'} mt={'$4'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Observação:
          </Text>

          <Input
            onChangeText={(text) => setComment(text)}
            placeholder="Digite uma observação caso necessario."
            mt={'$2'}
            size={'$5'}
            borderWidth={3}
            color={'#0A3D3F'}
            borderColor={'#AFD897'}
            bg={'#F4F5E2'}
            focusStyle={{
              borderColor: '#0E5447'
            }}
          />
          <CustomButton mt={'$3'} onPress={handleFormSubmit}>Adicionar Treino</CustomButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}