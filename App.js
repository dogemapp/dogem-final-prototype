import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View} from 'react-native'

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import DogemScreen from './Screens/Dogem'
import ContactScreen from './Screens/Contact'
import RegisterScreen from './Screens/Register'

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerShown:false}}
                    />
                <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register'} }/>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    // options={{ title: 'Home' }}
                    options={({navigation}) => ({
                        title:'Home',
                        headerStyle: {
                          backgroundColor: '',
                        },
                        headerRight: () => (
                          <View style={{marginHorizontal: -10, flexDirection: "row"}}>
                           <Button
                             title="Logout" //Header Button to Logout
                             onPress={() => navigation.navigate('Home')}   
                            />
                          </View>
                        )  
                       })}
                />
                <Stack.Screen name="Dogem" component={DogemScreen} options={{title:'Dogem'} }/>
                <Stack.Screen name="Contact" component={ContactScreen} options={{title:'Contact'} }/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;