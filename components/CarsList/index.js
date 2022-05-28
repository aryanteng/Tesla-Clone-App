import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import array from "./cars";
import CarItem from "../CarItem";

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={({ item }) => {
          return <CarItem model={item.name} imgSrc={item.image} />;
        }}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
