import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../../assets/images/menu.png")}
        style={styles.menu}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    background: "none",
    zIndex: 1000,
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
  },
});
