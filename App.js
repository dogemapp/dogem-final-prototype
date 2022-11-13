import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View} from 'react-native'

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import DogemScreen from './Screens/Dogem'
import ContactScreen from './Screens/Contact'
import RegisterScreen from './Screens/Register'
import OnboardingScreen from './Screens/Onboarding'
import { signOut } from 'firebase/auth';

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
                <Stack.Screen name="Onboard" component={OnboardingScreen} options={{headerShown:false}} />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    // options={{ title: 'Home' }}
                    options={({navigation}) => ({
                        title:'Home',
                        headerStyle: {
                          backgroundColor: '',
                        },
                        headerLeft: null ,
                        headerRight: () => (
                          <View style={{marginHorizontal: -10, flexDirection: "row"}}>
                           <Button
                             title="Add Contact" //Header Button
                             onPress={() => navigation.navigate('Contact')}   
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