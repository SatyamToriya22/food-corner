import { StyleSheet, Text, View , ScrollView,  Button} from 'react-native';
import Header from './Header';
const Main = ({navigation}) => {
    return <ScrollView>
            <View style={styles.container}>
                <Header />
                <Button
                    title="Go to  profile"
                    onPress={() =>
                        navigation.navigate('Detail', { name: 'Jane' })
                    }
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