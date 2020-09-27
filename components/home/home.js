import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "./header";
import { Menu } from "./menu";

export class Home extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <React.Fragment>
                <View style={styles.container}>
                    <Header navigate={navigate}/> 
                    <Menu navigate={navigate}/> 
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // elevation: 0
    },
});
