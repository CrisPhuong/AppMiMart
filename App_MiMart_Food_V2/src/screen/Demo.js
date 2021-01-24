import React, { useState, useEffect } from 'react'
import { StyleSheet,ActivityIndicator, FlatList, Text, View } from 'react-native'


const Demo = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('http://192.168.1.58:3000/product')
        .then((response) => response.json())
        .then((json) => setData(json.products))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.price}</Text>
                    <Text>{item.productName}</Text>
                </View>
            )}
          />
        )}
      </View>
    )
}

export default Demo

const styles = StyleSheet.create({})
