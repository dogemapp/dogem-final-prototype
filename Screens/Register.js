import {React, useEffect, useState} from 'react';
import { Button, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Database_config/Firebase';

const Register = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function to handle the registration of a user to the Database
    const handleSignUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) =>{
                // Signed in
                const user = userCredentials.user;
                alert("Registration Success")
            })
            .catch((error) => alert("Error Occured : Regitration Failed"))
            // .catch((error) => alert(error.message))
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleText}>
                Register
            </Text> */}

            <Text style = {styles.dogText}>   First Name: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'First Name'
                onChangeText={(fname) => setFname(fname)}
                />
            <Text style = {styles.dogText}>   Last Name: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Last Name'
                onChangeText={(lname) => setLname(lname)}
                />
            <Text style = {styles.dogText}>   Email: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Example@email.com'
                onChangeText={(email) => setEmail(email)}
                />
            <Text style = {styles.dogText}>   Password: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Password'
                onChangeText={(password) => setPassword(password)}
                />
                
            <TouchableOpacity style={styles.registerBtn} onPress={handleSignUp}>
                <Text style={styles.registerBtn_text}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center', 
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    titleText: {
        marginBottom: 50,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
    },
    registerBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    registerBtn_text: {
        color: "#ffffff",
    },
    dogText: {
        color: "FFFFFF",
        fontSize:20,
    },
    input: {
        height: 40,
        width: 275, 
        margin: 12, //Length apart of other Fields around it
        borderWidth: 1,
        borderRadius: 5, // the higher the number the more curved the corners of the border are
        padding: 10, //Padding of placeholder
    },  
})
export default Register;