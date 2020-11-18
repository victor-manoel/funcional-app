import React from 'react';
import { View, Text } from 'react-native';
import { Background, Container, AreaInput, Input } from './styles';

export default function SignIn() {
 return (
    <Background>
      <Container>

        <AreaInput>
          <Input
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='None'
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='None'
          />
        </AreaInput>


      </Container>
    </Background>
  );
}