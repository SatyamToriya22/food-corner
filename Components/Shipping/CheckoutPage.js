import { useState } from "react"
import { View, Text, Image, Button, StyleSheet, Pressable, Modal } from "react-native"

const CheckoutPage = ({ route, navigation }) => {
    const [show, setShow] = useState(false)
    const data = route.params.data
    console.log('data-', data)
    const navigateHome = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={{ ...styles.details, opacity: show ? 0.3 : 1 }}>
            <Text style={styles.purchase}>Purchase Details</Text>
            <View style={styles.imageName}>
                <Image source={require(`D:/Tech/React-Native Tutorial/food-corner/assets/productImages/${data.imagePath}`)} style={styles.image} />
                <View style={styles.nameQty}>
                    <Text style={styles.productName}>{data.name}</Text>
                    <Text style={styles.quantity}>Qt. {data.quantity}</Text>
                </View>
            </View>
            <View style={styles.totalPrice}>
                <Text style={styles.total}>Total Price - </Text>
                <Text style={styles.price}>Rs. {data.totalPrice}</Text>
            </View>
            <View style={styles.payCancleBtn}>
                <Pressable style={{ ...styles.button, backgroundColor: "rgb(255,99,71)" }} onPress={() => setShow(!show)}>
                    <Text style={styles.Text}>Pay</Text>
                </Pressable>
                <Pressable style={{ ...styles.button, backgroundColor: "black" }} onPress={() => navigateHome()}>
                    <Text style={styles.Text}>Cancel</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={show}
                >
                    <View style={styles.modal}>
                        <View style={styles.thankyouName}>
                            <Text style={styles.thankyouText}>Thank you for your order !!!</Text>
                            <Text style={styles.nameText}>{data.contactDetails.fullName}</Text>
                        </View>
                        <View>
                            <Pressable style={{ ...styles.button, backgroundColor: "rgb(255,99,71)" }} onPress={() => {
                                setShow(!show)
                                navigateHome()
                            }

                            }>
                                <Text style={styles.Text}> Order More</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    details: {
        position: "relative",
    },
    purchase: {
        textAlign: "center",
        backgroundColor: "rgb(210, 210, 210)",
        fontWeight: "bold",
        fontSize: 20,
        padding: 15,
        marginBottom: 15
    },
    imageName: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        padding: 20
    },
    image: {
        width: 100,
        height: 100
    },
    nameQty: {
        paddingRight: 40
    },
    productName: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    quantity: {
        fontSize: 18,
        fontWeight: "bold"
    },
    totalPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "rgb(220, 220, 220)"

    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        paddingRight: 40
    },
    payCancleBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
    ,
    modal: {
        position: "absolute",
        top: 250,
        left: "0%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        height: 250,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 40,
        marginLeft: 40,
    },
    thankyouName: {
        textAlign: "center",
        marginBottom: 25
    },
    thankyouText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    nameText: {
        fontSize: 22,
        fontWeight: "bold"
    }


})