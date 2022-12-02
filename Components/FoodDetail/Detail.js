import { View, StyleSheet, Image, Text } from "react-native"
const Detail = ({navigation, route}) =>{
    console.log('name---', route.params)
    const dish = route.params.data
    return <View>
        <Image source={require(`D:/Tech/React-Native Tutorial/food-corner/assets/productImages/${dish.imagePath}`)} style={{width: 140,  height: 140}}/>
                    <View style={styles.text}>
                        <Text style={styles.name}>{dish.name}</Text>
                        <Text style={styles.name}>Rs. {dish.price}</Text>
                    </View>
    </View>
}

const styles= StyleSheet.create({
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
export default Detail