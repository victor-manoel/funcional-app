import React from "react";
import { View, Text } from "react-native";
import { Container, Name } from "./styles";

export default function SearchList({ data, onPress }) {
  return (
    <Container onPress={onPress}>
      <Name> {data.nome}</Name>
    </Container>
  );
}
