import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList,TouchableOpacity, Image, Alert } from 'react-native'
import {dataFoodCoOpMart} from '../../Data'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

let {height , width} = Dimensions.get("window");

const VinMartScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
           <FlatList
                    data = {dataFoodCoOpMart}
                    numColumns = {2}
                    renderItem = {({item}) => (
                        <View style = {styles.divfood}>
                            <TouchableOpacity style={{alignItems:'center'}} onPress = {() => navigation.navigate('chitietproduct',{
                                name:item.name,
                                src:item.src,
                                price:item.price,
                                content:item.content,
                                hsd:item.hsd
                            })}>
                                <Image style = {{width:100, height:100}}
                                    resizeMode = "contain"
                                    source = {item.src}
                                />
                                <Text style = {{fontSize:13, fontWeight:'bold',textAlign:'center'}}>{item.name}</Text>
                                <Text style = {{fontSize:13, fontWeight:'bold',color:'red',textAlign:'center'}}>{item.price} VND</Text>
                                <Text style = {{fontSize:13, fontWeight:'bold',textAlign:'center'}}>{item.nameStore}</Text>
                                <TouchableOpacity style = {{flexDirection:'row'}} >
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

export default VinMartScreen

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
