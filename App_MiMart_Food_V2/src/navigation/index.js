import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import màn hình
import HomeScreen from '../screen/HomeScreen'
import CartScreen from '../screen/CartScreen'
import MapScreen from '../screen/MapScreen'
import ProFileScreen from '../screen/ProFileScreen'
import StoreScreen from '../screen/StoreScreen'
import ListStoreMap from '../component/ListStoreMap'
import ChiTietProduct from '../screen/ChiTietProduct'
import BackHoaXanhScreen from '../screen/BackHoaXanhScreen'
import ShopingCartIcon from '../component/ShopingCartIcon'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Stack1 = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component = {HomeScreen} options ={{headerShown:false}}/>
            <Stack.Screen name = "cart" component = {CartScreen} options = {{title:"Giỏ hàng"}}/>
        </Stack.Navigator>
    )
}


const Stack3 = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "store" component = {StoreScreen} options ={{headerShown:false}}/>
            <Stack.Screen name = "chitietproduct" component = {ChiTietProduct} options = {{title:"Chi tiết sản phẩm"}}/>
            <Stack.Screen name = "bachhoaxanh" component = {BackHoaXanhScreen}/>
            <Stack.Screen name = "iconCart" component = {ShopingCartIcon} options = {{headerShown:false}}/>
        
        </Stack.Navigator>
    )
}
const Stack4 = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "map" component = {MapScreen}options ={{headerShown:false}} />
            <Stack.Screen name = "listStore" component = {ListStoreMap}options ={{headerShown:false}} /> 
        </Stack.Navigator>
    )
}
const Stack5 = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "profile" component = {ProFileScreen} options ={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default function AppContainer() {
  return (
      <Tab.Navigator barStyle = {{backgroundColor:'white'}}>
        <Tab.Screen name="home" component={Stack1} options={{tabBarLabel:'Trang chủ',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={28} />)}}/>
        <Tab.Screen name="Store" component={Stack3} options={{tabBarLabel:'Của hàng',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="store" color={color} size={28} />),}}/>
        <Tab.Screen name="Map" component={Stack4} options={{tabBarLabel:'Bản đồ',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="map" color={color} size={28} />),}} />
        <Tab.Screen name="Profile" component={Stack5} options={{tabBarLabel:'Tài khoản',tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={28} />),}}/>
      </Tab.Navigator>
  );
}