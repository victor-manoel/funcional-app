import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import {format} from 'date-fns';
import firebase from '../../services/firebaseConnection';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Axios from "axios";

import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText, UploadButton, UploadText, Avatar} from './styles';
import Picker from '../../components/Picker';

export default function New() {
 const [nome, setNome] = useState('');
 const [endereco, setEndereco] = useState('');
 const [valor, setValor] = useState('');
 const [plano, setPlano] = useState('null');
 const [avatar, setAvatar] = useState();
 const [capturedPhoto, setCapturedPhoto] = useState(null);
 const [url, setUrl] = useState();

 async function imagePickerCall(){
   if(Constants.platform.ios){
     const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(status !== 'granted'){
      alert('Precisamos dessa permissão');
      return;
    }
   }

   const data = await ImagePicker.launchCameraAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images});

   if(data.cancelled){
     return;
   }
   if(!data.uri){
    return;
  }
   setCapturedPhoto(data.uri);
   console.log(data);
 }


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
     date: format(new Date(), 'dd/MM/yy')
   })
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
         
         <Picker onChange={setPlano} plano={plano} />

         {
            url ?
            (
              <UploadButton onPress={ imagePickerCall }>
                <UploadText>+</UploadText>
                <Avatar
                source={{ uri: capturedPhoto }}
                />
              </UploadButton>
            ) : 
            (
              <UploadButton onPress={ imagePickerCall }>
                <UploadText>+</UploadText>
              </UploadButton>   
            )
          }  

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}