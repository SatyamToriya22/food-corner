import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import FoodList from './FoodList';
const Body = ({navigation}) => {
    const [foodContent, setFoodContent] = useState('fastFood')
    const categoryFunc = (cat) => {
        setFoodContent(cat)
    }
    return<>
    <View style={styles.tabs}>
        <Text style={styles.tab} onPress={() => categoryFunc('fastFood')}>Fast Food</Text>
        <Text style={styles.tab} onPress={() => categoryFunc('deserts')}>Deserts</Text>
        <Text style={styles.tab} onPress={() => categoryFunc('mainCourse')}>Main Course</Text>
    </View>
    <View>
        <FoodList type={foodContent} navigation={navigation} />
    </View>
    </> 
}

const styles = StyleSheet.create({
    tabs: {
        display: 'flex',
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
export default Body