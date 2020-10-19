import React from 'react';
import "react-native-gesture-handler";
import { Login } from "./components/screens/login.js";
import { Home } from "./components/home/home";
import { dashBoard }  from "./components/dashboard/dashBoard.js";
import { playerForm } from "./components/dashboard/playerForm.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const Stack = createStackNavigator();


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{ headerShown: false}}
      initialRouteName = {"HomeRT"}
      >
        <Stack.Screen name={"HomeRT"} component={Home} />
        <Stack.Screen name={"DashBoardRT"} component={dashBoard} />
        <Stack.Screen name={"playerFormRT"} component={playerForm} />
        <Stack.Screen name={"loginRT"} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
