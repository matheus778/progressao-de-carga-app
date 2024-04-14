import { CustomButton } from "@/components/CustomButton";
import { Alert, KeyboardAvoidingView } from "react-native";
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();

  const IsValidInput = () => {
    if(name == ''){
      Alert.alert('Campo de nome em branco', 'Preencha o campo de nome corretamente.');
      return false;
    }
    
    if(email == '') {
      Alert.alert('Campo de email em branco', 'Preencha o campo de email corretamente.')
    }

    if(password ==  '') {
      Alert.alert('Campo de senha em branco', 'Preencha o campo de senha corretamente.');
      return false;
    }

    if(password.length < 8) {
      Alert.alert('Senha inválida', 'Digite uma senha com no minimo 8 cáracteres.')
      return false;
    }
    
    if(password != repeatPassword) {
      Alert.alert('Senha inválida', 'O campo confirmar senha tem que ser exatamente igual a senha digitada anteriormente.')
      return false;
    }
  }

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
    if(!IsValidInput()) {
      return
    }

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        if (user) {
          createUserInDatabase(user, name);
        }
      })
      .catch((error) => {
        Alert.alert('Erro ao realizar cadastro', 'verifique seus dados e tente novamente')    
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
            secureTextEntry
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
            onChangeText={setRepeatPassword}
            placeholder="Repita sua senha"
            secureTextEntry
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