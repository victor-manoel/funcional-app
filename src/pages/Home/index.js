import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button} from 'react-native';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List} from './styles';

export default function Home() {

  const [historico, setHistorico]= useState([]);
  const [saldo, setSaldo] = useState(0);


  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
      .limitToLast(1000).on('value', (snapshot)=>{
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            nome: childItem.val().nome,
            plano: childItem.val().plano,
            valor: childItem.val().valor,
            obs: childItem.val().obs,
          };
          
          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })

    }

    loadList();
  }, []);

 return (
    <Background>
      <Header/>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
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