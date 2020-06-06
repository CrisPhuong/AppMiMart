import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IndexContainer from './src/navigation/IndexContainer'
import Demo from './src/screen/Demo'

import { Provider as StoreProvider } from 'react-redux'
import store from './store/store'

export default function App(){
  return (
    <StoreProvider store={store}>
      <IndexContainer/>
    </StoreProvider>
    // <Demo/>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
