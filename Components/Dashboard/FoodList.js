import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, Button, Pressable } from "react-native"
import data from '../../data.json'
const FoodList = ({ foodData, navigation }) => {
    console.log('data', foodData)
    return <>
        <View style={styles.itemBox}>
            {foodData?.map((item, key) => {
                return <View key={key} style={styles.foodItem}>
                    <Image source={require(`D:/Tech/React-Native Tutorial/food-corner/assets/productImages/${item.imagePath}`)} style={{width: 140,  height: 140}}/>
                    <View style={styles.text}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.name}>Rs. 200</Text>
                    </View>
                    <Pressable style={{ ...styles.button, backgroundColor: "rgb(255,99,71)" }} onPress={()=> navigation.navigate('Detail', { data: item })}>
                    <Text style={styles.Text}>Order</Text>
                </Pressable>
                </View>
            })
            }
        </View>
    </>
}

const styles= StyleSheet.create({
    foodItem: {
        borderWidth: 2,
        borderColor: 'grey',
        width: 'fit-content',
        margin: 20,
        borderRadius: 10,
        padding: 10

    },
    itemBox : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    text : {
        marginTop: 8,
        marginBottom: 8
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 2,
        marginBottom: 2
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3
    },
    Text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default FoodList