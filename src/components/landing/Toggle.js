export default function Toggle({ ...props }) {
  return (
    <div className="toggle">
      <div className="toggle-container">
        <span>METRIC</span>
        <div className="toggle-btns">
          <button
            value={"Metric"}
            onClick={() => props.setUnit("metric")}
            className={props.unit === "metric" ? "active" : null}
            type="button"
          ></button>
          <button
            value={"Imperial"}
            onClick={() => props.setUnit("imperial")}
            className={props.unit === "imperial" ? "active" : null}
            type="button"
          ></button>
        </div>
        <span>IMPERIAL</span>
      </div>
    </div>
  );
}
