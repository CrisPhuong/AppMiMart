import React from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput , ScrollView} from 'react-native'
import MapView,{Marker} from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient'

import Header from '../component/Header'
import ListStoreMap from '../component/ListStoreMap'

const HeaderSearch = () =>{
    return(
        <View style = {styles.header}>
            <View style = {styles.headerBody}>
                <Text style = {styles.headerText}>Bản đồ</Text>
                <View style = {styles.headerRightIcon}>
                    <Entypo name = "map" size={25} color='#fff'/>
                    <Octicons 
                        name = "settings"
                        size={25}
                        color='#fff'
                        style = {styles.icon}
                    />
                </View>
            </View>
            <View style={styles.groupInput}>
                <View style = {styles.wrapperInput}>
                    <AntDesign name = "search1" size={18}color = 'gray'/>
                    <TextInput 
                        style = {styles.inputText}
                        value = "Vị trí hiện tại"
                    />
                </View>
                <View style = {styles.wrapperInput}>
                    <Feather name = "map-pin" size={18} color = 'gray'/>
                    <TextInput 
                        style = {[styles.inputText,{color : '#9770A3'}]} 
                        value = "Bạn muốn tìm?"
                    />
                </View>
            </View>
        </View>
    )
}
const Map = () => {
    return(
        <MapView 
                style={styles.mapview}
                initialRegion={{
                    latitude:10.762622,
                    longitude:106.660172,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                }}
            >
                <Marker 
                    coordinate = {{
                        latitude:10.762622,
                        longitude:106.660172,
                        latitudeDelta:0.0922,
                        longitudeDelta:0.0421
                    }}
                >
                    <View style = {{
                        
                        backgroundColor:'#C49DBD',
                        padding:5,
                        borderRadius:20,
                        shadowColor:'#714887',
                        shadowOffset:{
                            width:2,
                            height:2,
                            
                        },
                        shadowOpacity:1,
                        shadowRadius:20,
                    }}>
                        <LinearGradient 
                            style = {styles.maker} 
                            colors={['#714887','#944787','#984587']}
                        >
                            <FontAwesome5 name = "user-alt" color = '#fff'/>
                        </LinearGradient>
                    </View>
                </Marker>
        </MapView>
    )
}



const MapScreen = () => {
    return (
        <View style = {styles.container}>
            <Header style = {styles.headerBackGroup}/>
            <ScrollView>
                <HeaderSearch/>
                <Map/>
                <Text style = {styles.titleHeader}>Cửa hàng gần đây</Text>
                <ListStoreMap title = {{
                    name:"Bách Hóa Xanh",
                    timeOpen:"Mở lúc 06:30",
                    timeclossing:"Đóng lúc 22:30",
                    address:"384 Dương Quảng Hàm, Phường 5, Gò Vấp, Hồ Chí Minh",
                    src:({uri:'https://cdn.tgdd.vn/bachhoaxanh/he-thong-sieu-thi/Content/images/mobile/store/1.jpg'})
                }}/>
                <ListStoreMap title = {{
                    name:"CoOp Food",
                    timeOpen:"Mở lúc 06:30",
                    timeclossing:"Đóng lúc 22:30",
                    address:"80/5H Đường Lê Văn Thọ, Phường 11, Gò Vấp, Hồ Chí Minh",
                    src:({uri:'https://lh3.googleusercontent.com/YFDZSd2RtPnGUH_q6wcKNtVB5oTYnwf3a6y4IpAQ6uUTJ0-3BmuVDFczSbLEwbtH4ViKNzIT=w1080-h608-p-no-v0'})
                }}/>
            </ScrollView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    titleHeader:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:10
    },
    header:{
        marginTop:10,
        padding:15
    },
    headerText:{
        fontSize:32,
        fontWeight:'bold',
        color:'#fff'
    },
    headerRightIcon:{
        flexDirection:'row',
        alignItems:'center'
    }, 
    icon:{
        transform:[{rotate:'-90deg'}],
        marginLeft:12
    },
    headerBody:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    container:{
        flex:1,
        padding:15
    },
    wrapperInput:{
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:8,
        marginTop:10,
    }, 
    inputText:{
        padding:10
    },
    mapview:{
        width:Dimensions.get('window').width,
        height:200
    }, 
    maker:{
        backgroundColor:'#6C4C86',
        padding:10,
        borderRadius:20
        
    },
    headerBackGroup:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    }
})
