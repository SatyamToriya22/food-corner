import { useState } from "react"
import { View, StyleSheet, Image, Text, Button, Pressable } from "react-native"
const Detail = ({ navigation, route }) => {
    console.log('name---', route.params)
    const dish = route.params.data
    const [counter, setCounter] = useState(1)
    let totalPrice = counter * dish.price
    const decreaseCounter = () => {
        setCounter(counter > 1 ? counter - 1 : counter)

    }
    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const onOrderClick = () => {
        const data = { ...dish, totalPrice, quantity: counter }
        navigation.navigate('Shipping', { data: data })
    }
    return <View>
        <Image source={require(`D:/Tech/React-Native Tutorial/food-corner/assets/productImages/${dish.imagePath}`)} style={styles.foodImage} />
        <View style={styles.text}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.name}>Rs. {dish.price}</Text>
        </View>
        <View>
            <Text style={styles.descriptionText}>{dish.description}</Text>
        </View>
        <View style={styles.counterPrice}>
            <Text style={styles.totalPriceText}>Total - $ {totalPrice}</Text>
            <View style={styles.counter}>
                <Button title="-" onPress={decreaseCounter} />
                <Text style={styles.counterNumber}> {counter} </Text>
                <Button title="+" onPress={increaseCounter} />
            </View>
        </View>
        <Pressable style={{ ...styles.button, backgroundColor: "rgb(255,99,71)" }} onPress={onOrderClick}>
            <Text style={styles.Text}>Order</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    text: {
        marginTop: 14,
        marginBottom: 14
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'center'
    },
    foodImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    descriptionText: {
        fontSize: 19,
        fontWeight: '500',
        letterSpacing: 0.2,
        textAlign: 'justify'
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.2,
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3
    },
    counterNumber: {
        marginLeft: 6,
        marginRight: 6,
        fontSize: 15,
        fontWeight: "bold"
    },
    counterPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
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
export default Detail