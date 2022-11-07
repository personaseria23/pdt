import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ProfileScreen from "./pdt/screens/profile";
import HomeScreen from "./pdt/screens/home";
import SettingsScreen from "./pdt/screens/settings";
import Login from "./pdt/screens/login";

const App = () => {
  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
//