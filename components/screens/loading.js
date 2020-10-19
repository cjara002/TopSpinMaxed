import React from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

export default class loading extends React.Component {

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Text> LOADING...</Text>
                    <ActivityIndicator size="large"/>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})