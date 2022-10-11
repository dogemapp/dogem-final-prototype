import * as React from 'react';
import {useEffect, useState} from 'react';
//import * as Linking from 'expo-linking';
import * as SMS from 'expo-sms';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
/*CODE FOR THE DOGEM SCREEN
Components:
- DogEm title text
- "Enter mobile number" prompt
- Field for numbers or emails
- "Enter SMS body" prompt
- Field for the message
- Send Message button
- Phone Call button
*/
const App = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [phoneNum, setPhoneNum] = useState(undefined);
    const [message, setMessage] = useState(undefined);
  
    useEffect(() => {
      async function checkAvailability() {
        const isSmsAvailable = await SMS.isAvailableAsync();
        setIsAvailable(isSmsAvailable);
      }
      checkAvailability();
    }, []);
  
  /* MESSENGER */  
  
    const sendSMS = async () => {
      const {result} = await SMS.sendSMSAsync(
        ['[enteremail]@email.com', '[enterotheremail]@email.com', '1112223333', '2223334444'],
        'YOURE BEING DOGGED'
      );
      console.log(result);
    };
  
    return (
  
      <View style={styles.container}>
        <Text style={styles.titleText}> DogEm </Text>
        
        <View style={styles.inputView}>
        <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
          <TextInput
            style={styles.TextInput}
            value={phoneNum}
            placeholder="Enter Contact Number"
            placeholderTextColor="#003f5c"
            onChangeText={(value) => setPhoneNum(value)}
          />
        </View>
  
        <View style={styles.inputView}>
        <Text style={styles.titleTextsmall}>Enter SMS body</Text>
          <TextInput
            style={styles.TextInput}
            value={message}
            placeholder="Enter SMS Body"
            placeholderTextColor="#003f5c"
            onChangeText={(value) => setMessage(value)}
          />
         </View>
        
         <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={sendSMS}>
                    <Text style={styles.buttonTextStyle}>Send Message</Text>
                </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Phone Call</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  /* This is where all the styling is: */  
  
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
    TextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
   
    forgot_button: {
      height: 30,
      marginTop: 10,
      marginBottom: 20,
    },
  
    edit_contact_button: {
      height: 30,
      marginTop: 10,
      marginBottom: 20,
    },

    titleText: {
        marginBottom: 15,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
     //   fontFamily: "Impact,Charcoal,sans-serif",
    },

    scrollView: {
      width: '100%',
      alignSelf: 'center',
      borderRightWidth: 1,
      padding: 0,
    },
  
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    regularText: {
      color: 'red',
      marginBottom: 10,
      alignItems: "center",
      fontWeight: "bold",
      maxWidth: "100%",
    },
  });
  
  export default App;
