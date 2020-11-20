import React, {useState, useContext} from 'react';
import { View, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 return (
    <Background>
      <Container
      behavior={Platform.Os === 'ios' ? 'padding' : ''}
      enabled
      >
        <Text style={{ fontSize:35, alignItems: 'center', justifyContent: 'center', color: '#FFF', marginBottom: 20}}>Studio Trainer</Text>
        <AreaInput>
          <Input
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
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

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar sua conta</LinkText>
        </Link>

      </Container>
    </Background>
  );
}