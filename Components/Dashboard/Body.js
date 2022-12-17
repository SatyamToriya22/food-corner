import { StyleSheet, View, Text } from 'react-native';
import FoodList from './FoodList';

const Body = ({ navigation, foodContent, setFoodContent, foodData, searchedValue }) => {

    return <>
        <View style={styles.tabs}>
            {searchedValue.length > 2?
                <Text style={{...styles.tab, paddingBottom: 20}} >Your Searched Items for {searchedValue}...</Text>
                :
                <>
                    <Text style={foodContent == "fastFood" ? styles.tabActive : styles.tab} onPress={() => setFoodContent('fastFood')}>Fast Food</Text>
                    <Text style={foodContent == "deserts" ? styles.tabActive : styles.tab} onPress={() => setFoodContent('deserts')}>Deserts</Text>
                    <Text style={foodContent == "mainCourse" ? styles.tabActive : styles.tab} onPress={() => setFoodContent('mainCourse')}>Main Course</Text>
                </>
            }
        </View>
        <View>
            {searchedValue.length > 2 && foodData.length == 0 ?
            <View style={styles.noItemFound} >
            <Text style={styles.tab}>No Items Found..</Text>
            </View>
            :
            <FoodList foodData={foodData} navigation={navigation} />
}
        </View>
    </>
}

const styles = StyleSheet.create({
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        backgroundColor: 'rgb(210, 210, 210)',
    },
    tab: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'rgb(90, 90, 90)',
    },
    tabActive: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'rgb(90, 90, 90)',
        borderBottomWidth: 5,
        paddingBottom: 15
    },
    noItemFound: {
        // flex: 2,
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center"
        marginHorizontal: "auto",
        marginVertical: "50%"
    }
});
export default Body