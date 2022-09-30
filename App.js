import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


  const HomeScreen = () => {
    const[origin, set0rigin] = React.useState({
      latitude: -33.046225180980755,
      longitude: -71.62489754321773
    });
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
    return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView style={styles.map}
          initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
          }}
        />
    </View>
    </>
    );
  }

  const SettingsScreen = () => {
    return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
    </>

    );
  }

const Tab = createBottomTabNavigator();

 const App = () => {
  
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;
//comentario
