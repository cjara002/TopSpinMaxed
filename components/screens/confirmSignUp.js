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
import tennisSignUp from "./Images/tennisSignUp.jpg";
import {
//   validateEmail,
  validateUsername,
} from "./validationSchema";
import { Auth } from "aws-amplify";

export default function confirmSignUp(props) {
  const [state, setState] = useState({
    username: "",
    // email: "",
    confirmationCode: "",
  });

  const [error, setError] = useState({
    username: "",
    // email: "",
    // confirmationCode: "",
  });

  async function onSubmit() {
    const {username, confirmationCode: code} = state;
    const usernameError = validateUsername(username);
    if ( usernameError) {
      setError({
        username: usernameError,
      });
    } else {
      try {
        const user = await Auth.confirmSignUp( username, code,
        console.log("onSubmit confirmsignup", user, username),
        );
        setState({confirmationCode: ""})
        props.onStateChange("signIn")
      } catch (error) {
        console.log("onSubmit confirmsignup", error.message);
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === "confirmSignUp") {
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
            <Text style={styles.heading}>Confirm Sign Up</Text>

            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
            />

            <Text style={styles.error}>{error.username}</Text>

            {/* <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, email: text })}
              value={state.email}
            />

            <Text style={styles.error}>{error.email}</Text> */}

            <TextInput
            //   secureTextEntry
              placeholder=" Confirmation Code"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, confirmationCode: text })}
              value={state.confirmationCode}
            />

            {/* <Text style={styles.error}>{error.confirmationCode}</Text> */}

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
              <Button
                color="transparent"
                title="back to sign up"
                onPress={() => props.onStateChange("signUp", {})}
                accessibilityLabel="back to sign up"
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
