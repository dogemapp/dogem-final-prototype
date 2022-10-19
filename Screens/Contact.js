// JavaScript source code
import React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";

const App = ({navigation })=> {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (

        <View style={styles.container}>
            {/* <Text style={styles.titleText}>
                Contacts
            </Text> */}

            <Text style = {styles.dogText}>   First Name: *</Text>
            <TextInput
            style={styles.input}
            placeholder="Contact first name"
            onChangeText={(fname) => setFname(fname)}
            />

            <Text style = {styles.dogText}>   Last Name: *</Text>
            <TextInput
            style={styles.input}
            placeholder="Contact last name"
            onChangeText={(lname) => setLname(lname)}
            />

            <Text style = {styles.dogText}>   Phone Number: *</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter digits only"
            onChangeText={(phone) => setPhone(phone)}
            />

            <Text style = {styles.dogText}>   Email: *</Text>
            <TextInput
            style={styles.input}
            placeholder="Example@email.com"
            onChangeText={(email) => setEmail(email)}
            />

            <TouchableOpacity style={styles.contactBtn} onPress={() => Alert.alert('Contact Added')}>
                <Text style={styles.loginText}>ADD CONTACT</Text>
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
    dogText: {
        color: "FFFFFF",
        fontSize:20,
    },
    input: {
        height: 40,
        width: 275, 
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10, //Padding of placeholder
    },  
    inputView: {
        height: 40,
        width: 275, 
        margin: 12, 
        borderWidth: 1,
        padding: 10, 
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    contactBtn: {
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