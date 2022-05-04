import "../styles/styles.css";
import { StyleSheet, View,  Text  } from "react-native";

interface PropsCard {
  keyCard: number,
}

const cardTaskComponent = StyleSheet.create({
  cardTask: {
    width: "348.66px",
    height: "108.07px",
    borderRadius: 8,
    margin: "0 0 14.25px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardActive: {
    color: "#3c1f7b"
  },
  cardTaskHeader: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 0",
  },
  cardHeaderTitle: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    color: "#ffffff",
    margin: 0,
  },
  line: {
    width: "324.25px",
    height: "0px",
    borderWidth: 1,
    borderColor: "#c68aff",
    margin: 0,
  },
  CardTaskBody: {
    width: "320px",
  },
  CardTaskData: {
    display: "flex",
    flexDirection: "column",
  },
  cardBodyLabel: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    color: "#ffffff",
  },
  cardBodyText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: "#ffffff",
  }

})

export function Card(props: PropsCard) {
  return (
    <View style={cardTaskComponent.cardTask}>
      <View style={cardTaskComponent.cardTaskHeader}>
        <Text style={cardTaskComponent.cardHeaderTitle}></Text>
      </View>
    </View>
  );
}
