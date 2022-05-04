import { StyleSheet, View, Text, Button, Alert, TouchableOpacity } from "react-native";
import "../styles/styles.css";
interface PropsScreenStart {
  click: any;
}

const ScreenStartStyles = StyleSheet.create({
  secondPhone:{
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  secondH1: {
    fontFamily: "Inter",
    fontWeight: "900",
    fontSize: 56,
    color: "#fff",
  },
  secondPhrase: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    color: "#ffffff",
  },
  secondBtn: {
    backgroundColor: "#ffffff",
    width: "298px",
    height: "56px",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  secondBtnText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 24,
    color: "#0a0416",
  }
})

export function ScreenStart(props: PropsScreenStart) {
  return (
    <View style={ScreenStartStyles.secondPhone}>
      <Text style={ScreenStartStyles.secondH1}>on.time</Text>
      <Text style={ScreenStartStyles.secondPhrase}>
        Make yourself
        <br />
        more on time
      </Text>
      <TouchableOpacity onPress={() => console.log("buttonactive")} style={ScreenStartStyles.secondBtn}>
        <Text style={ScreenStartStyles.secondBtnText}>START</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => Alert.alert('Left button pressed')} title="START"/> */}
    </View>
  );
}
