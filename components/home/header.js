import { Auth } from "aws-amplify";
import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import ball from "./homeImages/ball.png";

export default function Header(props) {

  async function signOut() {
    try {
      await Auth.signOut(); 
      // props.onStateChange("signIn");
    } catch (error) {
      console.log("onSubmit signOut", error.message);
      Alert.alert(error.message);
    }
  }

  return (
    <React.Fragment>
      <View style={styles.headStyle}>
        <Text style={styles.appName}>TopSpin Maxed</Text>
        <Image style={styles.logoImage} source={ball} />
        {/* <Text style={styles.headText} 
          // onPress={this.goToLoginPage}
          onPress={() => onSubmit()}
            //this will become sign out later on
          >
            Sign Out
          </Text> */}
        <Button
          color="transparent"
          title="Sign Out"
          onPress={() => signOut()}
          accessibilityLabel="Sign Out"
        />
        {/* <Button onPress={this.goTologinPage} title="Log In"/> */}
        {/* <Text> Hello  {props.username}</Text> */}
      </View>
    </React.Fragment>
  );
  // }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "white",
    fontSize: 20,
    flex: 1,
  },
  appName: {
    textAlign: "left",
    color: "white",
    fontSize: 15,
    flex: 1,
  },
  headStyle: {
    paddingTop: 40,
    paddingRight: 10,
    backgroundColor: "#31455a",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    // bordercolor
  },
  logoImage: {
    flex: 1,
    width: "100%",
    height: "10%",
    // color: "white"
  },
});
