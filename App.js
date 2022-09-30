import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Ionic from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const[origin, set0rigin] = React.useState({
    latitude: -33.046225180980755,
    longitude: -71.62489754321773
  })

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();  

  return (
    <NavigationContainer>{
      // <View style={styles.container}>
      //   {/* <MapView style={styles.map}
      //     initialRegion={{
      //     latitude: origin.latitude,
      //     longitude: origin.longitude,
      //     latitudeDelta: 0.09,
      //     longitudeDelta: 0.04
      //     }}
      //     /> */}
      //     {/* <Text>Holi</Text>  */}

          
      // </View>  
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    }</NavigationContainer>

  );
}
//comentario
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'100%',
    height: '100%'
  }
});
