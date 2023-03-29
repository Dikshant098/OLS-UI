import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "TERTIARY" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B71F3",

    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  // container_PRIMARY: {
  //   backgroundColor: "#3B71F3",
  // },

  // container_TERTIARY: {

  // },

  text: {
    fontWeight: "bold",
    color: "white",
  },
  // text_TERTIARY: {
  //   color: "gray",
  // },
});
