import React from 'react';
import "react-native-gesture-handler";
import { loading } from "./components/screens/loading.js";
import { Login } from "./components/screens/login.js";
import { signUp } from "./components/screens/signUp.js";
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
      //will set this to login or loading screen once I set up users
      initialRouteName = {"HomeRT"}

      // initialRouteName = {"loadingRT"}
      >
        <Stack.Screen name={"HomeRT"} component={Home} />
        <Stack.Screen name={"DashBoardRT"} component={dashBoard} />
        <Stack.Screen name={"playerFormRT"} component={playerForm} />
        <Stack.Screen name={"loginRT"} component={Login} />
        <Stack.Screen name={"signUpRT"} component={signUp} />
        <Stack.Screen name={"loadingRT"} component={loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
