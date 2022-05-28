import { StyleSheet, Text, View, Image } from "react-native";

import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <CarsList />
      </View>
    </>
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
