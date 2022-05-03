interface PropsCard {
  keyCard: number;
}

export function Card(props: PropsCard) {
  return (
    <div className="card-task card-active" key={props.keyCard}>
      <div className="card-task-header">
        <h3 className="card--header-title">Title</h3>
        <label className="card--header-check">
          <input className="card---check" type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <hr className="line" />
      <div className="card-task-body">
        <table className="card--body-data">
          <tr>
            <td className="card--body-label">Time</td>
            <td className="card--body-text">valueTime</td>
          </tr>
          <tr>
            <td className="card--body-label">Place</td>
            <td className="card--body-text">valuePlace</td>
          </tr>
          <tr>
            <td className="card--body-label">Notes</td>
            <td className="card--body-text">valuePlace</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
