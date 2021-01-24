import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { FAB,TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function ScreenAddBaiDang() {
    const [baiDang, setBaiDang] = useState('');
    const [chiTietBaiDang, setChiTietBaiDang] = useState('');
    const navigation = useNavigation();
    
    

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    label="Tên Bài Đăng"
                    value={baiDang}
                    mode='outlined'
                    onChangeText={setBaiDang}
                    style={styles.title}
                />
                <TextInput
                    label="Chi tiết bài đăng"
                    value={chiTietBaiDang}
                    onChangeText={setChiTietBaiDang}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={baiDang == '' ? true : false}
                    onPress={() => navigation.navigate('dangbai',{
                        baiDang:baiDang,
                        chiTietBaiDang:chiTietBaiDang
                    })}
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
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

})