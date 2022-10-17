import "../styles/Clear.css";

export const Clear = (props) => (
  <div className="clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);
