import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {View, Text} from 'react-native';

import {Container, ButtonMenu, NovoText} from './styles';

export default function Header() {
 const navigation = useNavigation();

 return (
   <Container>
       <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
         <Icon name="menu" color="#FFF" size={30} />
       </ButtonMenu>
       <NovoText>Studio Trainer</NovoText>
   </Container>
  );
}