import React from "react";
import {
  View,
  StyleSheet,
//   Alert,
//   Platform,
//   Image,
//   Text,
//   Button,
} from "react-native";
import  Header  from "./header";
import { Menu } from "./menu";

export default function Home(props) {

  // render() {
    // const { navigate } = this.props.navigation;
    if (props.authState === "signedIn") {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header user={props.user}
          // navigate={navigate}
          //  user={this.state.currentUser}/
           />
          <Menu 
          // navigate={navigate} 
          />
        </View>
      </React.Fragment>
    );
    }else {
          return <></>;
        }
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    height: "100%"
    // elevation: 0
  },
});
