import { Card } from "./Card";
import { AddCard } from "./AddCard";
import { StyleSheet, View } from 'react-native';
import "../styles/styles.css";

const bodyMain = StyleSheet.create({
  listCardTasks: {
    width: "100%",
    height: "100%",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
})

export function BodyMain() {
    const list = [1, 2, 3, 4]
    const listCards = list.map((e) => {
      return <Card keyCard={e} />
    })
  
    return (
      <View style={bodyMain.listCardTasks}>
        {listCards}
        <AddCard />
      </View>
    )
  }