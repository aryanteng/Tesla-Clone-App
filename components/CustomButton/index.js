import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton({ text, type }) {
  const backgroundColor = type === "primary" ? "black" : "white";
  const color = type === "primary" ? "white" : "black";
  return (
    <TouchableOpacity
      onPress={() => console.warn(`${text} was Pressed!`)}
      style={styles.container}
    >
      <View style={[styles.button, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.text, { color: color }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
