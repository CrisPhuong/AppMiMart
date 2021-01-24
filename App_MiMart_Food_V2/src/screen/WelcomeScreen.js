import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
let {height , width} = Dimensions.get("window");

const dataBanner =[
    {
        src:{uri:'https://vcdn-kinhdoanh.vnecdn.net/2019/05/23/2035292151-w500-3320-1558601736.png'}
    },
    {
        src:{uri:'https://thegioihoinhap.vn/data/uploads/2020/09/vinshop.jpg'}
    },
    {
        src:{uri:'https://cafefcdn.com/2020/1/18/photo-1-1579319246946973027491.jpg'}
    },
]
const WelcomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View  style = {styles.container}>
            <LinearGradient colors = {['#EE82EE','#f3a5f3','#f9d2f9']} style = {{flex:1}}>
                <View style = {styles.titleGroup}>
                    <Text style = {styles.nameApp}>MiMart</Text>
                </View>
                
                <Animatable.View animation="fadeInLeft" style = {styles.bannerGroup}>
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
                </Animatable.View>

                <Animatable.View animation = "fadeInRightBig" style = {styles.bottonGroup}>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontSize:18,fontWeight:'bold'}}>Hãy cảm nhận và trải nghiệm </Text>
                        <Image style = {{width:30, height:30}} source = {{uri:'https://image.flaticon.com/icons/png/512/148/148836.png'}}/>
                    </View>
                    <TouchableOpacity style={styles.btnLetGo} onPress = {() => navigation.navigate('login')}>
                        <Text style = {styles.txtTitle}>Let go!</Text>
                    </TouchableOpacity>
                </Animatable.View>
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
        marginLeft:45,
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
