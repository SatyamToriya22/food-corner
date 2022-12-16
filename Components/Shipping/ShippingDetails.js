import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native"
import { CheckBox } from "react-native-web"

const contactFields = {
    fullName: "",
    number: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    accept: false
}
const ShippingDetails = ({ navigation, route }) => {
    const [disabled, setDisabled] = useState(true)
    const [contactDetails, setContactDetails] = useState(contactFields)
    console.log('routedata', route.params.data)
    const data1 = route.params.data
    const validateForm = (data) => {
        if (!data.fullName) {
            setDisabled(true)
            return false
        }
        if (!data.number) {
            setDisabled(true)
            return false
        }
        if (!data.address) {
            setDisabled(true)
            return false
        }
        if (!data.city) {
            setDisabled(true)
            return false
        }
        if (!data.state) {
            setDisabled(true)
            return false
        }
        if (!data.zip) {
            setDisabled(true)
            return false
        }
        if (!data.accept) {
            setDisabled(true)
            return false
        }
        console.log('dwf')
        return true
        // navigation.navigate('Detail', { data: data })
    }
    console.log('details', contactDetails)
    const handleChange = (e, name) => {
        console.log('event', e.target.checked)
        let value = e.target.value
        let data = { ...contactDetails }
        if (name == "fullName") {
            data = { ...contactDetails, fullName: value }
            setContactDetails(data)
        }
        else if (name == "number") {
            data = { ...contactDetails, number: value }
            setContactDetails(data)
        }
        else if (name == "address") {
            data = { ...contactDetails, address: value }
            setContactDetails(data)
        }
        else if (name == "city") {
            data = { ...contactDetails, city: value }
            setContactDetails(data)
        }
        else if (name == "state") {
            data = { ...contactDetails, state: value }
            setContactDetails(data)
        }
        else if (name == "zip") {
            data = { ...contactDetails, zip: value }
            setContactDetails(data)
        }
        else if (name == "accept") {
            data = { ...contactDetails, accept: e.target.checked }
            setContactDetails(data)
        }

        if (validateForm(data)) {
            setDisabled(false)
        }
    }
    const handleSubmit = () => {
        const data = { contactDetails, ...data1 }
        console.log('dataa', data)
        navigation.navigate('Checkout', { data: data })
    }
    return <View style={styles.main}>
        <View>
            <Text style={styles.checkoutHead}>Fill below info to complete your order</Text>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Full Name</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "fullName")} placeholder="Enter Your Full Name.."></TextInput>
                <Text style={styles.formLabel}>Mobile Number</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "number")} placeholder="Enter Your Number.."></TextInput>
                <Text style={styles.formLabel}>Address</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "address")} placeholder="Enter Your Full Address.."></TextInput>
                <Text style={styles.formLabel}>City</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "city")} placeholder="Enter Your City.."></TextInput>
                <Text style={styles.formLabel}>State</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "state")} placeholder="Enter Your State.."></TextInput>
                <Text style={styles.formLabel}>Zip</Text>
                <TextInput style={styles.textInput} onChange={(e) => handleChange(e, "zip")} placeholder="Enter Your Zip Code.."></TextInput>
                <View style={styles.checkbox}>
                    <CheckBox style={styles.formLabel} onChange={(e) => handleChange(e, "accept")} value={contactDetails.accept} />
                    <Text style={styles.formLabel}>Accept Terms & Conditions</Text>
                </View>
            </View>
        </View>
        <Pressable style={{...styles.button, opacity: disabled ? 0.5 : 1} } onPress={handleSubmit} disabled={disabled}>
            <Text style={styles.Text}>CHECKOUT</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between"
    },
    form: {
        marginTop: 15,
        marginBottom: 15
    },
    checkoutHead: {
        backgroundColor: "orange",
        textAlign: "center",
        padding: 10,
        fontSize: 18,
        fontWeight: "bold"
    },
    formLabel: {
        marginLeft: 12,
        fontWeight: "bold",
        fontSize: 16
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    checkoutBtn: {
        marginBottom: 0
    },
    checkbox: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        elevation: 3,
        backgroundColor: "orange"
    },
    Text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
export default ShippingDetails