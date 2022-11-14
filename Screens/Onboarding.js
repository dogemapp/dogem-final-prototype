import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Database_config/Firebase';
import { collection, getDoc, doc, addDoc} from "firebase/firestore"; 
import { db } from './Database_config/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

//TODO: implement a check if video is in background in order to upload to google play store  (This might already happen automatically)

const Onboard = ({navigation}) => {

  //Play/Pause button functionality
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  
  /* The following code retrieves the current user's email */
  const email = auth.currentUser.email
  const userDocRef = doc(db,"user", email)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(userDocRef)
      setUser({email, ...snap.data()})
    }
    getUser()
  },[])
  
  return (

    // Player height and width have constraints on what their values can be
    // in this case it is oversized purposefully becuase it is a portrait video

    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.onboardTitleText}>Welcome</Text>
      <Text style={styles.onboardTitleText}>to</Text>
      <Text style={styles.onboardTitleText}>DogEm,</Text>
      <Text style={styles.onboardTitleText}>{user.email}</Text>
      <Text></Text>
      
      <YoutubePlayer
        height={200}
        width={355}
        play={playing}
        videoId={"f-gRv5Day8M"}
        onChangeState={onStateChange}
      />

      
      <Button style={styles.playerCtrlsBtn} title={playing ? "pause" : "play"} onPress={togglePlaying} />

      <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.replace('Login')}>   
          <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
    </View>

    );
};

export default Onboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
    },

    onboardTitleText: {
      marginTop: 5,
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000080',
  },

  playerCtrlsBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    marginTop: 40,
    backgroundColor: "#1035AC",
  },

  skipBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1035AC",
  },

  skipText: {
    color: "#ffffff",
},


});