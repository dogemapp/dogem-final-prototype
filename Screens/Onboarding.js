import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";

//TODO: implement a check if video is in background in order to upload to google play store  (This might already happen automatically)
//more details: https://lonelycpp.github.io/react-native-youtube-iframe/play-store-compatibility

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
  
  
  return (

    // Player height and width have constraints on what their values can be
    // in this case it is oversized purposefully becuase it is a portrait video

    <View style={styles.container}>

      <Text style={styles.titleText}>DogEm Guide</Text>
      
      <YoutubePlayer
        height={400}
        width={700}
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

    titleText: {
      marginTop: 75,
      marginBottom: 50,
      fontSize: 35,
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