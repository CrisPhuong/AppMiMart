import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



const ButtonGroupStore = ({selected,onSelected}) => {
    const [buttonNameStore, setButtonNameStore] = useState([]);
  
    useEffect(() => {
      fetch('http://192.168.1.124:3000/stores')
        .then((response) => response.json())
        .then((json) => setButtonNameStore(json.stores))
        .catch((error) => console.error(error))
    }, []);
    return (
        <View style = {styles.buttonGroup}>
            {
                buttonNameStore.map((item,i) => {
                    return (
                        <TouchableOpacity key = {item} onPress = {() => onSelected(i)}>
                            <Text style = {styles.titleStore}>{item.storeName}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default ButtonGroupStore

const styles = StyleSheet.create({
    buttonGroup:{
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
