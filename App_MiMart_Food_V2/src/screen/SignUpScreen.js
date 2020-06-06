import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, TextInput,ScrollView, Image, Alert,AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


const SignUpScreen = () => {

    const [data, setData] = useState({
        email:'',
        password:'',
        confirm_pass:'',
        check_textInputChange:false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    })
    const textInputChange = (val) => {
        if(val != 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }else {
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        })
    }
    const handleConFirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_pass:val
        })
    }
    const updateSecureText = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const updateConFirmSecureText = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View>
                <View style = {{padding:60, alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:60, fontWeight:'bold',color:'#EE82EE'}}>MiMart</Text>
                </View>
                <Text style = {{textAlign:'center',fontSize:25,fontWeight:'normal',color:'red'}}>Đăng ký tài khoản</Text>

                <View style = {{padding:20}}>
                    <Text style = {{color: "black",fontSize: 14,fontWeight:'bold'}}>Số điện thoại</Text>
                    <View style = {styles.groupInput}>
                    
                        <TextInput
                            autoCapitalize = "none"
                            onChangeText = {(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View animation = "bounceIn">
                                <Feather
                                    name = "check-circle"
                                    color = "green"
                                    size={20}
                                    
                                />
                            </Animatable.View>
                        : null }
                    </View>
                    <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
                    <Text style = {{color: "black",fontSize: 14,marginTop:10,fontWeight:'bold'}}>Mật khẩu</Text>
                    <View style = {styles.groupInput}>
                        <TextInput
                            
                            autoCapitalize="none"
                            style = {styles.textInput}
                            secureTextEntry = {data.secureTextEntry ? true : false}
                            onChangeText = {(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress = {updateSecureText}>
                            {data.secureTextEntry ?
                                <Feather
                                    name = "eye-off"
                                    color = "green"
                                    size={20}
                                />
                                :
                                <Feather
                                    name = "eye"
                                    color = "red"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
                    <Text style = {{color: "black",fontSize: 14,marginTop:10,fontWeight:'bold'}}>Nhập lại mật khẩu</Text>
                    <View style = {styles.groupInput}>
                        <TextInput
                            
                            autoCapitalize="none"
                            style = {styles.textInput}
                            secureTextEntry = {data.confirm_secureTextEntry ? true : false}
                            onChangeText = {(val) => handleConFirmPasswordChange(val)}
                        />
                        <TouchableOpacity onPress = {updateConFirmSecureText}>
                            {data.confirm_secureTextEntry ?
                                <Feather
                                    name = "eye-off"
                                    color = "green"
                                    size={20}
                                />
                                :
                                <Feather
                                    name = "eye"
                                    color = "red"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
                </View>

                
                <TouchableOpacity style={styles.buttonLogin} onPress = {() => navigation.goBack()} >
                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,}}>Đăng nhập</Text>
                </TouchableOpacity>

                
                 
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    buttonGroup:{
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width: 16,
        height: 16,
        marginRight: 8
    },
    forGotPassWord:{
        color: "#EE82EE",
        fontSize: 14,
        fontWeight: "500",
        textAlign:'right',
        fontWeight:'bold'
    },
    buttonLogin:{
        backgroundColor: "#EE82EE",
        fontSize: 16,
        borderRadius: 20,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        marginLeft:20,
        marginRight:20
    },
    text:{
        color: "#1D2029",
        fontSize:18,
        fontWeight:'bold'
    },
    groupInput:{
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        
    },
    

})
