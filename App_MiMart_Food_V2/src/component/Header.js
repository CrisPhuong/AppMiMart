import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const W = Dimensions.get('window').width;


const Header = ({style}) => {
    return (
      <LinearGradient
            start = {{x:0 , y:0}}
            end = {{x:1, y:0}} 
            style = {[styles.lineargGradient,style]}
            colors = {['#EE82EE','#f3a5f3','#f9d2f9']}
        >
            <View style = {styles.line}/>
            <View style = {[styles.line,{top:130,left:-150}]}/>
            <View style = {[styles.line,{top:160,left:0}]}/> 
        </LinearGradient>
            
    )
}

export default Header

const styles = StyleSheet.create({
     lineargGradient:{
        height:(W * 3) / 4,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    },
    line:{
        position:'absolute',
        width:W + 100,
        top:100,
        left:-300,
        height:80,
        backgroundColor:'rgba(255,255,255,0.1)',
        transform:[{
            rotate:'-35deg'
        }],
        borderRadius:60,
        
    }
})
