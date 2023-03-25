import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from './screens/Discover';
import Login from './components/AUth/Login';
import SignUp from './components/AUth/SignUp';

const Stack = createNativeStackNavigator();

// const backgroundStyle = "bg-yellow-300 flex-1 items-center justify-center";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
