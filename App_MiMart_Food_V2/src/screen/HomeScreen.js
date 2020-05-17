import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Header from '../component/Header'

const ImageBanner = [
    {
        src:{uri:'https://cdn.tgdd.vn/bachhoaxanh/banners/2784/banner-landingpage-2784-05052020104354.jpg'}
    },
    {
        src:{uri:'https://cdn.tgdd.vn/bachhoaxanh/banners/2785/banner-landingpage-2785-080520209918.jpg'}
    },
    {
        src:{uri:'https://cdn.tgdd.vn/bachhoaxanh/banners/2783/banner-landingpage-2783-29042020231827.jpg'}
    }
]

const HomeScreen = () => {
    return (
        
        <View style = {styles.container}>
            <Header style = {styles.header}/>
            <ScrollView>
            <View style = {styles.headerTextHi}>
                <Text style = {styles.titleTextHi}>Welcome MiMart Food</Text>
            </View>
            <View style = {styles.banercontainer}>
                <Swiper style = {styles.bannerSwiper} autoplay = {true} autoplayTimeout = {2}>
                    {
                        ImageBanner.map((item) =>{
                            return(
                                <Image
                                    key ={item}
                                    source = {item.src}
                                    style = {styles.bannerStyle}
                                />
                            )
                        })
                    
                    }
                </Swiper>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    headerTextHi:{
        padding:20,
        paddingHorizontal:30,
        marginTop:50
    },
    titleTextHi:{
       fontSize:30,
       fontWeight:'bold',
       color:'#fff' 
    },
    banercontainer:{
        backgroundColor:'#fff',
        borderRadius:20,
        marginHorizontal:20,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        height:170,
        width:300,
        marginLeft:28
    },
    bannerStyle:{
        borderRadius:20,
        height:160,
        width:290,
    },
    bannerSwiper:{
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        marginTop:8,
        
    },
    header:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    }
})
