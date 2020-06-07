import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import {SAVE_TO_SAVE} from '../../reducer/Reducer'

// Redux 
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../../reducer/Reducer'
const CartScreen = () => {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
    const removeItemFromCart = item =>
        dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
    
    return (
        <View style = {{flex:1}}>
            <View style = {{flex:0.85, backgroundColor:'#f2f2f2'}}>
                
                {
                    cartItems.length !== 0 ? (
                        <FlatList
                            data={cartItems}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item,i }) => (
                                <View style={styles.containerProducts}>
                                    
                                        <Image source={item.src } style={styles.imageProducts} />
                                
                                    <View style = {styles.titleGroup}>
                                        <Text style = {{textAlign:'center',fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
                                        <Text style = {{fontSize:15,fontWeight:'bold',color:'red'}} >Giá: {item.price} VND</Text>
                                        
                                        <View style = {{flexDirection:'row',alignItems:'center'}}>
                                                    {/* Nút giảm "-" */}
                                                    <TouchableOpacity >
                                                        <Icon name = "ios-remove-circle" size={30} color = {"#33c37d"}/>
                                                    </TouchableOpacity>
                                                    <Text style = {{fontWeight:'bold', paddingHorizontal:8}}>{item.sl}</Text>
                                                    {/* Nút tăng */}
                                                    <TouchableOpacity >
                                                        <Icon name = "ios-add-circle" size={30} color = {"#33c37d"}/>
                                                    </TouchableOpacity>
                                        </View>

                                        <View>
                                            <TouchableOpacity onPress={() => removeItemFromCart(item)} style = {styles.buttonXoa}>
                                                <Text style={{fontSize:22}}>Xóa</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    ) : (
                            <View style={styles.contaninerNoProducts}>
                                <Text style={styles.titleThongBao}>Không có sản phẩm nào :'(</Text>
                            </View>
                    )
                }

                </View>
                <View style = {{flex:0.15,backgroundColor:'white'}}>
                    <TouchableOpacity style = {styles.buttonMua} onPress = {() => alert("Bạn có muốn thêm vào giỏ hàng không")}>
                        <Text>Mua</Text>
                    </TouchableOpacity>
                </View>
        </View>
     
    )
    
}

export default CartScreen

const styles = StyleSheet.create({
   containerProducts:{
    padding:10,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
    marginTop:10
   },
   imageProducts:{
       width:120,
       height:120,
   },
   titleGroup:{
       marginLeft:5
   },
   buttonXoa:{
       borderRadius:8,
       backgroundColor:"pink",
       width:50,
       height:40,
       alignItems:'center',
       justifyContent:'center'
   },
   contaninerNoProducts:{
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
   },
   titleThongBao:{
       fontWeight:'bold',
       fontSize:28,
       color:'red'
   },
   buttonMua:{
       
   }
    
})
