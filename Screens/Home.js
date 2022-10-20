// JavaScript source code
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from './Database_config/Firebase';
import { useNavigation } from '@react-navigation/native';


const App = ({navigation })=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            // Signed in
            const user = userCredentials.user;
            navigation.replace('Login')
        })
        .catch((error) => alert("Login Failed : Incorrect Email and Password"))
        //.catch((error) => alert(error.message))
    }

    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>
                DogEm
            </Text>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Example@email.com"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.forgot_button}>Don't have an account ? Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    }, 
    TextInput: {
        height: 40,
        width: 275,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        borderWidth: 1,
        margin: 1,
        borderRadius: 5
    },

    forgot_button: {
        height: 30,
        marginBottom: 5,
        marginTop: 20
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    loginText: {
        color: "#ffffff",
},
    titleText: {
        marginBottom: 50,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
     //   fontFamily: "Impact,Charcoal,sans-serif",
    }
});








