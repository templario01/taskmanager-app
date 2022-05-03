import { Notifications } from "./Notifications";
import { Options } from "./Options";
import { Name } from "./Name";
import { SwitchButtons } from "./SwitchButtons";
import "../styles/styles.css";
import { StyleSheet, View  } from "react-native";

// .mainphoneheader {
//   width: 100%;
//   display: flex;
//   flexdirection: column;
//   alignitems: center;
// }
// .mainphoneheadertoolbar {
//   width: 90%;
//   display: flex;
//   alignitems: center;
//   justifycontent: spacebetween;
// }
// .maintoolbaroptions {
//   width: 15%;
//   display: flex;
//   justifycontent: spacebetween;
// }

const phoneHeader = StyleSheet.create({
    mainPhoneHeader: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    mainPhoneHeaderToolbar: {
      width: "90%",
      display: "flex",
      alignitems: "center",
      justifycontent: "spacebetween",
    },
    mainToolbarOptions: {
      width: "15%",
      display: "flex",
      justifycontent: "spacebetween"
    }
})
export function Header() {
  return (
    <View style={phoneHeader.mainPhoneHeader}>
      <View style={phoneHeader.mainPhoneHeaderToolbar}>
        <Name />
        <View style={phoneHeader.mainToolbarOptions}>
          <Notifications />
          <Options />
        </View>
      </View>
      <View>
        <SwitchButtons />
      </View>
    </View>
  );
}
