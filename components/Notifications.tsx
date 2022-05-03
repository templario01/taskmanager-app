import "../styles/styles.css";
import { StyleSheet } from "react-native";
// import { BsFillBellFill } from "react-icons/bs";

// .main-bell,
// .main-dots {
//   color: #fff;
//   font-size: 20px;
// }

const notificationsBell = StyleSheet.create({
  mainBell: {
    color: "#fff",
    fontsize: "20px"
  }
})

export function Notifications() {
  // return <BsFillBellFill style={notificationsBell.mainBell} />;
}
