import React from 'react';
import "react-native-gesture-handler";
import { Home } from "./components/home/home";
import { dashBoard }  from "./components/dashboard/dashBoard.js";
import { playerForm } from "./components/dashboard/playerForm.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{ headerShown: false}}
      initialRouteName = {"HomeRT"}
      // RouteName = {DashBoard}
      >
        <Stack.Screen name={"HomeRT"} component={Home} />
        <Stack.Screen name={"DashBoardRT"} component={dashBoard} />
        <Stack.Screen name={"playerFormRT"} component={playerForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
