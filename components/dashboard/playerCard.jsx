import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import propTypes from "prop-types";
// import { getCountdownParts } from "./api";

export default function playerCard({ event }) {
    // id: 1,
    // firstName: "Liza",
    // lastName: "McSmith",
    // skillLevel: "Beginner",
    // city: "Long Beach",
    // picture: "https://bit.ly/3gCab98"

//   const { days, hours, minutes, seconds } = getCountdownParts(event.date);

//   function formatDate(dateString) {
//     //   console.log("formatDate:", dateString)
//     //   debugger;
//     const parsed = moment(new Date(dateString));

//     if (!parsed.isValid()) {
//       return dateString;
//     }

//     return parsed.format(" D MMM YYYY");
//   }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {/* <Text style={styles.date}> {formatDate(event.date)}</Text> */}
        <Text style={styles.firstName}> {event.firstName}</Text>
        {/* <Image style={styles.date} source={{uri: event.picture}}/> */}
      </View>
      {/* <Image style={styles.date} source={{uri: event.picture}}/> */}
           
      <View style={styles.counterContainer}>
        {/* <Text style={styles.title}> {event.firstName}</Text> */}

      <Image style={styles.userImage} source={{uri: event.picture}}/>

        <View style={styles.container}>
          <Text style={styles.containerLabel}>SKILL</Text>
          <Text style={styles.containerText}>{event.skillLevel}</Text>

        </View>

        <View style={styles.container}>
          <Text style={styles.containerLabel}>CITY</Text>
          <Text style={styles.containerText}>{event.city}</Text>

        </View>

        {/* <View style={styles.counter}>
          <Text style={styles.counterText}>{minutes}</Text>

          <Text style={styles.counterLabel}>MINUTES</Text>
        </View> */}

        {/* <View style={styles.counter}>
          <Text style={styles.counterText}>{seconds}</Text>

          <Text style={styles.counterLabel}>SECONDS</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },

  cardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  userImage: {
    width: "25%",
    height: "100%",
    // textAlign: "right",
    borderColor: "red",
    borderRadius: 50,
    borderWidth: 2
  },
  firstName: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: -7,
    textAlign: "left",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  container: {
    width: "25%",
    flex: 1
  },
  containerText: {
      fontSize: 15,
      textAlign: "center",
      // fontStyle: bigger
  },
  containerLabel: {
    fontSize: 10,
    fontWeight: "100",
    color: "#a3a3a3",
    textAlign: "center",
    paddingTop: 0
  }

});
