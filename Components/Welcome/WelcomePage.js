import { useEffect, useState } from "react"
import { Image, View, StyleSheet, Pressable, ActivityIndicator } from "react-native"

const WelcomePage = ({ navigation }) => {
    const [loader, setLoader] = useState(true)
    const image = require("D:/Tech/React-Native Tutorial/food-corner/assets/Saga-removebg-preview.png")

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            navigation.navigate("Home")
        }, 3000)
    }, [])

    return <View style={styles.welcome}>
        <View style={styles.logoLoader}>
            <Image source={image} style={styles.logo} />
            {loader ?
                <ActivityIndicator size="large" color="white" />
                : null
            }
        </View>
    </View>
}

export default WelcomePage
const styles = StyleSheet.create({
    welcome: {
        backgroundColor: "rgb(255, 99, 71)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 250,
        height: 250
    },
    logoLoader: {
    }
})