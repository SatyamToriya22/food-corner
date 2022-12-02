import { StyleSheet, Text, View , ScrollView,  Button} from 'react-native';
import Body from './Body';
import Header from './Header';
const Main = ({navigation}) => {
    return <ScrollView>
            <View>
                <Header navigation= {navigation}/>
                {/* <Button
                    title="Go to  profile"
                    onPress={() =>
                        navigation.navigate('Detail', { name: 'Jane' })
                    }
                /> */}
                <Body navigation= {navigation}/>
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