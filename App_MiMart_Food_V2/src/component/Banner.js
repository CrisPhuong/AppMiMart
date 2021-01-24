import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'


export default function Banner() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.124:3000/banners')
          .then((response) => response.json())
          .then((json) => setBanner(json.banners))
          .catch((error) => console.error(error))
      }, []);
      console.log(banner);
    return (
        <View style = {styles.bannerContainer}>
                <Swiper style = {styles.bannerSwiper} autoplay = {true} autoplayTimeout = {2}>
                    {
                        banner.map((item) =>{
                            return(
                                <Image
                                    key ={item}
                                    source = {{uri:item.imageBanner}}
                                    style = {styles.bannerStyle}
                                />
                            )
                        })
                    }
                </Swiper>
            </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer:{
        backgroundColor:'#fff',
        borderRadius:20,
        marginHorizontal:20,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        height:170,
        width:300,
        marginLeft:55
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
})
