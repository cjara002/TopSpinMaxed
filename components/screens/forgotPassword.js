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
import Rain from "./Images/rain.jpg";
import { validateUsername } from "./validationSchema";
import { Auth } from "aws-amplify";

export default function forgotPassword(props) {
  const [state, setState] = useState({
    username: "",
  });

  const [error, setError] = useState({
    username: "",
  });

  async function onSubmit() {
    const{username} = state;
    const usernameError = validateUsername(state.username);
    if (usernameError) {
      setError({
        username: usernameError,
      });
    } else {
      try {
        const user = await Auth.forgotPassword(
          // {
            // username: state.username,
            username,
          // },
          console.log("onSubmit forgotPassword", user, username),
        );
        props.onStateChange("confirmSignIn");
      } catch (error) {
        console.log("onSubmit forgotPassword", error.message);
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === "forgotPassword") {
    return (
      <React.Fragment>
        <ImageBackground
          source={Rain}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            {/* <View style={styles.headingSection}>
            can put my logo here
              <Image source={Ball} style={{ width: 100, height: 100 }} />
            </View> */}
            <Text style={styles.heading}>Reset Password</Text>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
            />

            <Text style={styles.error}>{error.username}</Text>

            <TouchableOpacity onPress={() => onSubmit()}>
              <View style={styles.signupBtn}>
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.buttonRow}>
              <Button
                color="transparent"
                title="Back to sign in"
                onPress={() => props.onStateChange("signIn", {})}
                accessibilityLabel="back to sign in"
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
