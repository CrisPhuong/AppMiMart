import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView,Dimensions,ActivityIndicator } from 'react-native'

import Header from '../component/Header'
let {height , width} = Dimensions.get("window");
import Banner from '../component/Banner'

import { useNavigation } from '@react-navigation/native';

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
        name:"Dầu gội",
        src:{uri:'https://www.hangngoainhap.com.vn/images/201805/goods_img/2244_P_1525402815307.jpg'}
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
    
    const [dataFood, setDataFood] = useState([]);
  
    useEffect(() => {
      fetch('http://192.168.1.124:3000/product')
        .then((response) => response.json())
        .then((json) => setDataFood(json.products))
        .catch((error) => console.error(error))
    }, []);

    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })

    
    const navigation = useNavigation();

    return (
        
        <View style = {styles.container}>
            <Header style = {styles.header}/>
            <ScrollView>
            <View style = {styles.headerTextHi}>
                <Text style = {styles.titleTextHi}>Welcome MiMart Food</Text>
                <View style = {{marginTop:40, flexDirection:'row'}}>
                    <ShopingCartIcon/>
                </View>
            </View>
            <View>
                <Banner/>
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
                           <TouchableOpacity style={styles.divfood} onPress = {() => navigation.navigate('Store', { screen:'chitietproduct', params:{
                               name:item.productName,
                               src:{uri:item.productImage},
                               price:item.price,
                               content:item.description,
                               hsd:item.expiryDate,
                               nameStore:item.nameStore
                           }})}>
                                <Image style = {styles.imageFood}
                                    resizeMode = "contain"
                                    source = {{uri:item.productImage}}
                                />
                                <Text style = {{fontSize:15, fontWeight:'bold',textAlign:'center'}}>{item.productName}</Text>
                                <Text style = {{fontSize:15, fontWeight:'bold',textAlign:'center'}}>{item.price} đ</Text>
                                <TouchableOpacity onPress={() => addItemToCart(item)}>
                                    <Text style = {{fontSize:18,fontWeight:'bold',color:'red',}}>Mua</Text>
                                </TouchableOpacity>
                           </TouchableOpacity>
                           
                       </View>
                    )}
                    keyExtractor = {(item,index) => index.toString()}
                />
            </View>
            {/* <View>
                
                <FlatList
                    data = {dataFood}
                    numColumns = {2}
                    renderItem = {({item}) => (
                        <View>
                        <TouchableOpacity style={styles.divfood} onPress = {() => navigation.navigate('Store', { screen: 'chitietproduct',params:{
                             name:item.name,
                             src:item.src,
                             price:item.price,
                             content:item.content,
                             hsd:item.hsd,
                             nameStore:item.nameStore
                        }})}>
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
            </View> */}
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
