import { Header } from "../components/Header";
import { BodyMain } from "../components/BodyMain";
import { StyleSheet, Text, View } from "react-native";
import "../styles/styles.css";

const mainScreen = StyleSheet.create({
  mainPhone: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
  }
})

export function MainScreen() {
  return (
    <View style={mainScreen.mainPhone}>
      <Header />
      <BodyMain />
    </View>
  );
}
