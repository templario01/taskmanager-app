import "../styles/styles.css";
import { StyleSheet, View, Button, Alert } from 'react-native';

const switchButtons = StyleSheet.create({
  mainButtons: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#3c1f7b",
    borderRadius: 4,
    alignItems: "center",
    width: "298px",
  },
  mainButton: {
    background: "transparent",
    border: "none",
    height: "40%",
    borderRadius: 4,
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontweight: "600",
    fontSize: 16,
    color: "#ffffff",
    width: "133%",
  },
  btnActive: {
      backgroundColor: "#272430",
      height: "32px",
      width: "133px",
  }
})

export function SwitchButtons() {
  return (
    <View style = {switchButtons.mainButtons}>
      <Button onPress={() => Alert.alert('Left button pressed')} title="Schedule"/>
      <Button onPress={() => Alert.alert('Left button pressed')} title="Note"/>
    </View>
  );
}
