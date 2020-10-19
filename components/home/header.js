import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ball from "./homeImages/ball.png";

export class Header extends React.Component {

  onPressButton = () => {
    console.log('PressButton');
   }

  render() {
    return (
      <React.Fragment>
        <View style={styles.headStyle}>
          <Text style={styles.appName}>TopSpin Maxed</Text>
          <Image style={styles.logoImage}source={ball}/>
          <Text style={styles.headText}>Login</Text>
          <Button onPress={this.goTologinPage} title="Log In"/>
    {/* <Text> Hello  { this.props.user && this.props.user.email}</Text> */}
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "white",
    fontSize: 20,
    flex: 1
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
    backgroundColor : '#31455a',
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    // bordercolor
  },
  logoImage:{
    flex: 1,
    width: "100%",
    height: "10%",
    // color: "white"
  }
})