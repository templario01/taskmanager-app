import { Card } from "./Card";
import { AddCard } from "./AddCard";
import "../styles/styles.css";

export function BodyMain() {
    const list = [1, 2, 3, 4]
    const listCards = list.map((e) => {
      return <Card keyCard={e} />
    })
  
    return (
      <div style={{ width: '100%', height: 'auto' }} className="list-cardTasks">
        {listCards}
        <AddCard />
      </div>
    )
  }