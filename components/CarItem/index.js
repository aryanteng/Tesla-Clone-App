import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import CustomButton from "../CustomButton";

export default function CarItem({ imgSrc, model }) {
  return (
    <View style={styles.carContainer}>
      <Image source={imgSrc} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subtitle}>
          Order Online for{" "}
          <Text style={{ textDecorationLine: "underline" }}>
            Touchless Delivery
          </Text>
        </Text>
      </View>
      <View style={{ width: "100%", marginBottom: 50 }}>
        <CustomButton text={"Custom Order"} type={"primary"} />
        <CustomButton text={"Existing Inventory"} type={"secondary"} />
      </View>
    </View>
  );
}
