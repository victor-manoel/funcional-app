import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert, Button} from 'react-native';
import {format} from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';
import DateTimePicker from '@react-native-community/datetimepicker';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText, UploadButton, UploadText, Avatar} from './styles';
import Picker from '../../components/Picker';

export default function New() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

 const navigation = useNavigation();
 const [nome, setNome] = useState('');
 const [endereco, setEndereco] = useState('');
 const [valor, setValor] = useState('');
 const [plano, setPlano] = useState('');
 const [obs, setObs] = useState('');

 const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
};
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const showDatepicker = () => {
  showMode('date');
};


 const {user:usuario} = useContext(AuthContext);


 function handleSubmit(){
   
   Alert.alert(
     'Confirmando dados',
     `Nome: ${nome} / Plano: ${plano} meses / Valor: ${parseFloat(valor)} reais / Data: ${date}` ,
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
     date: format(new Date(), 'dd/MM/yyyy'),
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
   setPlano('');
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

        
     
        <Button onPress={showDatepicker} title="Data de Vencimento" />
      
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={date}
          is24Hour={true}
          display="default"
          minimumDate = {new Date(2021, 0, 1)}
          onChange={onChange}
        />
      )}
   

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}