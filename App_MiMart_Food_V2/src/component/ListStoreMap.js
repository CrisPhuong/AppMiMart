import React from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const ListStoreMap = ({title}) => {

    const navigation = useNavigation();

    return (
        <View>
            <View style = {styles.container}>
                <Image 
                    style = {styles.avatarStore}
                    source = {title.src}
                />
                <View style = {styles.titles}>
                    <Text style = {styles.nameStore}>{title.name}</Text>
                    <Text style = {styles.titleTime}>{title.timeOpen}</Text>
                    <Text style = {styles.titleTime}>{title.timeclossing}</Text>
                    <Text style = {styles.address}>{title.address}</Text>
                    <View style = {styles.iconClick}>
                        <TouchableOpacity onPress = {() => navigation.navigate('Store')}>
                            <Icon name = "angle-right" size ={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        </View>
    )
}

export default ListStoreMap

const styles = StyleSheet.create({
    iconClick:{
        position:'absolute',
        bottom:0,
        right:0
    },
    avatarStore:{
        backgroundColor:'gray',
        height:60,
        width:100,
        borderRadius:8
    },
    nameStore:{
        color:'#222',
        fontSize:18,
        fontWeight:'bold'
    },
    titleTime:{
        color:'#222',
        fontSize:15,
        fontWeight:'bold'
    },
    address:{
        color:'gray',
        fontSize:15,
        fontWeight:'500'
    },
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:'#fff',
        margin:15,
        borderRadius:10,
        marginTop:15
    },
    titles:{
        paddingHorizontal:10,
        flex: 1,
    }
})
