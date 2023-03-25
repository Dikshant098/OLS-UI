import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-3 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">OLS</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Online Laundry Service</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[40px]">Enjoy Your Cloths With</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Mood
        </Text>

        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, natus.
          Ratione repellendus.
        </Text>
      </View>

      {/* Third/Circle Section */}
      {/* <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-32"></View>
      <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-32"></View> */}

      {/* Image Container/Section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-8 mr-4 "
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
          className="absolute bottom-40 w-24 h-24 border-l-2 border-r-2 border-t-4 
                        border-[#00BCC9] rounded-full justify-center items-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[35px] font-bold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
