import "../styles/styles.css";
import { StyleSheet } from "react-native";

import * as Icon from 'react-bootstrap-icons';
const optionDots = StyleSheet.create({
  mainDots: {
    color: "#fff",
    fontsize: "20px"
  }
})

export function Options() {
  return <BarChartLineFill style={optionDots.mainDots}/>;
}
