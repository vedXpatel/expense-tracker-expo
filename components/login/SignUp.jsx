import React from 'react';
import {View,Dimensions,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const isChecked = () => {
    
}

const SignUp = ({navigation}) => {
    return(
        <View>
            <Text style={styles.loginText}>
                SignUp
            </Text>
            <TextInput style={styles.nameInput} placeholder="Name" />
            <TextInput style={styles.loginInput} placeholder="Email" />
            <TextInput secureTextEntry={true} style={styles.passwordInput} placeholder="Password" />
            <View style={styles.checkbox}>
            <BouncyCheckbox fillColor="#7F3DFF" textStyle={{
                textDecorationLine: "none",
                textDecoration:"none",
                fontFamily: "Poppins-Regular"
            }} onPress={(isChecked) => {}} text="By signing up, you agree to the Terms of Service and Privacy Policy" iconStyle={{ borderColor: "#E0E0E0", borderRadius:5, }} innerIconStyle={{borderRadius:5,}} />
            </View>
                <TouchableOpacity style={styles.loginButton}>
                <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <View style={styles.signUpLink}>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                    Already have an account? <Text onPress={() => navigation.navigate("Login")} style={styles.signUpText}>Login</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameInput:{
        borderColor: "#E0E0E0",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        top: height / 5,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    loginText: {
        textAlign: "center",
        fontSize: 18,
        color: "black",
        top: height / 18,
    },
    loginInput: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        top: height / 5 +24,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    passwordInput: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        top: height / 5 + 24 + 24,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    loginButton: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#7F3DFF",
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
        top: height / 5 + 24 + 80,
    },
    forgotPassword: {
        top: height / 5 + 64 + 33,
        textAlign: "center",
        fontSize: 18,
        color: "#7F3DFF",
        fontWeight: "600",
    },
    signUpLink: {
        top: height / 5 + 64 + 33 + 38,
        textAlign: "center",
    },
    signUpText: {
        color: "#7F3DFF",
        textDecorationLine: "underline ",
    },
    checkbox:{
        top:height/5+64+17,
        marginLeft:20,
        marginRight:20,
        paddingRight:20,
        textDecorationLine:"none",
        textDecoration:"none",
    }
})


export default SignUp;
