import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux'
const ShopingCartIcon = (props) => {
    const cartItems = useSelector(state => state)
    const navigation = useNavigation();
    return (
        <View>
            <View style={{
                            position:'absolute', height: 30, width:30,
                            borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)',
                            alignItems: 'center',
                            justifyContent: 'center', zIndex: 2000
                    }}>
                        <Text style={{color:'white', fontWeight: 'bold'}}>{cartItems.length}</Text>
                    </View> 
                    <TouchableOpacity style = {{marginTop:18,marginLeft:10}} onPress = {() => navigation.navigate('cart')}> 
                        <AntDesign name = "shoppingcart" size ={30} color = "black"/>
                    </TouchableOpacity>
        </View>
    )
}

export default ShopingCartIcon

const styles = StyleSheet.create({})
