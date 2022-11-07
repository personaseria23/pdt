import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "./pdt/screens/login"

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ProfileScreen from "./pdt/screens/profile";
import HomeScreen from "./pdt/screens/home";
import SettingsScreen from "./pdt/screens/settings";
// import Login from "./pdt/screens/login";

const App = () => {
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
      <Tab.Navigator>
       
        {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> */}
        <Tab.Screen name="Login" component={LoginScreen} />


      </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
//