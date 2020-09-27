import React from "react";
import { 
    FlatList,
     StyleSheet,
    //  Text
     } from "react-native";
import PlayerCard from "./playerCard";
import ActionButton from "react-native-action-button";

export class dashBoard extends React.Component {
  state = {
    players: [
      {
    id: 1,
    firstName: "Liza",
    lastName: "McSmith",
    skillLevel: "Beginner",
    city: "Long Beach",
    picture: "https://bit.ly/3gCab98"
    },
      {
    id: 2,
    firstName: "Rafael",
    lastName: "Nadal",
    skillLevel: "Pro",
    city: "Los Angeles",
    picture: "https://bit.ly/3hCV94j"
    },
      {
    id: 3,
    firstName: "Lakisha",
    lastName: "Brown",
    skillLevel: "Novice",
    city: "Compton",
    picture: "https://bit.ly/3lojrBu"
    },
      {
    id: 4,
    firstName: "Lalo",
    lastName: "Santos",
    skillLevel: "Pro",
    city: "Huntington Park",
    picture: "https://bit.ly/3hzB7Yw"
    },
    ],
  };

addNewPlayer = () => {
  this.props.navigation.navigate("playerFormRT");
}

  render() {
    return (
      <React.Fragment> 
      <FlatList
        style={styles.list}
        key="flatlist"
        data={this.state.players}
        renderItem={({ item }) => <PlayerCard event={item} />}
        keyExtractor={(item) => item.id}
      />
        <ActionButton
        key="fab"
        onPress={this.addNewPlayer}
        buttonColor="rgba(231, 76, 60, 1)"/>
        </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#31455a",
  },
});
