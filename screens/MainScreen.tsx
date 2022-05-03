import { Header } from "../components/Header";
import { BodyMain } from "../components/BodyMain";
import "../styles/styles.css";

export function MainScreen() {
  return (
    <div className="main-phone">
      <Header />
      <BodyMain />
    </div>
  );
}
