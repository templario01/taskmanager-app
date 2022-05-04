import "../styles/styles.css";
import { StyleSheet } from "react-native";
import { BsFillBellFill } from "react-icons/bs";

// .main-bell,
// .main-dots {
//   color: #fff;
//   font-size: 20px;
// }

const notificationsBell = StyleSheet.create({
  mainBell: {
    color: "#fff",
    fontSize: 20
  }
})

export function Notifications() {
  return <BsFillBellFill style={notificationsBell.mainBell} />;
}
