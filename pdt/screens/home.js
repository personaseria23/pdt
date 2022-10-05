import MapView, {Marker} from "react-native-maps";
import * as React from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";

const HomeScreen = () => {
  const [origin, set0rigin] = React.useState({
    latitude: -33.046225180980755,
    longitude: -71.62489754321773,
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });

  // const Stack = createNativeStackNavigator();

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      />
      <Marker
        coordinate={{
            latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        title="El Estarbocks"
        description="Esto es el Estarbocks"
      />
    </View>
  );
};

export default HomeScreen;
