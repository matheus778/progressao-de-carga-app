import { CustomButton } from "@/components/CustomButton";
import { Button, Input, ScrollView, Separator, Text, View, YStack } from "tamagui";
import { Delete, Plus, Trash, Trash2, X } from '@tamagui/lucide-icons';
import { FlatList, KeyboardAvoidingView } from "react-native";
import { useRef, useState } from "react";

interface IexercisesList {
  id: number;
  name?: string;
}

interface IdataToSave {
  nameWorkout?: string;
  exercices?: IexercisesList[];
  comment?: string;
}

export default function addWorkout() {
  const dataToSaveToLocalStorage: IdataToSave = {}

  const [nameWorkout, setNameWorkout] = useState('');
  const [exercisesList, setExercisesList] = useState<IexercisesList[]>([{ id: 1, name: '' }]);
  const [comment, setComment] = useState('');

  const refExercisesList = useRef<IexercisesList[]>([]);


  const addExercisesInList = (): void => {
    setExercisesList([...exercisesList, {
      id: exercisesList.length + 1,
      name: ''
    }]);
  }

  const setCurrentExercisesList = (id: number, text: string) => {
    const prevState = refExercisesList.current;
    const newExercice = {
      id: id,
      name: text
    };

    const index = exercisesList.findIndex(item => item.id == id)
    refExercisesList.current[index] = newExercice;
    return

  }

  const deleteExerciseInList = (id: number): void => {
    refExercisesList.current = [...exercisesList];

    const indexRemoveItem = refExercisesList.current.findIndex((item) => item.id == id)

    refExercisesList.current.splice(indexRemoveItem, 1)
    setExercisesList([...refExercisesList.current])
  }

  const handleFormSubmit = () => {
    console.log(refExercisesList)

    dataToSaveToLocalStorage.nameWorkout = nameWorkout;
    dataToSaveToLocalStorage.exercices = [...refExercisesList.current];
    dataToSaveToLocalStorage.comment = comment;

    console.log(dataToSaveToLocalStorage) // chamar função para salvar no local storage
  }

  return (
    <ScrollView f={1}>

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

          {exercisesList.map((item, index) => {
            return (
              <View key={index} mt={'$4'}>
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
                    Exercicio {index + 1}:
                  </Text>

                  {exercisesList.length - 1 == index && index != 0 ? (
                    <Button
                      fontSize={16}
                      fontWeight={'900'}
                      color={'#0E5447'}
                      size={"$5"}
                      transparent
                      onPress={() => deleteExerciseInList(item.id)}
                      iconAfter={<Trash color={'$red10Dark'} />}
                    >
                      Remover
                    </Button>
                  ) : ''}
                </View>

                <Input
                  onChangeText={(text) => setCurrentExercisesList(item.id, text)}
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
            )
          })}

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
            Adicionar Exercicio
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