import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions,Image, ScrollView } from 'react-native'
import Header from '../component/Header'
import ButtonGroupStore from '../component/ButtonGroupStore'
import CoOpMartScreen from './CoOpMartScreen'
import BackHoaXanhScreen from './BackHoaXanhScreen'
import CoopFoodScreen from './CoopFoodScreen'
import VinMartScreen from './VinMartScreen'
import Banner from '../component/Banner'
import ShopingCartIcon from '../component/ShopingCartIcon'

const StoreScreen = () => {

    const [tab,setTab] = useState(0);

    return (
        <View style = {styles.comtainer}>
            <View>
                <Header/>
            </View>
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleTextCart}>Của hàng</Text>
                    <ShopingCartIcon/>
                </View>
                <View >
                    <Banner/>
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
        marginLeft:45
    },
    bannerStyle:{
        borderRadius:20,
        height:160,
        width:290,
    }
})
