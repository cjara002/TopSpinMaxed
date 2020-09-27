import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from "react-native";

export class playerForm extends React.Component {
  state = {
    name: "",
    skill: "",
    image: "",
    city: "",
  };

  handleSubmitPlayer = () => {
      this.props.navigation.navigate("DashBoardRT");
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.playerBG}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.text, styles.borderTop}
              placeholder="Name"
              spellCheck={false}
              onChangeText={(text) => this.setState({ name: text })}
              value={this.state.name}
            />
            <TextInput
              style={styles.text, styles.borderTop}
              placeholder="Skill"
              spellCheck={false}
              onChangeText={(text) => this.setState({ skill: text })}
              value={this.state.skill}
            />
            <TextInput
              style={styles.text, styles.borderTop}
              placeholder="Image"
              spellCheck={false}
              onChangeText={(text) => this.setState({ image: text })}
              value={this.state.image}
            />
            <TextInput
              style={styles.text, styles.borderTop}
              placeholder="City"
              spellCheck={false}
              onChangeText={(text) => this.setState({ city: text })}
              value={this.state.city}
            />
          </View>
          <TouchableHighlight
            onPress={this.handleSubmitPlayer}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Submit Player </Text>
          </TouchableHighlight>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
    playerBG: {
        flex: 1,
        backgroundColor: "#31455a"
    },
    fieldContainer: {
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: "red",
        borderColor: "#48BBEC",
        alignSelf: "stretch",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    borderTop: {
        borderColor: "#edeeef",
        borderWidth: 2.5
    }
})
