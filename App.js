import { StyleSheet, Text, View, Image } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});