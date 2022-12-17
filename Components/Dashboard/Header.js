import { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
import data from "../../data.json"
const Header = ({ navigation }) => {
  const image = require("D:/Tech/React-Native Tutorial/food-corner/assets/home_cover.webp");
  const [filterData, setFilterData] = useState([])
  const searchItem = (e) => {
    const value = e.target.value.toLowerCase()
    let foodData = []
    if (value.length > 2) {
      for (let foodItem in data) {
        console.log('foodItem', foodItem)
        let food = data[foodItem].filter((item) => {
          let itemName = item.name.toLowerCase()
          return itemName.includes(value)
          }
        )
        foodData = [...foodData, ...food]
        console.log('food-', food)
      }
    }
    setFilterData(foodData)
  }
  console.log('filterData', filterData)
  return <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.imagebg}>
        <Text style={styles.text} >Hungry ??</Text>
        <TextInput style={styles.searchbar} placeholder='Search..' onChange={(e) => searchItem(e)} />
      </View>
    </ImageBackground>
  </View>
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 200

  },
  image: {
    flex: 1
  },
  imagebg: {
    backgroundColor: "#000000c0",
    height: 200,
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "cursive"
  },
  searchbar: {
    borderColor: "white",
    borderBottomWidth: 3,
    borderRadius: 2,
    paddingLeft: 8,
    paddingVertical: 8,
    marginHorizontal: "auto",
    color: "white"
  }
});