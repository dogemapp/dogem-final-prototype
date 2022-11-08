import {React, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Database_config/Firebase';
import { collection, setDoc, doc, addDoc} from "firebase/firestore"; 
import { db } from './Database_config/Firebase'
import { async } from '@firebase/util';


const Register = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone_num, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userCollectionRef = collection(db, "users")

    // function to handle the registration of a user to the Database
    const handleSignUp = async () =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) =>{
                // Signed in
                const user = userCredentials.user;

                /* 
                Adds user to the database upon confirming that email is not already in use (in Auth).
                Placing addDocs() here prevents duplicate "users" documents from being created upon hitting the
                registration button containing the same email that is attempting to be submitted within the TextInput.
                */
                addDoc(userCollectionRef,{fname: fname, lname: lname, phone_num: phone_num, email: email});

                Alert.alert("Registration Success")
            })
            // .catch((error) => alert(error.message))
            .catch((error) => {
                 /* 
                The following error codes have custom alerts for better readability 
                */
                if (error.code == "auth/email-already-in-use") {
                    Alert.alert("Registration Failed", "The email address is already in use");    
                } else if (error.code == "auth/invalid-email") {
                    Alert.alert("Registration Failed", "The email address is not valid.");
                } else if (error.code == "auth/operation-not-allowed") {
                    Alert.alert("Registration Failed", "Operation not allowed.");
                } else if (error.code == "auth/weak-password") {
                    Alert.alert("Registration Failed", "The password is too weak. The password must be at least 6 characters.");
                }
                else
                    Alert.alert("Registration Failed", error.message)
              });
    };

    const checkTextInput = () => {
        //Displays an error to user if the First Name TextInput is empty
        if(!fname.trim()){
            Alert.alert("Registration Failed", "First Name Field is Required");
            return;
        }
        //Displays an error to user if the Last Name TextInput is empty
        if(!lname.trim()){
            Alert.alert("Registration Failed", "Last Name Field is Required");
            return;
        }
        /*
        Displays an error to user if the phone number is less than 10 digits.
        Note: There is a maxLength:10 limit placed on the TextInput as well
        */
        if(phone_num.length < 10){
            Alert.alert("Registration Failed", "Phone Number must be at least 10 digits long");
            return;
        }
        //Displays error to user if Password TextInput is empty
        if(password.length == 0){
            Alert.alert("Registration Failed", "Password Field is Required");
            return;
        }

        /* 
        Only three fields need to be checked here at the other fields have other
        errors to prevent registration from occuring. Upon checking that these fields
        are sufficient, the handleSignUp() function is called.S
        */
        if(fname.trim() && lname.trim() && phone_num.length == 10){
            handleSignUp()
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.dogText_guide}>
                Enter Your Details to Register
            </Text>

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
            <Text style = {styles.dogText}>   Mobile Number: *</Text>
            <TextInput
                style={styles.input}
                placeholder = '#########'
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(phone_num) => setPhoneNum(phone_num)}
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
            <TouchableOpacity style={styles.registerBtn} onPress={checkTextInput}>
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
        // justifyContent: 'center', 
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
    dogText_guide: {
        color: "#a9a9a9",
        fontSize:20,
        marginTop: 50,
        marginBottom: 50,
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