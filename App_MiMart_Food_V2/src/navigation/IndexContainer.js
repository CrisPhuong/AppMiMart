import React,{useState, useEffect, useMemo, useReducer} from 'react';
import {ActivityIndicator, View, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';
//improt mà hình
import LoginScreen from '../screen/LoginScreen'
import AppContainer from '../navigation/index'
import WelcomeScreen from '../screen/WelcomeScreen'
import SignUpScreen from '../screen/SignUpScreen'

import {AuthContext} from './Context'
const Stack = createStackNavigator();



const IndexContainer = () => {
    
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
      };
    
      const loginReducer = (prevState, action) => {
        switch( action.type ) {
          case 'RETRIEVE_TOKEN': 
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGIN': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGOUT': 
            return {
              ...prevState,
              userName: null,
              userToken: null,
              isLoading: false,
            };
          case 'REGISTER': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
        }
      };
    
      const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
    
      const authContext = useMemo(() => ({
        signIn: async(userName, password) => {
          // setUserToken('fgkj');
          // setIsLoading(false);
          let userToken;
          userToken = null;
          if( userName == 'user' && password == 'pass' ) {
            try {
              userToken = 'dfgdfg';
              await AsyncStorage.setItem('userToken', userToken);
             Alert.alert("Đăng nhập thành công");
            } catch(e) {
              console.log(e);
            }
          }else{
            Alert.alert("Tài khoản hoặc mật khẩu không chính xác")
          }
          // console.log('user token: ', userToken);
          dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
          // setUserToken(null);
          // setIsLoading(false);
          try {
            await AsyncStorage.removeItem('userToken');
            Alert.alert("Bạn đã đăng xuất")
          } catch(e) {
            console.log(e);
          }
          dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
          // setUserToken('fgkj');
          // setIsLoading(false);
        },
      }), []);
    
      useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          let userToken;
          userToken = null;
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch(e) {
            console.log(e);
          }
          // console.log('user token: ', userToken);
          dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
      }, []);
    
      if( loginState.isLoading ) {
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        );
      }
    return(
        <AuthContext.Provider value = {authContext}>
            <NavigationContainer>
                {loginState.userToken != null ? (
                    <Stack.Navigator>
                        <Stack.Screen name = "app" component = {AppContainer} options ={{headerShown:false}}/>    
                               
                    </Stack.Navigator>
                )
            :
                    <Stack.Navigator>
                        <Stack.Screen name = "welcome" component = {WelcomeScreen} options ={{headerShown:false}}/>
                        <Stack.Screen name = "login" component = {LoginScreen} options ={{headerShown:false}}/>
                        <Stack.Screen name = "signuot" component = {SignUpScreen} options ={{headerShown:false}}/>       
                    </Stack.Navigator>
            }
                
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default IndexContainer;