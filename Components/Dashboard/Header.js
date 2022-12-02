import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Header = ({navigation}) => {
  const image = require("D:/Tech/React-Native Tutorial/food-corner/assets/home_cover.webp");
  return <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.imagebg}>
        <Text style={styles.text} onPress={() =>
          navigation.navigate('Detail', { name: 'Jane' })
        }>Hungry ??</Text>
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
  tabs: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'rgb(210, 210, 210)'
  },
  tab: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'rgb(90, 90, 90)',
  }
});