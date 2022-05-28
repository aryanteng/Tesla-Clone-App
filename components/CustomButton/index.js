import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton({ text, type }) {
  const backgroundColor = type === "primary" ? "black" : "white";
  const color = type === "primary" ? "white" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => console.warn(`${text} was Pressed!`)}
      >
        <Text style={[styles.text, { color: color }]}>{text}</Text>
      </Pressable>
    </View>
  );
}
