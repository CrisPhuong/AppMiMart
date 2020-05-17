import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const navigation  = useNavigation();
    return (
        <View style ={{justifyContent:'center',alignItems:'center', marginTop:100}}>
            <TouchableOpacity onPress ={() => navigation.navigate('app')}>
                <Text>chuyển qua home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
