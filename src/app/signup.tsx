import { CustomButton } from "@/components/CustomButton";
import { KeyboardAvoidingView } from "react-native";
import { H2, Input, Text, View } from "tamagui";

import { router } from 'expo-router';
import { auth, db, firebaseApp } from '@/services/firebaseService';
import { User, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useState } from "react";
import { useUser } from "@/hooks";
import { userStorage } from "@/localStorage";

export default function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();

  const createUserInDatabase = async (user: User, name: string) => {
    set(ref(db, 'users/' + user.uid), {
      userId: user.uid,
      name: name,
      workouts: "[]",
      registerWorkouts: "[]",
      config: "[]"
    });
    
    const userData = {
      userId: user.uid,
      userName: name
    }

    setUser(userData);
    await userStorage.set(userData);
    setLoading(false);

    // router.dismissAll()
    // router.replace('/(tabs)/');
  }

  const handleSignUp = () => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        if (user) {
          createUserInDatabase(user, name);
        }
      })
      .catch((error) => {
        console.log(error.code, error.message)
        setLoading(false)
      })
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      behavior="padding">

      <View w={'90%'} alignSelf="center">
        <H2 color={'#0A3D3F'}>Cadastrar nova conta</H2>
        <View mt={'$5'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Nome:
          </Text>
          <Input
            onChangeText={setName}
            placeholder="Digite seu nome"
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

        <View mt={'$4'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Email:
          </Text>
          <Input
            onChangeText={setEmail}
            placeholder="Digite seu melhor email"
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

        <View mt={'$4'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Senha:
          </Text>
          <Input
            onChangeText={setPassword}
            placeholder="Digite uma senha"
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

        <View mt={'$4'}>
          <Text
            fontSize={16}
            fontWeight={'900'}
            color={'#0E5447'}
          >
            Confirme sua senha:
          </Text>
          <Input
            placeholder="Repita sua senha"
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
        <CustomButton loading={loading} onPress={handleSignUp} mt={'$4'}>Realizar Cadastro</CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
}