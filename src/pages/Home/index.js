import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import HistoricoList from "../../components/HistoricoList";
import Icon from "react-native-vector-icons/MaterialIcons";
import { stringToReverseDate } from "../../utils/date";

import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  List,
  Area,
} from "./styles";

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("date")
        .limitToLast(2000)
        .on("value", (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            const today = format(new Date(), "yyyy/MM/dd");
            const dataVencimento = stringToReverseDate(
              childItem.val().dataVencimento
            );

            if (dataVencimento > today) {
              let list = {
                key: childItem.key,
                nome: childItem.val().nome,
                plano: childItem.val().plano,
                valor: childItem.val().valor,
                obs: childItem.val().obs,
                date: childItem.val().date,
                dataVencimento: childItem.val().dataVencimento,
              };

              setHistorico((oldArray) => [...oldArray, list].reverse());
            }
          });
        });
    }

    loadList();
  }, []);

  function handleDelete(data) {
    Alert.alert("Atenção!", `Voce deseja excluir ${data.nome} ?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => handleDeleteSuccess(data),
      },
    ]);
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(data.key)
      .remove()
      .catch((error) => {
        console.log(error);
      });
  }

  function zerarSaldo() {
    Alert.alert("Atenção!", `Voce deseja zerar o saldo de ${saldo} reais ?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => zeroSuccess(),
      },
    ]);
  }

  async function zeroSuccess() {
    let user = firebase.database().ref("users").child(uid);
    await user.once("value").then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      saldo = 0;

      user.child("saldo").set(saldo);
    });
  }

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <TouchableOpacity onPress={() => zerarSaldo()}>
          <Saldo>
            R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
          </Saldo>
        </TouchableOpacity>
      </Container>

      <Area>
        <TouchableOpacity>
          <Icon name="event" color="#FFF" size={30} />
        </TouchableOpacity>
        <Title>Ultimos cadastros</Title>
      </Area>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <HistoricoList data={item} removeItem={handleDelete} />
        )}
      />
    </Background>
  );
}
