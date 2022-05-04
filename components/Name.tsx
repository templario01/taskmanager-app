import "../styles/styles.css";
import { StyleSheet, Text  } from "react-native";

// .main-logo {
//   font-family: "Inter";
//   font-weight: 900;
//   font-size: 16px;
//   color: #fff;
// }

const mainLogoComponent = StyleSheet.create({
  mainLogo:{
    fontfamily: "Inter",
    fontweight: "900",
    fontSize: 16,
    color: "#fff",
  }
})

export function Name() {
  return <Text style={mainLogoComponent.mainLogo}>on.time</Text>;
}
