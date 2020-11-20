import React, {useContext, useState} from 'react';
import { View, Text, Platform } from 'react-native';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import {AuthContext} from '../../contexts/auth';

export default function SignIn() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUp} = useContext(AuthContext);

  function handleSignUp(){
    signUp(email,password,nome);
  }

 return (
    <Background>
      <Container
      behavior={Platform.Os === 'ios' ? 'padding' : ''}
      enabled
      >
        
        <AreaInput>
          <Input
          placeholder='Nome'
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  );
}