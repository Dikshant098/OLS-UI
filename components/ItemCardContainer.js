import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity
      className="rounded-md border-2 border-red-100 
        space-y-1 px-2 py-2 shadow-sm shadow-black bg-white w-[175px] my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={20} color="#8597A2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
