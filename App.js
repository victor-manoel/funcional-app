import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
     
      <StatusBar backgroundColor='131313' barStyle='light-content' />
      <Routes/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});