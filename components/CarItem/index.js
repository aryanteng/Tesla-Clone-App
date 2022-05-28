import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <Image
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
}
