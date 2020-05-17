import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Header from '../component/Header'
const StoreScreen = () => {
    return (
        <View>
            <Header/>
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleTextCart}>Của hàng</Text>
                </View>
            </View>
        </View>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    headerText:{
        padding:10,
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
