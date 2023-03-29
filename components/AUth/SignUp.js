import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { HeroImage } from "../../assets";
import { useWindowDimensions } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useState } from "react";

const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress=()=>{
    console.warn("Sign In")
    
  }

  const onForgotPasswordPress=()=>{
    console.warn("onForgotPasswordPress")
  }

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const { height } = useWindowDimensions();

  return (
    <SafeAreaView
      className="bg-[#F9FBFC] flex-1 relative"
      style={styles.container}
    >
      <Image
        source={HeroImage}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
        className="mb-5"
      />

      <CustomInput placeholder={"Username"} value={username} setValue={setUsername}/>
      <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>

      <CustomButton text={"SignIn"} onPress={()=>navigation.navigate("Discover")} />
      <CustomButton text={"Forgot Password?"} onPress={onForgotPasswordPress} type={"TERTIARY"}/>

      {/* <TextInput style={styles.input} placeholder="Enter Your Name" />
      <TextInput style={styles.input} placeholder="Enter Your Password" />
      <Button title="click Here To Login"
        onPress={() => navigation.navigate("Discover")}
      ></Button>
      <Text> If You Dont Have An Account.</Text>
      <Button title="click Here To Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      ></Button> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    alignItems: "center",
    padding: 20,

    // backgroundColor:"grey",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  // item:{
  //     fontSize:20,
  //     padding:15,
  //     backgroundColor:"cyan",
  // }

  input: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
