import { Notifications } from "./Notifications";
import { Options } from "./Options";
import { Name } from "./Name";
import { SwitchButtons } from "./SwitchButtons";
import "../styles/styles.css";

export function Header() {
  return (
    <div className="main-phone-header">
      <div className="main-phone-header-toolbar">
        <Name />
        <div className="main-toolbar-options">
          <Notifications />
          <Options />
        </div>
      </div>
      <div>
        <SwitchButtons />
      </div>
    </div>
  );
}
