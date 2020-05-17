import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Appcontainer from './src/navigation/index'


export default function App(){
  return (
    <View style = {styles.container}>
      <Appcontainer/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
