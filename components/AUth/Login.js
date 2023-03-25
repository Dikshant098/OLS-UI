import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative" style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter Your Name" />
      <TextInput style={styles.input} placeholder="Enter Your Password" />
      <Button title="click Here To Login"
        onPress={() => navigation.navigate("Discover")}
      ></Button>
      <Text> If You Dont Have An Account.</Text>
      <Button title="click Here To Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      ></Button>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
      marginTop:30,
      padding:20,
      backgroundColor:"grey",
  },

  // item:{
  //     fontSize:20,
  //     padding:15,
  //     backgroundColor:"cyan",
  // }

  input:{
      backgroundColor:"white",
      padding:10,
      borderWidth:2,
      borderRadius:10,
      marginTop:10,
      marginBottom:10,

  }
})