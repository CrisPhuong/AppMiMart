import React, {useState,useEffect, useContext} from 'react'
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Alert, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Header from '../component/Header'
import {AuthContext} from '../navigation/Context'
import AnhFace from '../../assets/Anhface.png'
import { Button } from 'react-native-paper'

const ProFileScreen = () => {
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Header/>
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleScreen}>Tài khoản</Text>
                </View>
                <View style = {styles.groupUser}>
                    <View style = {{padding:20}}>
                        <Image style = {styles.imageUser} source = {AnhFace}/>
                    </View>
                    <View style = {styles.groupUserTitle}>
                        <Text style = {styles.userName}>Phương</Text>
                        <TouchableOpacity style = {styles.buttonChinSua}>
                            <Text>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleTextCart}>Thông tin tài khoản</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleTextCart}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate("dangbai")}>
                        <Text style = {styles.titleTextCart}>Đăng bài</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button} onPress = {() => {signOut()}}> 
                        <Text style = {styles.titleTextCart}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default ProFileScreen

const styles = StyleSheet.create({
    headerText:{
        padding:20,
        paddingHorizontal:30,
        marginTop:50
    },
    titleTextCart:{
        fontSize:25,
        fontWeight:'bold',
        color:'black' 
    },
    headercontainer:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    },
    containerButton:{
        height:50,
        marginTop:10,
        padding:16,
        shadowOpacity:0.1,
        borderRadius:4,
        backgroundColor:'#F0F8FF',
        shadowRadius:10,
        shadowOffset:{width:0, height: 0},
        elevation:1,
        justifyContent:'center',
        alignItems:'center'
        
        
    },
    titleScreen:{
        fontSize:30,
        fontWeight:'bold',
        color:'white' 
    },
    
    groupUser:{
        height:140,
        flexDirection:'row',
        
    },
    imageUser:{
        width:80,
        height:80,
        borderRadius:50
    },
    userName:{
        fontSize:20,
        fontWeight:'bold',
    },
    buttonChinSua:{
        borderWidth:1,
        borderColor:'black',
        shadowOpacity:0.1,
        borderRadius:8,
        backgroundColor:'#00FFFF',
        shadowRadius:10,
        elevation:1,
        justifyContent:'center',
        alignItems:'center'
    },
    groupUserTitle:{
        marginTop:30
    }
})
