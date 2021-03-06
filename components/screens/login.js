import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import Clay from "./Images/clay.jpg";
// import Ball from "./Images/ballReflection.jpg";
import {
  validateUsername,
  validatePassword,
} from "./validationSchema";
import { Auth } from "aws-amplify";
import aoLogin from "./Images/AustralianOpen/aoLoginScreen.jpg"

export default function Login(props) {
  const [state, setState] = useState({
    username: "",
    // email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    // email: "",
    password: "",
  });

  async function onSubmit() {
    const usernameError = validateUsername(state.username);
    // const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);
    if (usernameError || passwordError) {
      setError({
        username: usernameError,
        // email: emailError,
        password: passwordError,
      });
    } else {
      try {
        const user = await Auth.signIn(
          {
            username: state.username,
            password: state.password,
            //   attributes: {
            //     email: state.email,
            // }
          }
          // console.log("onSubmit", user, state.email)
        );
        props.onStateChange("home", user);
      } catch (error) {
        console.log("onSubmit logIn", error.message);
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === "signIn") {
    return (
     <React.Fragment>
        <ImageBackground source={aoLogin} style={{ width: "100%", height: "100%" }}>
          <View style={styles.container}>
            {/* <View style={styles.headingSection}>
            can put my logo here
              <Image source={Ball} style={{ width: 100, height: 100 }} />
            </View> */}
            <Text style={styles.heading}>TopSpin Maxed</Text>
            {/* {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )} */}
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
            />
  
            <Text style={styles.error}>{error.username}</Text>
  
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, password: text })}
              value={state.password}
            />
  
            <Text style={styles.error}>{error.password}</Text>
  
            <TouchableOpacity onPress={() => onSubmit()}>
              <View style={styles.signupBtn}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
              <Button
                color="transparent"
                title="Forgot Password"
                onPress={() => props.onStateChange("forgotPassword", {})}
                accessibilityLabel="Forgot Password"
              />
              <Button
                color="transparent"
                title="Sign Up"
                onPress={() => props.onStateChange("signUp", {})}
                accessibilityLabel="Sign Up"
              />
            </View>
          </View>
        </ImageBackground>
     </React.Fragment>
    );
  }else {
    return <></>;
  }
}
const heightConst = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    height: heightConst - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headingSection: {
    borderColor: 1,
    textAlign: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  heading: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 8,
    color: "#fff",
  },
  signupBtn: {
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    height: 35,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonRow: {
    // flex: 1,
    flexDirection: "row",
  },
});
