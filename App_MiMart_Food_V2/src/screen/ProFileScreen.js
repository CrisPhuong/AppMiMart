import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import Header from '../component/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ProFileScreen = () => {

    return (
        <View>
            <Header/>
            <View style = {styles.headercontainer}>
                <View style = {styles.headerText}>
                    <Text style = {styles.titleTextCart}>Tài khoản</Text>
                </View>
                <View style = {styles.groupUser}>
                    <View>

                    </View>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleButton}>Thông tin tài khoản</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleTextCart}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleTextCart}>Đăng bài</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.titleTextCart}>Đầu bếp</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}> 
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
        fontSize:30,
        fontWeight:'bold',
        color:'#fff' 
    },
    headercontainer:{
        position:'absolute',
        width:Dimensions.get("window").width,
        height:225
    },
    containerButton:{
        height:50,
        backgroundColor:'red',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
        
    },
    buttonGroup:{
      
    
    },
    titleButton:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    groupUser:{
        height:140,
        backgroundColor:'pink'
    }
})
