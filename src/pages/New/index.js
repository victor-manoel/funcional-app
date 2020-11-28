import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';

import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText} from './styles';
import Picker from '../../components/Picker';

export default function New() {
 const [nome, setNome] = useState('');
 const [endereco, setEndereco] = useState('');
 const [valor, setValor] = useState('');
 const [plano, setPlano] = useState('um');

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <Background>
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
         
         <Picker onChange={setPlano} tipo={plano} />

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}