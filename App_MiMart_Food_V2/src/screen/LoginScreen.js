import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, TextInput,ScrollView, Image, Alert,AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../navigation/Context'

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const { signIn } = useContext(AuthContext);
    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        })
    }
    const updateSecureText = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = (username, password) => {
        signIn(username, password);
    }

    
    // const userLogin = {userName:"123456", password:'123456'};
    // const [usernames,setUserName] = useState();
    // const [passwords,setPassWord] = useState();
    // const login = async () => {
    //     if(userLogin.userName == usernames && userLogin.password == passwords){
    //         Alert.alert('Đăng nhập thành công');
            
    //         navigation.navigate("app");
            
            
    //     }else {
    //        Alert.alert('Số điện thoại hoặc mật khẩu không chính xác');
           
            
            
    //     }
    // }
    return (
        <ScrollView>
            <View>
                <Animatable.View animation = "fadeInRight">
                    <View style = {{padding:60, alignItems:'center',justifyContent:'center'}}>
                        <Text style = {{fontSize:60, fontWeight:'bold',color:'#EE82EE'}}>MiMart</Text>
                    </View>

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
                    </View>

                    <Text style = {styles.forGotPassWord}>Quên mật khẩu?</Text>
                </Animatable.View>
                <Animatable.View animation = "fadeInLeft">
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => {loginHandle( data.username, data.password )}} >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:20,}}>Đăng nhập</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => navigation.navigate("signuot")}>            
                        <Text style= {{ fontWeight:'bold',fontSize: 18,color: "#EE82EE",textAlign: "center",marginTop: 24}}>Đăng ký</Text>
                    </TouchableOpacity>
                    <Text style ={{color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }}>or</Text>
                    <View style = {{marginTop:48, flexDirection:'row', justifyContent:'center'}}>
                        <TouchableOpacity>
                            <View style = {styles.buttonGroup}>
                                <Image style = {styles.logo} source = {require('../../assets/facebook.png')}/>
                                <Text style={styles.text}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style = {styles.buttonGroup}>
                                <Image style = {styles.logo} source = {require('../../assets/google.png')}/>
                                <Text style={styles.text}>Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>    
            </View>
        </ScrollView>
    )
}

export default LoginScreen

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
