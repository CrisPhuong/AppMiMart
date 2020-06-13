import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
const Demo = () => {
    axios.get(
    
        'http://127.0.0.1:5000/api/Activities'
       
   ).then(res =>{
       console.log({res});
   }).catch(err =>{
       console.log(err);
   });
    return (
        <View>
            <Text>aaaaaaaaaaa</Text>
        </View>
    )
}

export default Demo

const styles = StyleSheet.create({})
