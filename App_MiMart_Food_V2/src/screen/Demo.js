import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
const Demo = () => {
    axios({
        method : 'GET',
        url : 'http://10.20.15.203:5000/api/Products',
        data:null
    }).then(res =>{
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
