import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Feather from "react-native-vector-icons/Feather";

import SearchList from "../../components/SearchList";
import Header from "../../components/Header";

import { AuthContext } from "../../contexts/auth";

import firebase from "../../services/firebaseConnection";

import {
  Container,
  AreaInput,
  Input,
  List,
  InfoContainer,
  InfoLabel,
  Info,
} from "./styles";

const SearchStack = createStackNavigator();

const SearchScreen = () => (
  <SearchStack.Navigator
    screenOptions={{
      header: () => {},
    }}
  >
    <SearchStack.Screen name="Search" component={Search}></SearchStack.Screen>
    <SearchStack.Screen
      name="Detail"
      component={HistoricoDetail}
    ></SearchStack.Screen>
  </SearchStack.Navigator>
);

const HistoricoDetail = ({
  route: {
    params: { dataVencimento, endereco, nome, obs, plano, valor },
  },
}) => {
  const displayInfo = (info) => (info ? info : "Informação não preenchida");

  return (
    <Container>
      <Header secondary></Header>
      <View style={{ flex: 1 }}>
        <InfoContainer>
          <InfoLabel>Nome: </InfoLabel>
          <Info>{displayInfo(nome)}</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Endereço: </InfoLabel>
          <Info>{displayInfo(endereco)}</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Observação: </InfoLabel>
          <Info>{displayInfo(obs)}</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Plano: </InfoLabel>
          <Info>{displayInfo(plano)}</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Valor: </InfoLabel>
          <Info>{displayInfo(valor)}</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Data de vencimento: </InfoLabel>
          <Info>{displayInfo(dataVencimento)}</Info>
        </InfoContainer>
      </View>
    </Container>
  );
};

const Search = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const { user: usuario } = useContext(AuthContext);

  useEffect(() => {
    let uid = usuario.uid;

    if (!input) {
      setUsers([]);
      return;
    }

    const historico = firebase.database().ref("historico");

    historico
      .child(uid)
      .orderByChild("nome")
      .on("value", function (snapshot) {
        const listsUsers = [];

        snapshot.forEach((historico) => {
          historico.val().nome.includes(input.trim()) &&
            listsUsers.push({ id: historico.key, ...historico.val() });
        });

        setUsers(listsUsers);
      });
  }, [input]);

  return (
    <Container>
      <Header></Header>
      <AreaInput>
        <Feather name="search" color="#e52246" size={20} />
        <Input
          placeholder="Buscar"
          placeholderTextColor="#353840"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </AreaInput>

      <List
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SearchList
            data={item}
            onPress={() => navigation.navigate("Detail", item)}
          />
        )}
      />
    </Container>
  );
};

export default SearchScreen;
