import { Auth } from "aws-amplify";
import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import ball from "./homeImages/ball.png";

export default function Header(props) {

  async function signOut() {
    try {
      await Auth.signOut(); 
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
        <Button
          color="transparent"
          title="Sign Out"
          onPress={() => signOut()}
          accessibilityLabel="Sign Out"
          style={styles.headText}
        />
        {/* <Text style={styles.headStyle}> Hello {props.user}</Text> */}
      </View>
    </React.Fragment>
  );
  // }
}

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 40,
    paddingRight: 10,
    backgroundColor: "#31455a",
    flexDirection: "row",
    borderBottomWidth: 2,
  },
  headText: {
    textAlign: "right",
    color: "white",
    fontSize: 20,
  },
  appName: {
    textAlign: "left",
    color: "white",
    fontSize: 15,
    flex: 1,
  },
  logoImage: {
    flex: 1,
    width: "100%",
    height: "10%",
    // color: "white"
  },
});
