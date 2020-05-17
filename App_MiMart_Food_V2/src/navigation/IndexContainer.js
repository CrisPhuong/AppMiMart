import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
//improt mà hình
import LoginScreen from '../screen/LoginScreen'
import AppContainer from '../navigation/index'
import WelcomeScreen from '../screen/WelcomeScreen'

const Stack = createStackNavigator();



export default function IndexContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "welcome" component = {WelcomeScreen} options ={{headerShown:false}}/>
                <Stack.Screen name = "login" component = {LoginScreen} options ={{headerShown:false}}/>
                <Stack.Screen name = "app" component = {AppContainer} options ={{headerShown:false}}/>         
            </Stack.Navigator>
        </NavigationContainer>
    )
}