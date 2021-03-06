import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Vencimentos from "../pages/Vencimentos";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: "#171717",
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        activeTintColor: "#FFF",
        activeBackgroundColor: "gray",
        inactiveBackgroundColor: "#000",
        inactiveTintColor: "#DDD",
        itemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Registrar" component={New} />
      <AppDrawer.Screen name="Vencimentos" component={Vencimentos} />
      <AppDrawer.Screen name="Perfil" component={Profile} />
      <AppDrawer.Screen name="Buscar" component={Search} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
