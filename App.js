import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Raleway_900black} from '@expo-google-fonts/raleway';
import firebase from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';

export default function App() {


  return (
    <NavigationContainer style={styles.container}>

      <AuthProvider>
      
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <Routes/>

      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
