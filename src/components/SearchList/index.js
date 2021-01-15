import React from 'react';
import { View, Text } from 'react-native';
import { Container, Name } from './styles';

export default function SearchList({data}) {
 return (
   <Container onPress={() => alert('clicou')}>
     <Name>{data.nome}</Name>
   </Container>
  );
}