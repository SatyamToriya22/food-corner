import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Body from './Body';
import Header from './Header';
import data from '../../data.json'

const Main = ({ navigation }) => {
    const [foodContent, setFoodContent] = useState('fastFood')
    const [foodData, setFoodData] = useState(data['fastFood'])
    const [searchedValue, setSearchValue] = useState('')

    useEffect(() => {
        setFoodData(data[foodContent])
    }, [foodContent])

    const searchItem = (e) => {
        setSearchValue(e.target.value)
        const value = e.target.value.toLowerCase()
        if (value.length > 2) {
            let filteredData = []
            for (let foodItem in data) {
                console.log('foodItem', foodItem)
                let food = data[foodItem].filter((item) => {
                    let itemName = item.name.toLowerCase()
                    return itemName.includes(value)
                }
                )
                filteredData = [...filteredData, ...food]
                console.log('food-', food)
            }
            setFoodData(filteredData)
        }
        else {
            setFoodData(data[foodContent])
        }
    }
    return <ScrollView>
        <View>
            <Header navigation={navigation} searchItem={searchItem} />
            {/* <Button
                    title="Go to  profile"
                    onPress={() =>
                        navigation.navigate('Detail', { name: 'Jane' })
                    }
                /> */}
            <Body
                navigation={navigation}
                foodContent={foodContent}
                setFoodContent={setFoodContent}
                foodData={foodData}
                searchedValue={searchedValue}
            />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main