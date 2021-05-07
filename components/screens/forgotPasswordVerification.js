import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import aoConfirmSignIn from "./Images/AustralianOpen/aoConfirmSignUp.jpg";
import {
  validateUsername,
  validatePassword,
} from "./validationSchema";
import { Auth } from "aws-amplify";

export default function confirmSignIn(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmationCode: "",
  });

  const [error, setError] = useState({
    password: "",
    username: "",
  });

  async function onSubmit() {
    const { username, password, confirmationCode: code } = state;
    const usernameError = validateUsername(state.username);
    const passwordError = validatePassword(password);
    if (passwordError || usernameError) {
      setError({
        password: passwordError,
        username: usernameError,
      });
    } else {
      try {
        const user = await Auth.confirm(
          username,
          password,
          code,
          console.log("onSubmit confirmsignIn", user, password)
        );
        setState({ confirmationCode: "" });
        props.onStateChange("signIn");
      } catch (error) {
        console.log("onSubmit confirmsignIn", error.message);
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === "confirmSignIn") {
    return (
      <React.Fragment>
        <ImageBackground
          source={aoConfirmSignIn}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            {/* <View style={styles.headingSection}>
            logo here
              <Image
                source={ballReflection}
                style={{ width: 100, height: 100 }}
              />
            </View> */}
            <Text style={styles.heading}>Reset Pssword</Text>

            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
            />

            <Text style={styles.error}>{error.username}</Text>

            <TextInput
              //   secureTextEntry
              placeholder=" Confirmation Code"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) =>
                setState({ ...state, confirmationCode: text })
              }
              value={state.confirmationCode}
            />

            <TextInput
              placeholder="New Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, password: text })}
              value={state.password}
            />

            <Text style={styles.error}>{error.password}</Text>

            <TouchableOpacity onPress={() => onSubmit()}>
              <View style={styles.signupBtn}>
                <Text style={styles.buttonText}>Confirm</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
              <Button
                color="transparent"
                title="Back to Sign In"
                onPress={() => props.onStateChange("signIn", {})}
                accessibilityLabel="back to sign in"
              />
              {/* <Button
                color="transparent"
                title="back to sign in"
                onPress={() => props.onStateChange("signIn", {})}
                accessibilityLabel="back to sign in"
              /> */}
            </View>
          </View>
        </ImageBackground>
      </React.Fragment>
    );
  } else {
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
    color: "white",
    padding: 10,
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
  error: {
    color: "red",
    paddingBottom: 10,
  },
});
