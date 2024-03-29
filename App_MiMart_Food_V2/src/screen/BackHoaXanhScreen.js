import React,{useState} from 'react'
import { StyleSheet, Text, View, Image,FlatList ,TouchableOpacity,Dimensions} from 'react-native'
import {dataFoodStore} from '../../Data'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

console.disableYellowBox = true;
let {height , width} = Dimensions.get("window");
import {ADD_TO_CART} from '../../reducer/Reducer'
import {useDispatch} from 'react-redux'
const BackHoaXanhScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })

    return (
        <View style = {styles.container}>
           <FlatList
                    data = {dataFoodStore}
                    numColumns = {2}
                    renderItem = {({item}) => (
                        <View style = {styles.divfood}>
                            <TouchableOpacity style={{alignItems:'center'}} onPress = {() => navigation.navigate('chitietproduct',{
                                name:item.name,
                                src:item.src,
                                price:item.price,
                                content:item.content,
                                hsd:item.hsd,
                                nameStore:item.nameStore
                            })}>
                                <Image style = {{width:100, height:100}}
                                    resizeMode = "contain"
                                    source = {item.src}
                                />
                                <Text style = {{fontSize:13, fontWeight:'bold',textAlign:'center'}}>{item.name}</Text>
                                <Text style = {{fontSize:13, fontWeight:'bold',color:'red',textAlign:'center'}}>{item.price} VND</Text>
                                <Text style = {{fontSize:13, fontWeight:'bold',textAlign:'center'}}>{item.nameStore}</Text>
                                <TouchableOpacity style = {{flexDirection:'row'}} onPress = {() => addItemToCart(item)}>
                                    <MaterialIcons name ="add-shopping-cart" size ={25} color = 'blue'/>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        
                        </View>
                    )}
                    keyExtractor = {(item,index) => index.toString()}
            />
        </View>
    )
    
}

export default BackHoaXanhScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    divfood:{
        width:(width/2)-20,
        padding:10,
        borderRadius:10,
        marginBottom:5,
        marginLeft:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
    },
})
