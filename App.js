import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Components/Dashboard/Main'
import DetailPage from './Components/FoodDetail/Detail'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
              {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainPage} />
          <Drawer.Screen name="Detail" component={DetailPage} />
        </Drawer.Navigator> */}
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{...styles.detail, title : 'Welcome to Food Corner'}}
        />
        <Stack.Screen name="Detail" component={DetailPage}
          options={styles.detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail : {
    title: '',
    headerStyle: {
      backgroundColor: '#f4511e',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: '25px',
      letterSpacing: 2,
      wordSpacing: 3
    },
    headerTitleAlign: 'center',

  }
});
