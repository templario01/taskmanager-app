import "../styles/styles.css";
interface PropsScreenStart {
  click: any;
}

export function ScreenStart(props: PropsScreenStart) {
  return (
    <div style={{ width: "100%", height: "100%" }} className="second-phone">
      <h1 className="second-h1">on.time</h1>
      <h3 className="second-phrase">
        Make yourself
        <br />
        more on time
      </h3>
      <button onClick={props.click} className="second-btn">
        START
      </button>
    </div>
  );
}
