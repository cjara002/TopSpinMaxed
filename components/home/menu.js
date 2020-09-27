import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert, Image } from "react-native";
import compassImage from "./homeImages/compass.png";
import scoreImage from "./homeImages/review.png";
import Racket from "./homeImages/Racket.png";
import Calendar from "./homeImages/Calendar.png";
import TennisCourt from "./homeImages/TennisCourt.png";
// import Phone from "./homeImages/Phone.png";
// import Question from "./homeImages/Question.png";

export class Menu extends React.Component {
  testAlert = () => {
    Alert.alert("You tapped the button");
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <React.Fragment>
        {/* menu will offer access to  Tennis DashBoard, Score Card, Tennis Feed, Calendar, Tennis Court, Contact Me, FAQ*/}
        <View style={styles.menuCard}>

          <View style={styles.menuHeaderRow}>
            <TouchableOpacity onPress={() => this.props.navigate("DashBoardRT")} style={styles.menuSplit}>
              <Image style={styles.menuImageLogo} source={compassImage}/>
              <Text style={styles.menuText}> DASHBOARD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuHeaderContainerROW}>
            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
            <Image style={styles.menuImageLogo} source={scoreImage}/>
              <Text style={styles.menuText}> SCORE CARD</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
              <Image style={styles.menuImageLogo} source={Racket}/>
              <Text style={styles.menuText}> TENNIS FEED</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuHeaderContainerROW}>
            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
            <Image style={styles.menuImageLogo} source={Calendar}/>
              <Text style={styles.menuText}> CALENDAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
              <Image style={styles.menuImageLogo} source={TennisCourt}/>
              <Text style={styles.menuText}> TENNIS COURT</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.menuHeaderContainerROW}>
            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
            <Image style={styles.menuImageLogo} source={Phone}/>
              <Text style={styles.menuText}> CONTACT ME</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.testAlert} style={styles.menuSplit}>
              <Image style={styles.menuImageLogo} source={Question}/>
              <Text style={styles.menuText}> FAQs</Text>
            </TouchableOpacity>
          </View> */}


        </View>
      </React.Fragment>
    );
  }
}


const styles = StyleSheet.create({
  menuCard: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 5,
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
    // elevation: 3
  },
  menuHeaderRow: {
    flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 5,
    elevation: 3
  },
  menuText: {
    textAlign: "center",
    // flex: 1,
    margin: 10,
    // fontSize: 10
  },
  menuImageLogo:{
    flex: 1,
    width: undefined,
    height: undefined,
    margin: 10,
  },
  menuHeaderContainerROW: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderWidth: 1,
    // marginBottom: 10,
    borderStyle: "solid",
    borderColor: "white",
    // borderWidth: 1,
    marginBottom: 5,
    elevation: 3
  },
  menuSplit: {
    width: "25%",
    flex: 1
  }
})