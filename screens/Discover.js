import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
// import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [isLoading, setisLoading] = useState(false);
  const [mainData, setMainData] = useState([2]);

  const [type, setType] = useState("restaurants");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   setisLoading(true);
  //   getPlacesData().then((data) => {
  //     setMainData(data);
  //     setInterval(() => {
  //       setisLoading(false);
  //     }, 2000);
  //   });
  // }, []);
  return (
    <SafeAreaView className="flex-1 bg-red-50 relative">
      <View className="flex-row items-center justify-between px-8 py-3">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[32px] font-semibold">
            The Beauty In You
          </Text>
        </View>
        <View className="w-12 h-12 bg-gray-500 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View
        className="flex-row items-center bg-white mx-4 rounded-2xl py-1 px-1 mt-3 shadow-lg
         shadow-black border-1 border-solid border-red-400"
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "YOUR API KEY",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-6 mt-5">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imagesrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imagesrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imagesrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-6">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-1 mt-5 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg"
                    }
                    title="Something a very big"
                    location="Dubai"
                  />
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg"
                    }
                    title="Something a very big"
                    location="Dubai"
                  />
                  <ItemCardContainer
                    key={"102"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                    title="Sample"
                    location="Qatar"
                  />
                  <ItemCardContainer
                    key={"102"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                    title="Sample"
                    location="Qatar"
                  />
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg"
                    }
                    title="Something a very big"
                    location="Dubai"
                  />
                  <ItemCardContainer
                    key={"102"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                    title="Sample"
                    location="Qatar"
                  />
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg"
                    }
                    title="Something a very big"
                    location="Dubai"
                  />
                  <ItemCardContainer
                    key={"102"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                    title="Sample"
                    location="Qatar"
                  />
                  <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg"
                    }
                    title="Something a very big"
                    location="Dubai"
                  />
                </>
              ) : (
                <>
                  <View className="w-full h-[350px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found.
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
