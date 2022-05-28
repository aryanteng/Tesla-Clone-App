import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
  },
  subtitle: {
    color: "#000",
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
