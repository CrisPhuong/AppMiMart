import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
let {height , width} = Dimensions.get("window");

const dataBanner =[
    {
        src:{uri:'https://i.pinimg.com/564x/c6/6b/a3/c66ba31847bf2d66ee9b450642fca251.jpg'}
    },
    {
        src:{uri:'https://i.pinimg.com/564x/e2/b7/ab/e2b7abb0de778d806006bcaa1914c295.jpg'}
    },
    {
        src:{uri:'https://i.pinimg.com/564x/29/41/53/294153d388cb4b80cee1f4fa1aa60758.jpg'}
    },
]
const WelcomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <LinearGradient colors = {['#EE82EE','#f3a5f3','#f9d2f9']} style = {{flex:1}}>
                <View style = {styles.titleGroup}>
                    <Text style = {styles.nameApp}>MiMart</Text>
                </View>
                <View style = {styles.bannerGroup}>
                    <Swiper>
                        {
                            dataBanner.map((item) =>{
                                return(
                                    <Image
                                        key = {item}
                                        source = {item.src}
                                        style = {styles.imageBanner}
                                    />
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View style = {styles.bottonGroup}>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontSize:18,fontWeight:'bold'}}>Hãy cảm nhận và trải nghiệm </Text>
                        <Image style = {{width:30, height:30}} source = {{uri:'https://image.flaticon.com/icons/png/512/148/148836.png'}}/>
                    </View>
                    <TouchableOpacity style={styles.btnLetGo} onPress = {() => navigation.navigate('login')}>
                        <Text style = {styles.txtTitle}>Let go!</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1 ,
          
    },
    titleGroup:{
        alignItems:'center',
        padding:20,
        marginTop:40
    },
    nameApp:{
        fontWeight:'bold',
        fontSize:37,
        color:"white"
        
    },
    titleBanners:{
        fontWeight:'bold',
        fontSize:25,
        color:"white"
        
    },
    bottonGroup:{
        flex:0.2,
        backgroundColor:'white',
        borderRadius:20,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        marginLeft:30,
        marginRight:30
    },
    bannerGroup:{
        flex:0.8,
        marginLeft:30,
        borderRadius:20
    },
    btnLetGo:{
       backgroundColor:'#EE82EE',
       borderRadius:20,
       width:150,
       height:50,
       alignItems:'center',
       justifyContent:'center',
    },
    txtTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    imageBanner:{
        width:300,
        height:450,
        borderRadius:20,
        
        
    }
    
   
})
