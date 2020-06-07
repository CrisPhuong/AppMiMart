import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ChiTietProduct = ({navigation, route}) => {
    return (
        <View style = {styles.container}>
            <View style = {{alignItems:'center', marginTop:10}}>
                <Image style={{width:300, height:300}} source = {route.params.src}/>
            </View>
            <View style = {styles.contentGroup}>
                <Text style = {styles.contentname}>- Tên sản phẩm: {route.params.name}</Text>
                <Text style = {styles.contentPrice}>- Giá: {route.params.price} VND</Text>
                <Text style = {{fontWeight:'900',fontSize:18}}>- Chi tiết: {route.params.content}</Text>
                <Text style = {styles.contentPrice}>- Hạn sử dụng: {route.params.hsd}</Text>
            </View>
            
        </View>
    )
}

export default ChiTietProduct

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    contentname:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:18
    },
    contentGroup:{
        padding:10
    },
    contentPrice:{
        color:'red',
        fontSize:18,
        fontWeight:'900'
    }
})
