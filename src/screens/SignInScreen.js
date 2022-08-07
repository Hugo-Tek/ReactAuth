import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { withRepeat } from "react-native-reanimated";
import { withStyleAnimation } from "react-native-reanimated/lib/types/lib/reanimated2/animation";

function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> SignIn Screen</Text>
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

export default SignInScreen