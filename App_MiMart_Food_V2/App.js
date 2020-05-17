import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IndexContainer from './src/navigation/IndexContainer'

export default function App(){
  return (
    <View style = {styles.container}>
        <IndexContainer/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
