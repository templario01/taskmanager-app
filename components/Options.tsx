import "../styles/styles.css";
import { StyleSheet } from "react-native";
import { BsThreeDotsVertical } from "react-icons/bs";
const optionDots = StyleSheet.create({
  mainDots: {
    color: "#fff",
    fontSize: 20
  }
})

export function Options() {
  return <BsThreeDotsVertical style={optionDots.mainDots}/>;
}
