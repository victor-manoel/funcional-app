import React, { useEffect } from "react";

import { format } from "date-fns";

import { toArray, orderBy } from "lodash";

import Header from "../../components/Header";
import HistoricoItem from "../../components/HistoricoList";

import { Container, Background, HistoricoList } from "./styles";

import { sortHistoricoVencimentos } from "../../utils/sorting";

import firebase from "../../services/firebaseConnection";

const Vencimentos = () => {
  const [vencimentos, setVencimentos] = React.useState();

  useEffect(() => {
    const historico = firebase.database().ref("historico");

    const yesterday = format(new Date(), "dd/MM/yyyy");

    historico
      .orderByChild("date")
      .endAt(yesterday)
      .on("value", (snapshot) =>
        snapshot.forEach((child) => {
          const vencimentos = orderBy(
            toArray(child.val()),
            ["datev", "nome"],
            ["asc", "asc"]
          );

          const vencimentosWithKey = vencimentos.map((vencimento, index) => ({
            key: String(index),
            ...vencimento,
          }));

          const sortedVencimentos = sortHistoricoVencimentos(
            vencimentosWithKey
          );

          setVencimentos(sortedVencimentos);
        })
      );
  }, []);

  return (
    <Background>
      <Header></Header>
      <Container>
        <HistoricoList>
          {vencimentos?.map((vencimento) => (
            <HistoricoItem key={vencimento.key} data={vencimento} />
          ))}
        </HistoricoList>
      </Container>
    </Background>
  );
};

export default Vencimentos;
