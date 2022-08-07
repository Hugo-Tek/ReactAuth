import React from "react";
import { StyleSheet, View, Text } from "react-native";

function GroupsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Groups Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default GroupsScreen;