import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import Header from '../component/Header'
const ProFileScreen = () => {
    return (
        <View>
            <Header/>
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleTextCart}>Tài khoản</Text>
                </View>
            </View>
        </View>
    )
}

export default ProFileScreen

const styles = StyleSheet.create({
    headerText:{
        padding:20,
        paddingHorizontal:30,
        marginTop:50
    },
    titleTextCart:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff' 
    },
    headercontainer:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    }
})
