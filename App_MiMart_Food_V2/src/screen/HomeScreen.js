import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Header from '../component/Header'
let {height , width} = Dimensions.get("window");
import {ImageBanner} from '../../Data'

import { useNavigation } from '@react-navigation/native';
import {dataFoodStore} from '../../Data'
import ShopingCartIcon from '../component/ShopingCartIcon'
// Redux
import  {ADD_TO_CART} from '../../reducer/Reducer'
import {useDispatch} from 'react-redux'

const ImageCategories = [
    {
        name:"Thực phẩm",
        src:{uri:'https://babuki.vn/wp-content/uploads/2019/02/vi-sao-nen-mua-thuc-pham-tuoi-song-tai-bach-hoa-xanh-hinh-1_760x507.jpg'}
    },
    {
        name:"Món ăn",
        src:{uri:'https://du-lich-da-lat.com/wp-content/uploads/2019/09/an-trua-o-da-lat-1024x652.jpg'}
    },
    {
        name:"Nước giải khát",
        src:{uri:'https://dayphache.edu.vn/wp-content/uploads/2019/05/do-uong-khong-con-dong-chai.jpg'}
    },
    
]

function Item({src,name}){
    return (
        <View style ={{padding:10, alignItems:'center', backgroundColor:'white', borderRadius:10, marginTop:10}}>
            <TouchableOpacity>  
                    <Image
                        style = {{width:100,height:100, borderRadius:100}}
                        resizeMode = "contain"
                        source = {src}
                    />
            </TouchableOpacity>
            <Text style ={{fontWeight:'bold',fontSize:18}}>{name}</Text>
        </View>
    )
}


const HomeScreen = () => {

    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })

    const [dataFood,setDataFood] = useState(dataFoodStore);
    
    const navigation = useNavigation();

    return (
        
        <View style = {styles.container}>
            <Header style = {styles.header}/>
            <ScrollView>
            <View style = {styles.headerTextHi}>
                <Text style = {styles.titleTextHi}>Welcome MiMart Food</Text>
                <View style = {{marginTop:10, flexDirection:'row'}}>
                    <ShopingCartIcon/>
                </View>
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
            <View style = {styles.CategoriesGroup}>
                    <FlatList
                            horizontal = {true}
                            data ={ImageCategories}
                            renderItem = {({item}) => <Item name = {item.name} src = {item.src}/>}
                            keyExtractor = {(item,index) => index.toString()}
                    />   
            </View>
            <View>
                <FlatList
                    data = {dataFood}
                    numColumns = {2}
                    renderItem = {({item}) => (
                        <View>
                        <TouchableOpacity style = {styles.divfood}>
                            <Image style = {styles.imageFood}
                                resizeMode = "contain"
                                source = {item.src}
                            />
                            <Text style = {{fontSize:15, fontWeight:'bold',textAlign:'center'}}>{item.name}</Text>
                            <Text style = {{fontSize:15, fontWeight:'bold',textAlign:'center'}}>{item.price}$</Text>
                            <TouchableOpacity onPress={() => addItemToCart(item)}>
                                <Text style = {{fontSize:18,fontWeight:'bold',color:'red',}}>Mua</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                       
                    </View>
                    )}
                    keyExtractor = {(item,index) => index.toString()}
                />
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
        marginTop:40,
        flexDirection:'row',
        marginRight:15
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
        
    }, 
    imageFood:{
        width:100,
        height:100,
        backgroundColor:'transparent',
        
    },
    divfood:{
        width:(width/2)-20,
        height:200,
        padding:10,
        borderRadius:10,
        marginBottom:5,
        marginLeft:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
    }
})
