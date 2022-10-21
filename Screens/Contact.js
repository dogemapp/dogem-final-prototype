import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput} from 'react-native';

const App = ({navigation })=> {
    const [forgotPassword, forgot] = useState('');

    return (

        <View style={styles.container}>
            {
              
            }

            <Text style = {styles.dogText}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder="Forgot"
            onChangeText={(forgot) => forgot(forgotPassword)}
            />

            </View>

            <TouchableOpacity style={styles.ResetBtn} onPress={() => navigation.navigate('Reset Password')}>
                <Text style={styles.ResetBtn_text}>Reset Password</Text>
            </TouchableOpacity>


        );

}:


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
    ResetBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 90,
        backgroundColor: "#1035AC",
    },
    })
export default Register;
