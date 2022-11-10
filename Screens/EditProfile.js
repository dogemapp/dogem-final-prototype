import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Linking, Alert, } from 'react-native';
import * as firebase from 'firebase';

export default class EditProfile extends React.Component {
  static navigationOptions = {
    header: null,
  };


  constructor(props){
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }


  onSignoutPress = () => {
    firebase.auth().signOut();
  }

 
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var authorize = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(authorize);
  }


  changePassword = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("You successfully changed your password");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }


  onUpdateEmailPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updateEmail(this.state.newEmail).then(() => {
        Alert.alert("You successfully changed your email");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 50, paddingHorizontal: 10,}}>
        <Button title="Sign out" onPress={this.onSignoutPress} />

        <TextInput style={styles.textInput} value={this.state.currentPassword}
          placeholder="Current Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({currentPassword: text}) }}
        />

        <TextInput style={styles.textInput} value={this.state.newPassword}
          placeholder="New Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({newPassword: text}) }}
        />

        <Button title="Change Password" onPress={this.changePassword} />

        <TextInput style={styles.textInput} value={this.state.newEmail}
          placeholder="New Email" autoCapitalize="none" keyboardType="email-address"
          onChangeText={(text) => { this.setState({newEmail: text}) }}
        />

        <Button title="Update Email" onPress={this.onUpdateEmailPress} />

      </ScrollView>
    );
  }
}

//export default EditProfile;

const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
});
