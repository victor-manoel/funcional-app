import React from "react";

import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";

import { Container, ButtonMenu, NovoText } from "./styles";

export default function Header({ secondary }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu
        onPress={() => navigation[secondary ? "goBack" : "toggleDrawer"]()}
      >
        {secondary ? (
          <AntDesign name="back" color="#FFF" size={30}></AntDesign>
        ) : (
          <Feather name="menu" color="#FFF" size={30} />
        )}
      </ButtonMenu>
      <NovoText>Studio Trainer</NovoText>
    </Container>
  );
}
