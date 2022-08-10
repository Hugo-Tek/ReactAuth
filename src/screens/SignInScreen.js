import React, { useState, useEffect} from "react";
import { StyleSheet, View, Alert, Image, SafeAreaView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button"
import EmailTextField from "../components/EmailTextField";
import Color from "../utils/Colors";
import Strings from "../const/Strings"
import Images from "../const/Images"
import Constants from "../const/Constants";
import DismissKeyboard from "../components/DismissKeyboard"
import Utility from "../utils/Utility"
import PasswordField from "../components/PasswordField";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";

function SignInScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isLoading, setIsLoading] = useState('')

    validateEmailAddress = () => {
        const isValidEmail =  Utility.isEmailValid(email)
        isValidEmail ? setEmailError('') : setEmailError(Strings.InvalidEmailAddress)
        return isValidEmail
    }

    validatePassword = () => {
        const isValidPassword =  Utility.isValidField(password)
        isValidPassword ? setPasswordError('') : setPasswordError(Strings.PasswordFieldEmpty)
        return isValidPassword
    }

    performAuth = () => {
        const isValidEmail = validateEmailAddress()
        const isValidPassword = validatePassword()

        if(isValidEmail && isValidPassword) {
            setEmailError('')
            setPasswordError('')
            registration(email, password)
        }
    }

    registration = (email, password) => {
        try {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setIsLoading(false)
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'GroupsScreen'}]
                    })

                })
                .catch((error) => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            setIsLoading(false)
                            navigation.reset({
                                index: 0,
                                routes: [{name: 'GroupsScreen'}]
                            })
                        })
                        .catch((error) => {
                            setIsLoading(false)
                            console.log(error)
                            Alert.alert(error.message)
                        });
                });
        }
        catch (error) {
            setIsLoading(false)
            Alert.alert(error.message)
        }
    }

    return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <SafeAreaView>
                        <Image style={styles.logo} source={Images.logo}></Image>
                        <EmailTextField
                            term={email}
                            error={emailError}
                            placeholder={Strings.EmailPlaceholder}
                            OnTermChange={newEmail => setEmail(newEmail)}
                            onValidateEmailAddress={validateEmailAddress}
                        />
                        <PasswordField 
                            term={password}
                            error={passwordError}
                            placeholder={Strings.PasswordPlaceholder}
                            OnTermChange={newPassword => setPassword(newPassword)}
                            onValidatePassword={validatePassword}
                        />
                        <Button
                            title={Strings.Join}
                            onPress={performAuth}
                        />
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        margin: 0.04 * Constants.screenHeight,
        height: 100,
        width: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    }
})

export default SignInScreen