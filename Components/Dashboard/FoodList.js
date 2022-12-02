import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, Button } from "react-native"
import data from '../../data.json'
const FoodList = ({ type, navigation }) => {
    const [foodData, setFoodData] = useState(data['fastFood'])
    useEffect(() => {
        setFoodData(data[type])
    }, [type])
    console.log('data', foodData)
    return <>
        <View style={styles.itemBox}>
            {foodData.map((item, key) => {
                return <View key={key} style={styles.foodItem}>
                    <Image source={require(`D:/Tech/React-Native Tutorial/food-corner/assets/productImages/${item.imagePath}`)} style={{width: 140,  height: 140}}/>
                    <View style={styles.text}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.name}>Rs. 200</Text>
                    </View>
                    <Button title="Order" color="rgb(255, 99, 71)" onPress={()=> navigation.navigate('Detail', { data: item })}/>
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
        flexWrap: 'wrap'
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
    }
})

export default FoodList