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
import { Header } from "./header";
import { Menu } from "./menu";

export class Home extends React.Component {
  state = {
    currentUser: null,
    errorMessage: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header navigate={navigate} user={this.state.currentUser}/>
          <Menu navigate={navigate} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // elevation: 0
  },
});
