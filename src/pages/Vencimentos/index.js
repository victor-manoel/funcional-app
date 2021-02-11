import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native";

import { format } from "date-fns";

import { toArray, orderBy } from "lodash";

import Header from "../../components/Header";
import HistoricoItem from "../../components/HistoricoList";

import { AuthContext } from "../../contexts/auth";

import { Container, Background, HistoricoList } from "./styles";

import { sortHistoricoVencimentos } from "../../utils/sorting";
import { stringToReverseDate } from "../../utils/date";

import firebase from "../../services/firebaseConnection";

const Vencimentos = () => {
  const [vencimentos, setVencimentos] = useState([]);

  const auth = useContext(AuthContext);

  useEffect(() => {
    const historico = firebase.database().ref("historico");

    const today = format(new Date(), "yyyy/MM/dd");

    historico
      .orderByKey()
      .equalTo(auth.user.uid)
      .on("value", (snapshot) => {
        snapshot.forEach((child) => {
          const vencimentos = orderBy(
            toArray(child.val()),
            ["dataVencimento", "nome"],
            ["asc", "asc"]
          )
            // Retorna os vencimentos com data menor ou igual a hoje
            .filter(
              (vencimento) =>
                stringToReverseDate(vencimento.dataVencimento) <= today
            );

          const vencimentosWithKey = vencimentos.map((vencimento, index) => ({
            key: String(index),
            ...vencimento,
          }));

          const sortedVencimentos = sortHistoricoVencimentos(
            vencimentosWithKey
          );

          setVencimentos(sortedVencimentos);
        });
      });
  }, []);

  return (
    <Background>
      <Header></Header>
      <Container>
        <HistoricoList>
          {vencimentos?.map((vencimento) => (
            <HistoricoItem
              key={vencimento.key}
              data={vencimento}
              removeItem={() => console.log("TO REMOVE")}
            />
          ))}
          {!vencimentos.length && (
            <Text style={{ color: "white" }}>
              Não há vencimentos a serem exibidos.
            </Text>
          )}
        </HistoricoList>
      </Container>
    </Background>
  );
};

export default Vencimentos;
