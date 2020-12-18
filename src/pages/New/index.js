import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import {format} from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText, UploadButton, UploadText, Avatar} from './styles';
import Picker from '../../components/Picker';

export default function New() {
 const navigation = useNavigation();
 const [nome, setNome] = useState('');
 const [endereco, setEndereco] = useState('');
 const [valor, setValor] = useState('');
 const [plano, setPlano] = useState('');
 const [obs, setObs] = useState('');

 const {user:usuario} = useContext(AuthContext);


 function handleSubmit(){
   
   Alert.alert(
     'Confirmando dados',
     `Nome: ${nome} / Plano: ${plano} meses / Valor: ${parseFloat(valor)} reais`,
     [{
       text: 'Cancelar',
       style: 'cancel'
     },
    {
      text: 'Continuar',
      onPress: () => handleAdd()
    }]
   )
 }

 async function handleAdd(){
  let uid = usuario.uid;

   let key = await firebase.database().ref('historico').child(uid).push().key;
   await firebase.database().ref('historico').child(uid).child(key).set({
     nome: nome,
     endereco: endereco,
     valor: parseFloat(valor),
     plano: plano,
     obs: obs,
     date: format(new Date(), 'dd/MM/yyyy')
   })

   //atualizar saldo
   let user = firebase.database().ref('users').child(uid);
   await user.once('value').then((snapshot)=>{
     let saldo = parseFloat(snapshot.val().saldo);

     saldo += parseFloat(valor);

     user.child('saldo').set(saldo);
   });
   Keyboard.dismiss();
   setNome('');
   setEndereco('');
   setValor('');
   setPlano('null');
   setObs('');
   navigation.navigate('Home');
   
  }

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <Background >
       <Header/>

       <SafeAreaView style={{ alignItems: 'center' }}>
         <Input
         placeholder="Nome"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={nome}
         onChangeText={ (text) => setNome(text) }
         />

         <Input
         placeholder="Endereço"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={endereco}
         onChangeText={ (text) => setEndereco(text) }
         />

         <Input
         placeholder="Valor Pago"
         keyboardType="numeric"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={valor}
         onChangeText={ (text) => setValor(text) }
         />

         <Input
         placeholder="Observação"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={obs}
         onChangeText={ (text) => setObs(text) }
         />
         
         <Picker onChange={setPlano} plano={plano} />

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}