import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  // Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import tennisSignUp from "./Images/tennisSignUp.jpg";
import {
  validatePassword,
  validateUsername,
  validateEmail,
} from "./validationSchema";
import { Auth } from "aws-amplify";

export default function SignUp2(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function onSubmit() {
    const usernameError = validateUsername(state.username);
    const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);
    if (usernameError || passwordError || emailError) {
      setError({
        username: usernameError,
        email: emailError,
        password: passwordError,
      });
    } else {
      try {
        const user = await Auth.signUp({
          username: state.username,
          password: state.password,
          attributes: {
            email: state.email,
        }
        },
        console.log("onSubmit", user, state.email));
        props.onStateChange("confirmSignUp", user)
      } catch (error) {
        console.log("onSubmit SignUp2", error.message);
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === "signUp") {
    return (
      <React.Fragment>
        <ImageBackground
          source={tennisSignUp}
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
            <Text style={styles.heading}>Sign Up</Text>

            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
            />

            <Text style={styles.error}>{error.username}</Text>

            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, email: text })}
              value={state.email}
            />

            <Text style={styles.error}>{error.email}</Text>

            <TextInput
              secureTextEntry
              placeholder=" Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, password: text })}
              value={state.password}
            />

            <Text style={styles.error}>{error.password}</Text>

            {/* Phone Number
            <TextInput
              secureTextEntry
              placeholder=" Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            /> */}
            <TouchableOpacity onPress={() => onSubmit()}>
              <View style={styles.signupBtn}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
              <Button
                color="transparent"
                title="Back to Sign In"
                onPress={() => props.onStateChange("signIn", {})}
                accessibilityLabel="back to sign in"
              />
              <Button
                color="transparent"
                title="Confirm a Code"
                onPress={() => props.onStateChange("confirmSignUp", {})}
                accessibilityLabel="Confirm a Code"
              />
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
