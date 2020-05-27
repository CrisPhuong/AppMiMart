import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions,Image, ScrollView } from 'react-native'
import Header from '../component/Header'
import ButtonGroupStore from '../component/ButtonGroupStore'
import CoOpMartScreen from './CoOpMartScreen'
import BackHoaXanhScreen from './BackHoaXanhScreen'
import CoopFoodScreen from './CoopFoodScreen'
import VinMartScreen from './VinMartScreen'
import Swiper from 'react-native-swiper'
import {ImageBanner} from '../../Data'
import ShopingCartIcon from '../component/ShopingCartIcon'

const StoreScreen = () => {

    const [tab,setTab] = useState(0);

    return (
        <View style = {styles.comtainer}>
            <Header/>
            
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleTextCart}>Của hàng</Text>
                    <ShopingCartIcon/>
                </View>
                <View style = {styles.bannerStore}>
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
            </View>
            <ButtonGroupStore selected = {tab} onSelected = {index => setTab(index)}/>
           <ScrollView>
           <View>
                { tab == 0 && <BackHoaXanhScreen/> }
                { tab == 1 && <CoOpMartScreen/> }
                { tab == 2 && <CoopFoodScreen/> }
                { tab == 3 && <VinMartScreen/>}
            </View>
            </ScrollView>
        </View>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    comtainer:{
        flex:1
    },
    headerText:{
        padding:10,
        paddingHorizontal:30,
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleTextCart:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff' 
    },
    headercontainer:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    },
    bannerSwiper:{
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        marginTop:8,
    },
    bannerStore:{
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
    }
})
