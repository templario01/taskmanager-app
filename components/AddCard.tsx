import "../styles/styles.css";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { StyleSheet, View } from "react-native";

const addCardStyle = StyleSheet.create({
  addCard: {
    position: "absolute",
    left: "340px",
    top: "813px",
    fontSize: "48px",
    padding: 0,
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(14, 8, 24, 0.25)",
  }
})

export function AddCard() {
  return (
    <View style={addCardStyle.addCard}>
      <BsFillPlusCircleFill />
    </View>
  );
}
