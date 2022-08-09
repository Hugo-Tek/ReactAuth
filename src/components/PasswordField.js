import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import Color from "../utils/Colors";
import Constants from "../const/Constants";


const PasswordField =  ({term, placeholder, OnTermChange, onValidatePassword, error}) => {
    return (
        <View>
            <Text style={styles.ErrorText}>{error}</Text>
            <View style={styles.TextFieldView}>
                <TextInput
                autoCorrect={false}
                secureTextEntry
                style={styles.TextField}
                placeholder={placeholder}
                value={term}
                onChangeText={OnTermChange}
                onEndEditing={onValidatePassword}/>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create ({
    TextField: {
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20
    },
    TextFieldView: {
        height: Constants.screenHeight * 0.06,
        width: Constants.screenWidth * 0.85,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Color.black,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Color.white
    },
    ErrorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: -5,
        marginHorizontal: 20
    }
})

export default PasswordField