import React, { useState } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import { FAB, List } from 'react-native-paper'

import {useNavigation} from '@react-navigation/native'

export default function ScreenDangBai({navigation,route}) {
    
    const [dataBaiDang, setDataBaiDang] = useState([route]);
    return (
        <>
    
            <View style={styles.container}>
                {dataBaiDang.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Bạn chưa có bài đăng nào</Text>
                    </View>
                ) : (
                        <FlatList
                            data={dataBaiDang}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.baiDang}
                                    description={item.chiTietBaiDang}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                />
                            )}
                           
                        />
                    )}

                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Thêm bài đăng'
                    onPress={() => navigation.navigate('baidang')} 
                    
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }

})