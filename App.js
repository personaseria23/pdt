import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const[origin, set0rigin] = React.useState({
    latitude: -33.046225180980755,
    longitude: -71.62489754321773
  })


  return (
    <NavigationContainer>{
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
          }}
        />
      </View>
    }</NavigationContainer>
  );
}

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
