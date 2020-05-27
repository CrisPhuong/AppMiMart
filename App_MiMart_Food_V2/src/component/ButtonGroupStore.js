import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonName = [
    {name:"Bách Hóa Xanh"},
    {name:"CoOp Mart"},
    {name:"CoOp Food"},
    {name : "Vin Mart"}
];

const ButtonGroupStore = ({selected,onSelected}) => {
    return (
        <View style = {styles.buttomGroup}>
            {
                ButtonName.map((item,i) => {
                    return (
                        <TouchableOpacity key = {item} onPress = {() => onSelected(i)}>
                            <Text style = {styles.titleStore}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default ButtonGroupStore

const styles = StyleSheet.create({
    buttomGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingHorizontal:30,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        paddingBottom:15,
        marginTop:20,
        borderRadius:20
    },
    titleStore:{
        fontSize:12,
        fontWeight:'bold',
        
    }
})
