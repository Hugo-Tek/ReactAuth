import React from "react";
import { StyleSheet, View, Text } from "react-native";

function AddGroupScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> AddGroup Screen</Text>
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

export default AddGroupScreen