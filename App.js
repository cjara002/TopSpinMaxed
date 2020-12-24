import React from "react";
import "react-native-gesture-handler";
// import { loading } from "./components/screens/loading.js";
import SignIn from "./components/screens/login.js";
import  SignUp2  from "./components/screens/SignUp2.js";
import  ConfirmSignUp  from "./components/screens/confirmSignUp.js";
// import  ForgotPassword  from "./components/screens/forgotPassword.js";
import  Home  from "./components/home/home";
// import { dashBoard }  from "./components/dashboard/dashBoard.js";
// import { playerForm } from "./components/dashboard/playerForm.jsx";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import {
  Authenticator,
  // SignIn,
  ConfirmSignIn,
  ForgotPassword,
} from "aws-amplify-react-native";
import { View, StyleSheet } from "react-native";
// import AWSAppSyncClient from "aws-appsync";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure({...config,
  Analytics: {
    disabled: true,
  }
});

console.disableYellowBox = true;

// async function appLoaded() {
//   const client = new AWSAppSyncClient({
//     url: "https://th6j5luwtfh4boo7ljsyeoredm.appsync-api.us-west-1.amazonaws.com/graphql",
//     region: "us-west-1",
//     auth: {
//       type: "API-KEY",
//       apiKey: "da2-o46xjser2rflnh44csgwaexuq4",
//     }
//   });
// }

// const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator usernameAttributes="username" hideDefault={true}
      onStateChange={(authState) => console.log("authState:", authState)}>
        <SignUp2 />
         <ConfirmSignUp />
         <SignIn />
        <Home />
        {/* <ForgotPassword /> */}

        <ConfirmSignIn />
        <ForgotPassword /> 

      </Authenticator>
    </View>

    // <NavigationContainer>
    //   <Authenticator usernameAttributes="username">
    //   <Stack.Navigator
    //   screenOptions = {{ headerShown: false}}
    //   //will set this to login or loading screen once I set up users
    //   // initialRouteName = {"HomeRT"}
    //   initialRouteName = {"loginRT"}

    //   // initialRouteName = {"loadingRT"}
    //   >
    //     <Stack.Screen name={"HomeRT"} component={Home} />
    //     <Stack.Screen name={"DashBoardRT"} component={dashBoard} />
    //     <Stack.Screen name={"playerFormRT"} component={playerForm} />
    //     <Stack.Screen name={"loginRT"} component={Login} />
    //     <Stack.Screen name={"signUpRT"} component={signUp} />
    //     <Stack.Screen name={"loadingRT"} component={loading} />
    //   </Stack.Navigator>
    //     </Authenticator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
