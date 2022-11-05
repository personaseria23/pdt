import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

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
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View>
      <MapView style={styles.map} />
      <Marker
        ccoordinate={{
          longitude: mapRegion.longitude,
          latitude: mapRegion.latitude,
        }}


        title="El Estarbocks"
        description="Esto es el Estarbocks"
      ></Marker>
    </View>
  );
};

export default HomeScreen;

// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import MapView, { Marker, Circle } from "react-native-maps";
// import * as Location from "expo-location";
// import { FontAwesome5 } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("screen");

// const HomeScreen = (props) => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [mapRegion, setMapRegion] = useState(null);
  

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);

//       setMapRegion({
//         longitude: location.coords.longitude,
//         latitude: location.coords.latitude,
//         longitudeDelta: 0.0922,
//         latitudeDelta: 0.0421
//       });
//     })();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <MapView
//         initialRegion={mapRegion}
//         mapType="terrain"
//         style={styles.mapView}
//       >
        
//         {mapRegion ? (
//           <Marker
//             coordinate={{
//               longitude: mapRegion.longitude,
//               latitude: mapRegion.latitude
//             }}
//             title="Me"
//             description="Myself"
//           >
//             <View style={styles.circle}>
//               <View style={styles.core} />
//               <View style={styles.stroke} />
//             </View>
//           </Marker>
//         ) : null}

       
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     width,
//     height
//   },
//   mapView: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     width,
//     height
//   },
  
//   stroke: {
//     backgroundColor: "#ffffff",
//     borderRadius: 50,
//     width: "100%",
//     height: "100%",
//     zIndex: 1
//   },
//   core: {
//     backgroundColor: "red",
//     width: 24,
//     position: "absolute",
//     top: 1,
//     left: 1,
//     right: 1,
//     bottom: 1,
//     height: 24,
//     borderRadius: 50,
//     zIndex: 2
//   }
// });

// export default HomeScreen;