import React, { useContext, useState } from 'react';
import { View, Text, Button} from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List} from './styles';

export default function Home() {

  const [historico, setHistorico]= useState([
    {key: '1', tipo: 'receita', nome: 'victor'},
    {key: '2', tipo: 'despesa', nome: 'manoel'},
    {key: '3', tipo: 'receita', nome: 'adriano'},
    {key: '4', tipo: 'receita', nome: 'rodrigo'},
    {key: '5', tipo: 'receita', nome: 'lucas'},
  ]);

  const { user } = useContext(AuthContext);

 return (
    <Background>
      <Header/>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>Ultimos cadastros</Title>

      <List 
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={item => item.key}
      renderItem={({item}) => (<HistoricoList data={item}/>)}
      />
    </Background>
  );
}