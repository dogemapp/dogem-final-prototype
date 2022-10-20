import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import {auth} from "./Database_config/Firebase"

renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#000",
            }}
        />
    );
};
//handling item Press event
getListViewItem = (item) => {
    
}
const Login = ({ navigation }) => {
    const handleLogOut = () =>{
        signOut(auth)
            .then(() =>{
                // Signed Out
                navigation.replace('Home')
            })
            .catch((error) => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Contacts List
            </Text>
            <View style={styles.myList}>
                <FlatList
                    data={[
                        { key: 'Bruno Fernandes'}, { key: 'James Hard' }, { key: 'Jamie Vardy' }, { key: 'Harry Maguire' },
                        { key: 'Luke Shaw' }, { key: 'Tyrell Malacia' }, { key: 'Lisandro Martinez' },
                        { key: 'Raphael Varane' }
                    ]}
                    renderItem={({ item }) =>
                        <Text style={styles.item}
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>

            {/* <TouchableOpacity style={styles.contactBtn} onPress={() => navigation.navigate('Contact')}>
                <Text  style={styles.dogText}>Add Contact</Text>
            </TouchableOpacity> */}
        
            <TouchableOpacity style={styles.DogemBtn} onPress={() => navigation.navigate('Dogem')}>
                <Text style={styles.dogText}>DOGEM</Text>
            </TouchableOpacity>

            <View style={styles.logOutView}>
                <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}>
                    <Text style={styles.logOutText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    myList: {
        height: "50%"
    },
    titleText: {
        marginBottom: 50,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
    },
    DogemBtn: {
        width: "40%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 10,
        marginLeft: 90,
        backgroundColor: "#1035AC",
        borderRadius: 5

    },
    dogText: {
        color: "#ffffff",
        fontSize:20,
    },
    contactBtn:{
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 90,
        backgroundColor: "#1035AC",
        borderRadius: 5
    },
    logOutBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    logOutText: {
        color: "#ffffff",
    },
    logOutView:{
        alignItems: "center",
    }
})
export default Login;