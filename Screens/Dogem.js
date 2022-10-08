import React, { useState, useEffect } from 'react';
//REPORT:
//I found online a way to make phone calls, send messages using react-native-communications. Wouldn't work so I had to import
//different components for each type of operation.
//I had to stop coding since we switched to Expo GL, and see if I can implement my code there and what would chande. 
//You'll need to install react-native-sms and react-native-phone-call to make it work using npm install in the CLI. 

// import all the components we are going to use

//10/7 update: I added expo-sms for texting
//it CAN send texts, but it requires user intervention which is a major flaw
//To-do: find out if we can hit the send button programatically. 
import * as SMS from 'expo-sms';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';


const App = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(undefined);
    const [bodySMS, setBodySMS] = useState(undefined);
  
  
    useEffect(() => {
      async function checkAvailability() {
        const isSmsAvailable = await SMS.isAvailableAsync();
        setIsAvailable(isSmsAvailable);
      }
      checkAvailability();
    }, []);
  
  /* MESSENGER
  IT CAN LOOP, BUT TO-DO: GET IT TO AUTO-SEND
  */  
    const sendSMS = async () => {
      for(let i = 0; i <= 5; i++) {
      const {result} = await SMS.sendSMSAsync(
        ['[enteranemail]@gmail.com', '[phonenumberhere]'],
        'YOURE BEING DOGGED'
      );
      console.log(result);
      }
    };
  
  
    return (

            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        DogEm
                    </Text>
                   {/*Taking the phone number from the user*/}

                    <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
                   <TextInput
                        value={mobileNumber}
                        onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
                        placeholder={'Enter Contact Number'}
                        keyboardType="numeric"
                        style={styles.textInput} 
                    />
 
    
                   {/*Entering the SMS Body to send*/} 
    

                    <Text style={styles.titleTextsmall}>Enter SMS body</Text>
                    <TextInput
                        value={bodySMS}
                        onChangeText={(bodySMS) => setBodySMS(bodySMS)}
                        placeholder={'Enter SMS Body'}
                        keyboardType="numeric"
                        style={styles.textInput}
                    />

                    {/*Send Message Button. calling the function initiateSMS on touch*/}

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={sendSMS}>
                        <Text style={styles.buttonTextStyle}>Send Message</Text>
                    </TouchableOpacity>
                    </View>
        </SafeAreaView>
    );
  }

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1035AC',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#1035AC',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
});

