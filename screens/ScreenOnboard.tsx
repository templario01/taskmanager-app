import { StyleSheet, Text, View } from "react-native";
import "../styles/styles.css";

const ScreenOnboardStyles = StyleSheet.create({
  firstPhone: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  firstH1: {
    fontFamily: "Inter",
    fontWeight: "900",
    fontSize: 50,
    color: "#fff",
  },
});

export function ScreenOnboard() {
  return (
    <View style={ScreenOnboardStyles.firstPhone}>
      <Text style={ScreenOnboardStyles.firstH1}>on.time</Text>
    </View>
  );
}
