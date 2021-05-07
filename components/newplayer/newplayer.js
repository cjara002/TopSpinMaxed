import React from "react";
import { StyleSheet, View, Text, CheckBox, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

export class NewPlayer extends React.Component {
  state = {
    isSelected: false,
    level: "select your level"
  };

  agreement = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  levelChange = (value) => {
    this.setState({
        level: value
    });
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.playerCard}>
          <View>
            <Text style={styles.formLabel}> New Player</Text>
          </View>

          <View>
            <TextInput placeholder="First Name" style={styles.inputStyle}/>

            <TextInput placeholder="Last Name" style={styles.inputStyle}/>


            {/* <TextInput placeholder="Skill Level" style={styles.inputStyle}/> */}

            <Picker
            selectedValue={this.state.level}
            onValueChange={this.levelChange}
            > 
            <Picker.Item label="Beginner" value="Beginner" />
            <Picker.Item label="Intermediate" value="Intermediate" />
            <Picker.Item label="Amatuer" value ="Amatuer" />
            <Picker.Item label="Pro" value="Pro" />
            </Picker>

            <Text> Selected: {this.state.level}</Text>

            <TextInput placeholder="City" style={styles.inputStyle}/>

            <TextInput placeholder="Photo" style={styles.inputStyle}/>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.agreement}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Agree to terms and conditions</Text>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  playerCard: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 5,
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    // justifyContent: "center",
  },
  formLabel: {
    fontSize: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  }
});
